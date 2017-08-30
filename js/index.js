
let string = 'https://www.w3schools.com/xml/simple.xml'
//console.log(xmlfunc(string)); 

function xmlfunc(url){
	let xmlobject = new XMLHttpRequest(); 
	let ul = document.getElementById('.ullist'), newElement, newText; 

	xmlobject.open('GET', url, true); 
	xmlobject.onreadystatechange = function (){
		if(xmlobject.status == 200 && xmlobject.state == 4){
			for(let i = 0; i < xmlobject.length; i++){
				newElement = xmlobject.createElement('LI'); 
				newText = xmlobject.createTextNode(JSON.parse(xmlobject.responseText)); 
				newElement.appendChild(newText); 
				console.log(ul.appendChild(newElement)); 
			}
		}
	}
	xmlobject.send(null); 
}; 

//console.log('Calling CORPS object' );
//let xhr = ajaxCORPSCall('GET', 'https://www.w3schools.com/xml/simple.xml');

/*if(!xhr){
	throw new Error('CORPS not supported'); 
}*/

function ajaxCORPSCall(method, url){
	$.ajax({
		type: method, 
		url: url, 
		contentType: 'text/plain', 
		xhrFields: {
			withCredentails: true
		}, 
		headers: {

		}, 
		success: function(data){
			console.log('success: ', data);
		}, 
		error: function(error){
			console.log('error: ', error); 
		}
	}); 
}
function callCORPS(method, url){
	let xhr = new XMLHttpRequest(); 

	if('withCredentails' in xhr){
		xhr.open(method, url, true); 
	} else if (typeof XDomaininRequest !== 'undefined'){
		xhr = new XDomaininRequest(); 
		xhr.open(method, url); 
	} else {
		xhr = null; 
	}

	return xhr; 
}

/*
url ex. http://api.giphy.com
key ex. 
path
any parameters
- query
- limit 
- 


let body = document.getElementsByTagName('Body'); 
//console.log(body); 

let apikey = 'a2c8f7ec88af44c38bf0b0d0c77c1fbb&'; 
let url = 'https://api.giphy.com/v1/gifs/trending?api_key='; 
//let path = 'a2c8f7ec88af44c38bf0b0d0c77c1fbb&tag='; 
let tags = 'google'
let and = '&rating='; 
let rating = 'G'; 
let limit = '&limit=25'
let path = url + apikey + limit + and + rating; 

//console.log(apicall('GET', path)); 

function apicall(method, url){
	let httprequest = new XMLHttpRequest(); 
	httprequest.open(method, url, true); 
	httprequest.onreadystatechange = function(){
		if(httprequest.status === 200 && httprequest.readyState === 4){
			let result = JSON.parse(httprequest.responseText);
			let imageurl = result.data;
			setInterval(createImage(imageurl), 2000 ); 
			 
		}
	}
	httprequest.send(); 
} 

var randomdiv = document.createElement('DIV'); 
document.body.appendChild(randomdiv); 

function createImage(data){
	console.log('test'); 
	for(let i = 0; i < data.length; i++){
		let img = document.createElement('IMG'); 
		img.setAttribute('src', data[i].images.original.url);	
		img.setAttribute('class', 'importedImages');  
		randomdiv.appendChild(img); 
	}
}

$.getJSON(path,function(data){
	console.log(data.data); 
	createImage(data.data);  
}); 

//console.log('dom manipulation tutorial'); 

let rect = document.getElementById('mycanvas'); 
let ctx = rect.getContext('2d'); 
//rect.rect(20, 20, 150, 150); 
ctx.rect(20, 20, 150, 150);
ctx.fillStyle = 'red'; 
ctx.fill(); 
rect.style.position = 'fix';
rect.style.left = 0; 
rect.style.right = 10; 
var b = document.getElementsByClassName('main_content'); 
b.insertBefore = (rect, b); 
 

let w = document; 
w.addEventListener('click', drawtext); 
let s = document.getElementsByClassName('sliders');

s.addEventListener('click', function (event){
	if(e.target && e.target.className == 'sliders'){
		console.log('list item', e.target.id); 
	}	
}); 

function drawtext(){
	
	let slider = document.createElement('input'); 
	slider.type = 'range'; 
	slider.className = 'sliders'; 
	slider.id = Math.floor(Math.random() * 100); 
	slider.value = Math.random() * 100; 



	console.log('slider value', slider.value); 
	let footer = document.getElementsByClassName('footer'); 
	console.log('footr: ', footer); 
	footer.appendChild(sliders);

	let h1 = document.createElement('P'); 
	//h1.textNode = 'this is a text node'; 
	//h1.style.backgroundColor = Math.floor(Math.random() * 255); 
	h1.innerHTML = Math.floor(Math.random() * 100); 
	document.body.appendChild(h1); 
	console.log('adding ', h1); 
}



console.log('IMPLEMENTING DFS ALGORITHM ON A GRAPH'); 

/*
we need a node constructor function
- value
- edges[] = edges that connect to other nodes 
- boolean checked = true it has been checked, false it has not been checked
- parent = this property has the value of the previous node we are visiting 


hashtable or graph object
1. for this object we need to store an array of all nodes
we can look up this object as a hashtable where we have
a key value pair functionality. 
key = actores name
value = values like edges, parent, 

steps: 
1. read data
2. create node for every movie and every movie.actor

*/


