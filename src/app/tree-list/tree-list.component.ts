import { Component, OnInit, inject } from '@angular/core';
import { TreeDataService } from '../services/tree-data.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';



interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})

export class TreeListComponent implements OnInit {
  public _treeService = inject(TreeDataService);
  constructor() { }
  public treeData = this._treeService.foodTree;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new ArrayDataSource(this.treeData);
  ngOnInit(): void {
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  trackByFn(){
    
  }

}
