import { Component, OnInit, inject } from '@angular/core';
import { TreeDataService } from '../services/tree-data.service';

@Component({
  selector: 'app-tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['./tree-container.component.css']
})
export class TreeContainerComponent implements OnInit {

  constructor() { }
 public treeData = inject(TreeDataService);
 public data= this.treeData.data
  ngOnInit(): void {

  }

}
