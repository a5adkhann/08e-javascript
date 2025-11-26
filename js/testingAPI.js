// fetch("../api/users.json")
// fetch("https://dummyjson.com/products")
fetch("https://my-json-server.typicode.com/typicode/demo/posts")
.then(response => response.json())
.then(data => console.log(data));