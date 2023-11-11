import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  constructor() {}
  public data = ['data 1', 'data 2'];
  public foodTree =  [
    {
      name: 'Fruit',
      children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
        },
        {
          name: 'Orange',
          children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
        },
      ],
    },
  ];
     
}
