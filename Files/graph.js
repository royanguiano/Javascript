function Graph(){

	this.nodes = []; 
	this.graph = {};
	this.end = null; 
	this.start = null; 
}

Graph.prototype.reset = function(){
	for(let i = 0; i < this.nodes.length; i++){
		this.nodes[i].searched = false; 
		this.nodes[i].parent = null; 
	}
}

Graph.prototype.setStart = function(actor){
	this.start = this.graph[actor]; //get value from actor key
	return this.start; 
}

Graph.prototype.setEnd = function(actor){
	this.end = this.graph[actor]; 
	return this.end; 
}

Graph.prototype.addNode = function(n){
	//adding node into nodes array
	this.nodes.push(n); 
	let title = n.value;
	this.graph[title] = n; //key value pair sort of like a hashtable
}

Graph.prototype.get = function (actor){
	//this.graph[actor] is return undefine if the actor does not 
	//exists in the object. 
	let n = this.graph[actor]; //this.object[property] returns value
	return n; 
}