var data = mydata; 

// loadJson(); 
// console.log('this is a test console.log')
// function loadJson(){
// 	let xobj = new XMLHttpRequest(); 
// 	xobj.overrideMimeType('application/json');
// 	xobj.open('GET', chrome.extension.getURL('/Files/movies.json'), true); 
// 	xobj.onreadystatechange = function(){
// 		if(xobj.status == 4 && xobj.readyState == 400){
// 			data = JSON.parse(xobj.responseText); 
// 			display(data); 
// 		}
// 	}
// 	xobj.send(null); 
// }

// function display(data){
// 	console.log('here is the data', data); 
// }

let graph = new Graph(); 
let movies = data.movies; 
let dropdown = document.createElement('Select'); 
document.body.appendChild(dropdown); 
let option; 


for(let i = 0; i < movies.length; i++){
	let movie = movies[i].title; //getting title of movie
	let cast = movies[i].cast; 	//getting cast array
	//creating a new node for every movie 
	let movieNode = new Node(movie); 	
	graph.addNode(movieNode); 


	for(let j = 0; j < cast.length; j++){
		let actor = cast[j]; 
		//graph.get(actor) will return null if the actor node does not exists
		let actorNode = graph.get(actor); 
		//if actorNode is null then we will create a new actor node
		if(actorNode === undefined){
			actorNode = new Node(actor); 
			option = document.createElement('Option'); 
			option.value = actor; 
			option.innerHTML = actor; 
			dropdown.appendChild(option); 
		}
		graph.addNode(actorNode); 	//adding node of actor into the graph
		movieNode.addEdges(actorNode); //adding edges that are related by movie 
	}
}

dropdown.addEventListener('change', bfs); 

function bfs(){

	graph.reset(); //rest all nodes to searched and parents 

	//get start node on where to search until end node (target node)
	let end = 'Kevin Bacon';  
	let start = dropdown.value; 

	end = graph.setEnd(end); //set the end point
	start = graph.setStart(start); //set the start to search
	console.log(graph)

	//breadth first search: 
	/*
	1. checks edges of actor nodes to see if we have a match
	2. if its not the actor that we are looking for, then we store 
		the checked node into a que

	3. when we are finish checking edges we go to the que and 
		get the first index of array and we check all its edges
		we iterate through the que until we find the node. 
		if the node is never found and the que is empty then we
		return not in the graph
	4. we have to keep track of previous cheked node in the graph
	so we need a variable for the previous node. 
	*/

	let que = []; //que for the checked nodes in graph
	start.searched = true; //set node.searched to true because its visited 
	que.push(start); //add searched node into the que

	while(que.length > 0){	//as long as que is not empty
		let current = que.shift(); 	//get first element out of the que
		//check if current node is the target node
		if(current == end){
			console.log('found the node: ', current.value); 
			break; //found the node so no need to keep iterating 
		}

		//get edges array from node 
		let edges = current.edges; //get edges from current node search
		for(let i = 0; i < edges.length; i++){	//iterate through the edges
			//get neighbor. neighbor has related nodes at edges array
			let neighbor = edges[i]; 
			//checking if neighbor has already been checked, if not then go in if statement
			if(!neighbor.searched){	//searched is a boolean
				//set neighbor property (searched) == true
				neighbor.searched = true; 
				//neighbor.parent = previous node that was searched
				neighbor.parent = current; 
				//store this current neighbor into the que to check 
				//its edges later
				que.push(neighbor); 
			}
		}
	}

	let path = []; //this path[] will show the visited nodes incrementing from index 0 - n
	path.push(end); //start with end node 
	let next = end.parent; //get end.parent is previous
	//iterating backwards from the searching algorithm. 
	//searching from end -> start
	while(next !== null){	
		path.push(next); 
		next = next.parent; 
	}

	let txt = ''; 

	//printing the path that was created while iterating backwards
	for(let i = path.length - 1; i >= 0; i--){
		let n = path[i]; 
		txt += n.value; 
		
		if(i !== 0){
			txt +=  ' -->'; 
		}
		
		let p =	document.createElement('P'); 
		p.innerHTML = txt; 
		document.body.appendChild(p); 
	}	 
}





































