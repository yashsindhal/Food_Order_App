import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {
   
  }

  getFoodById(id: number): Foods {
    return this.foodlist.find((food) => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All') return this.foodlist;
    else return this.foodlist.filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Fastfood', count: 7 },
      { name: 'Lunch', count: 6 },
      { name: 'Dinner', count: 5 },
      { name: 'Rice', count: 2 },
      { name: 'Breakfast', count: 3 },
      { name: 'Sweets', count: 1 },
    ];
  }
  foodlist: any[] = [];

  getAll() {
    return this.foodlist;
    // return[
    //   {
    //     id:1,
    //     name: 'Briyani',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:false,
    //      origins:['indian'],
    //      star: 4.0,
    //      imageUrl:'/assets/briyani.jpg',
    //      tags:['Lunch', 'Rice', 'Dinner'],
    //   },

    //   {
    //     id:2,
    //     name: 'Burger',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['italy'],
    //      star: 4.5,
    //      imageUrl:'/assets/Burger.jpg',
    //      tags:['Lunch', 'Fastfood'],
    //   },

    //   {
    //     id:3,
    //     name: 'Dosa',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['south indian'],
    //      star: 4.5,
    //      imageUrl: '/assets/dosa.jpg',
    //      tags:['Breakfast', 'Fastfood'],
    //   },

    //   {
    //     id:4,
    //     name: 'French Fries',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['italy'],
    //      star: 4.5,
    //      imageUrl:'/assets/french fries.jpg',
    //      tags:['Breakfast', 'Fastfood'],
    //   },

    //   {
    //     id:5,
    //     name: 'Gulab Jamun',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['indian'],
    //      star: 4.5,
    //      imageUrl:'/assets/gulabjamun.jpg',
    //      tags:['Sweets'],
    //   },

    //   {
    //     id:6,
    //     name: 'Idli',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['italy'],
    //      star: 2.5,
    //      imageUrl:'/assets/idli.jpg',
    //      tags:['Breakfast', 'Fastfood'],
    //   },

    //   {
    //     id:7,
    //     name: 'Manchurian',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['Chinese'],
    //      star: 3.5,
    //      imageUrl:'/assets/manchurian.jpg',
    //      tags:['Lunch', 'Fastfood', 'Dinner'],
    //   },

    //   {
    //     id:8,
    //     name: 'Noodles',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['Chinese'],
    //      star: 5,
    //      imageUrl:'/assets/noodles.jpg',
    //      tags:['Lunch', 'Fastfood', 'Dinner'],
    //   },

    //   {
    //     id:9,
    //     name: 'Pizza',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['italy'],
    //      star: 4.5,
    //      imageUrl:'/assets/pizza.jpg',
    //      tags:['Lunch', 'Fastfood', 'Dinner'],
    //   },

    //   {
    //     id:10,
    //     name: 'Plain Rice',
    //      cookTime:'10-20',
    //      price:10,
    //      favorite:true,
    //      origins:['indian'],
    //      star: 4.5,
    //      imageUrl:'/assets/rice.jpg',
    //      tags:['Lunch', 'Rice', 'Dinner'],
    //   }

    // ];
  }
}
