
function Node(value){
	this.value = value;
	//edges refers to other actors that this node is related to by movies  
	this.edges = []; 
	this.searches = false; 
	this.parent = null; 
}


Node.prototype.addEdges = function(neighbor) {
	this.edges.push(neighbor); //incrementing edges array
	neighbor.edges.push(this); //both direction
}