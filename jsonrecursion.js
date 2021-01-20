var currentNode = {
  id: "0",
  children: [
    {
      id: "1",
      children: ["a", "b", "c"],
    },
    {
      id: "2",
      children: ["x", "y", "z"],
    },
    {
      id: "3",
      children: ["m", "n", "o"],
    },
  ],
};

const findNode = (id, currentNode)=> {
  var i, currentChild, result;
  if (id == currentNode.id) {
    return currentNode;
  } else {
    // Use a for loop instead of forEach to avoid nested functions
    // Otherwise "return" will not work properly
    console.log(currentNode.children.length);
    for (i = 0; i < currentNode.children.length; i++) {
      currentChild = currentNode.children[i];
      // Search in the current child
      result = findNode(id, currentChild);
      // Return the result if the node has been found
      if (result !== false) {
        return result;
      }
    }
    // The node has not been found and we have no more options
    return false;
  }
}

console.log(findNode(0, currentNode));