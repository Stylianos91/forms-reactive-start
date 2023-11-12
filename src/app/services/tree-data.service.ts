import { Injectable } from '@angular/core';
import { of } from 'rxjs';
interface FoodNode {
  name: string;
  level: number;
  children?: FoodNode[];
}
@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  constructor() {}
  public data = ['data 1', 'data 2'];
  public foodTree =  [
    {
      name: 'Fruit',
      level: 1,
      children: [{level: 3, name: 'Apple'}, {level: 3, name: 'Banana'}, {level: 3, name: 'Fruit loops'}],
    },
    {
      name: 'Vegetables',
      level: 1,
      children: [
        {
          name: 'Green',
          level: 2,
          children: [{level: 3, name: 'Broccoli'}, {level: 3, name: 'Brussels sprouts'}],
        },
        {
          name: 'Orange',
          level: 2,
          children: [{level: 3, name: 'Pumpkins'}, {level: 3, name: 'Carrots'}],
        },
      ],
    },
  ];
  public printProperty(name: string, data: any) {
    console.log(`${name}: ${data}`);
  }
  public iterateTree(object: FoodNode, callback: (name: string, data: any) => void) {
    // Loop through the properties of the object
    for (let key in object) {
      // Check if the property is an object and not null
      if (typeof object[key] === "object" && object[key] !== null) {
        // Call the function recursively with the nested object and the same callback function
        this.iterateTree(object[key], callback);
      } else {
        // Invoke the callback function with the property name and value
        callback(key, object[key]);
      }
    }
  }
  public roll(tree:any){
    this.iterateTree(tree, this.printProperty);
  }
     
}
