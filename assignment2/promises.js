async function getData(uId) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                 console.log("Fetched data");
                 resolve("skc@gmail.com");   
        },4000);
    })
    }
    
    console.log("start");
    var email = getData("skc");
    email.then((message)=>"Email id of the user id is: " + message);
    console.log("end");