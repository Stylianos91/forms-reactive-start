import { Component, OnInit, inject } from '@angular/core';
import { TreeDataService } from '../services/tree-data.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { DeleteNodeService } from '../services/delete-node.service';

interface FoodNode {
  name: string;
  level: number;
  children?: FoodNode[];
}

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
})
export class TreeListComponent implements OnInit {
  public _treeService = inject(TreeDataService);
  public _deleteService = inject(DeleteNodeService)
  constructor() {}
  public treeData: FoodNode[] = this._treeService.foodTree;
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new ArrayDataSource(this.treeData);
  ngOnInit(): void {}
  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  trackByFn() {}

  public tempNode: FoodNode = { name: 'patates', level: 3, children: [] };

  public refreshTreeData() {
    const data = this.treeData;
    this.dataSource = new ArrayDataSource(null);
   // this.dataSource = new ArrayDataSource(data);
    
  }

  public showDelete(){
    this._deleteService.showTree();
  }
  public doDelete(){
    this._deleteService.rollDelete();
  }


  public addNode(node: FoodNode, event: any) {
    console.log('node', node);
    console.log('node parent', this.treeControl);
    console.log('event', event);
  } 
  deleteNode(node: FoodNode,  event: MouseEvent) {
    console.log('node.name', node.name)
this.treeData= this._deleteService.deleteNodeByName(this.treeData, node.name)
this.dataSource = new ArrayDataSource(null);
this.dataSource = new ArrayDataSource(this._deleteService.deleteNodeByName(this.treeData, node.name));
}
}
