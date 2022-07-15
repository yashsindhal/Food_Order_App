import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { FoodService } from './food/food.service';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  url = "http://localhost:4001/food/getdata";
  constructor(private http:HttpClient){}
  apicall(){
    return this.http.get(this.url);
  }

//   constructor(
//     private http:HttpClient,
//     private foodService: FoodService
//   ) { 
//     console.log("hello")

//     this.apiCall()

//   }

//   async apiCall(){
//     return await this.http.get('http://localhost:4001/food/getdata').subscribe(async(res: any) => {
//       console.log('data', res);
//       this.foodService.foodlist = await res.foods;
//     });
//  }
}
