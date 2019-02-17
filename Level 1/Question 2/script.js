//Console.log out elements in JSON file
var jsonData = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};

var jsonArray = jsonData.video;

console.log("video:");
         
for(var i=0; i < jsonArray.length; i++) {
    
    var myData = jsonArray[i];
    console.log("id: " + myData.id);
    console.log("name: " + myData.name);
    console.log("url: " + myData.url)
}
console.log("")

console.log("author:", "data:")
    
for(var l=0; l < myData.author.data.length; l++) { 
    
    var dataArray = myData.author.data[l];
    console.log("name_author: " + dataArray.name_author);
    console.log("url: " + dataArray.url);
    console.log("type: " + dataArray.type)
}
            