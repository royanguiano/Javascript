function Tree(data){
	let node = new Node(data); //creates new instance of Node()
	this.root = node; 			//assigs node to the root
}

let tree = new Tree('ceo'); 

/*
steps to this function: 
1. self invoking-> self terminating-> callback function 
*/
Tree.prototype.traverseDF = function(callback){
	//self invoked callback function
	(function recurse(currentNode){
		for(let i = 0,  length = currentNode.children.length; i < length; i++){
			recurse(currentNode.children[i]); 
		}
		callback(currentNode); 
	})(this.root); 
}; 


Tree.prototype.traverseBF = function(callback){
	//create a que[]
	let que = new Que(); 
	//start by adding the root node to the que
	que.enque(this.root); 

	//shift the first element that went in the que and set it to 
	//current node
	currentTree = que.deque(); 

	//while the que has nodes and currenttree nodes is not empty
	while(currentTree){
		//iterate the children[] until its end
		for(let i = 0, length = currentTree.children.length; i < length; i++){
			//on every iteration add each node from the children array into the que
			que.enque(currentTree.children[i]); 
		}
		//call the callback() with currenttree node from the que 
		callback(currentTree); 
		//go to the node in the que
		currentTree = que.deque(); //get next node in que and repeat until que is empty
	}
}

Tree.prototype.contains = function(callback, traversal){
	traversal.call(this, callback);
}

Tree.prototype.add = function(data, toData, traversal) {
	let child = new Node(data),
		parent = null,
		callback = function(node){
			if(node.data === toData){
				parent = node;
			}
		};

	this.contains(callback, traversal); 

	if(parent){
		parent.children.push(child);
		child.parent = parent;
	} else {
		throw new Error('cannot add node to a non-existent parent');
	}
};

tree.add('vp', 'CEO', Tree.traverseBF); 




































