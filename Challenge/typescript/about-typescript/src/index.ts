// string
const a: string = '';
const b: string = '';
const c: string = ``;

let myName: string = 'heeju';
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();

// number
let count: number = 10;
let price: number = 1.23;
let temperature: number = -23;
let distance: number = 1.23e-10;

let total: number = count * price;
let average: number = total / count;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let notANumber: number = NaN;

// boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
    console.log('open');
}

if (!isCompleted) {
    console.log('completed');
}

let isAvailable: boolean = isOpen && !isCompleted;

// null
let user: string | null = null;

function login(username: string) {
    user = username;
}

function logout() {
    user = null;
}

login('heeju');
logout();

// any
let someValue: any = 12.345;

someValue.toString();
someValue = true;
