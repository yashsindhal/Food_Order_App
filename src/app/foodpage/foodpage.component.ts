import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!:Foods

  constructor(private activatedRoute:ActivatedRoute, 
    private foodServices:FoodService, private cartService:CartService, private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodServices.getFoodById(params['id'])
        console.log("o", this.food)
      })
     }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
