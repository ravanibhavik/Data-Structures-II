/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }
  
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) { // pass in this.children[0][1]
    const currentValue = this.value;
    const currentChildren = this.children;
    
    const containsValue = function (val, child) {
      console.log(val);
      console.log(child);
      if (val === value) return true;
      else if (child.length > 0) {
        for (let i = 0; i < child.length; i++) {
          return containsValue(child[i].value, child[i].children); 
        }
      }
    }
    
    if (containsValue(currentValue, currentChildren)) return true;
    else return false;
  }
}


//   contains(value) {
//     if (this.value === value) {
//       return true;
//     }
//     for (let i = 0; i < this.children.length; i++) {
//       if (this.children[i].contains(value)) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// module.exports = Tree;


tree = new Tree(10);
// console.log(tree);
tree.addChild(5);
// console.log(tree);
tree.children[0].addChild(6);
console.log(tree.contains(6));

// tree = {value, children: [
//   {
//     value, children: []
//   }
// ]
// }
