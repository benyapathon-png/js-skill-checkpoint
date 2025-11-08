// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};

async function getUserName () {
    const user = await getData();
    const data = await user.json();
    data.map(callbackOperation)
    function callbackOperation (getUserName){
    return getUserName.name
    }
    console.log(data.map(callbackOperation))
    }

getUserName()