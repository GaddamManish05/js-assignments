
// It  Returns Promise<respone> bt fetch function it acts as promise producer 
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => res.json())
// .then(data => console.log("data is : ",data))
// .catch(error => console.log("error is :",error))

// Promise consumer

async function getData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json();
    console.log("data is : ",data)
}

getData();

