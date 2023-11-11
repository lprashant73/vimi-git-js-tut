/* console.log("Start");
function b() {
    let x = 0;
    for (i = 0; i <= 1000000000; i++) {
        x++;
    }
    console.log('The loop has been completed.')
};
function a() {
    setTimeout(() => {
        console.log("Hello there, how are you?");
    }, 5000);
}; 
a();
b();
console.log("Finish"); */
function b(p, cb) {
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
a(5, b);
#This line is added.
