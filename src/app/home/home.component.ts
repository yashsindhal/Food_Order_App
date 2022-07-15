import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { GetApiService } from '../services/get-api.service';


 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = [];
  apicall:any;

  constructor(private fs:FoodService, private router:ActivatedRoute, private getapi:GetApiService) { 
    getapi.apicall().subscribe((data)=>{
      this.apicall=data
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods = this.fs.foodlist.filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods= this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods = this.fs.foodlist;
    })
  
  }

}
