// string
var a = '';
var b = '';
var c = "";
var myName = 'heeju';
var message = "Hello, ".concat(myName);
myName.toLocaleUpperCase();
// number
var count = 10;
var price = 1.23;
var temperature = -23;
var distance = 1.23e-10;
var total = count * price;
var average = total / count;
var infinity = Infinity;
var minusInfinity = -Infinity;
var notANumber = NaN;
// boolean
var isOpen = true;
var isCompleted = false;
if (isOpen) {
    console.log('open');
}
if (!isCompleted) {
    console.log('completed');
}
var isAvailable = isOpen && !isCompleted;
// null
var user = null;
function login(username) {
    user = username;
}
function logout() {
    user = null;
}
login('heeju');
logout();
// any
var someValue = 12.345;
someValue.toString();
someValue = true;
