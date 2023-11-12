import { Injectable } from '@angular/core';
interface TreeNode {
  name: string;
  data: any;
  children?: TreeNode[];
}

@Injectable({
  providedIn: 'root',
})
export class DeleteNodeService {
  public readonly tree: TreeNode = {
    name: 'A',
    data: 'a',
    children: [
      {
        name: 'B',
        data: 'b',
        children: [
          {
            name: 'C',
            data: 'c',
          },
          {
            name: 'D',
            data: 'd',
          },
        ],
      },
      {
        name: 'E',
        data: 'e',
        children: [
          {
            name: 'F',
            data: 'f',
          },
          {
            name: 'G',
            data: 'g',
            children: [
              {
                name: 'H',
                data: 'h',
              },
            ],
          },
        ],
      },
    ],
  };

  constructor() {}
  public rollDelete() {
    console.log('oldTree', this.tree);
    const newTree = this.deleteNodeByName(this.tree, 'H');
    console.log('newTree', newTree);
  }
  public showTree(){
    console.log('oldTree', this.tree);
  }
  public deleteNodeByName(object: any, nodeName: string): any {
    // If the object is null or undefined, return the object
    if (object == null) {
      return object;
    }
    // If the object has a property with the node name, return null
    if (object.name === nodeName) {
      return null;
    }
    // If the object has children, loop through them and call the function recursively
    if (object.children && object.children.length > 0) {
      // Initialize an empty array to store the new children
      let newChildren: any[] = [];
      for (let child of object.children) {
        // Call the function recursively and store the result
        let result = this.deleteNodeByName(child, nodeName);
        // If the result is not null, add it to the new children array
        if (result != null) {
          newChildren.push(result);
        }
      }
      // Update the object's children with the new children array
      object.children = newChildren;
    }
    // Return the object
    console.log('return object', object)
    return object;
  }
}
