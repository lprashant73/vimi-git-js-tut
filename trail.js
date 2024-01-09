//Asynchronous programming in Javascript.
/* console.log('Start');
console.log(a);
let a;
//console.log(b);
let b = () => {
    console.log(`Hello, i'm function "a"......`);
};
function a() {
    console.log(`Hello, i'm function "b"`)
}; */
/* function b() {
    let x = 0;
    for (i = 0; i <= 1000000000; i++) {
        x++;
    }
    console.log('The loop running in b has been completed.')
}; */
/* function a() {
    setTimeout(() => {
        console.log("Hello there, how are you?");
    }, 5000);
}; 
a(); */
//b();
//console.log("Finish");
/* function b(p, cb) {
    let r = p + 5;
    let a = cb(r);
    return a;
};
function c(r) {
    for (i = 0; i <= 1000000000; i++) {
        r++;
    };
    return r;
};
function a(x, cb) {
    console.log('Start');
    let y = x * 3;
    console.log('The value of y is:', y);
    let z = cb(y, c);
    console.log('The value of z is :', z);
    console.log('Finish');
};
a(5, b); */
/* console.log('Start.')
async function a() {
    let result;
    try {
        result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve('Resolved return this value.');
                }
                if (!success) {
                    reject('failed to perform operation.');
                }
            }, 5000);
        });
        console.log('Data fetched by the promise: ', result)

    } catch (err) {
        console.log(err);
    };
};
a();
console.log('finished.'); */
/* async function calling_function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log('hello');
    const data = await response.json();
    console.log(data);
};
calling_function(); */
/* function call_function() {
    const result = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (response.status != 200) {
                    const error = new Error("the following error occured: ", response.status);
                    throw error;
                }
                return response.json();
            }).then(data => resolve(data)).catch(error => {
                reject(error);
            });
    });
    console.log(result);
    setTimeout(() => console.log(result), 5000);
};
call_function(); */