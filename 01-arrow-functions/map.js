const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {  // szám duplázás
    return number * 2;
})

const doubledNumbers2 = numbers.map(number => number * 2);   // Arrow function

console.log(doubledNumbers);  // [2, 4, 6, 8, 10]

const products = [ //termékek
    {name: 'Tévé', price: 10000},
    {name: 'Telefon', price: 20000},
    {name: 'Laptop', price: 50000}
];

const prices = products.map(product => product.price);

console.log(prices);

const updatedProducts = products.map(product => {
    return{
        name: product.name, //név
        price: product.price, // ár
        discountedPrice: product.price * 0.9 // 10% kedvezményt  kedvezményes ár
    };
});

console.log(updatedProducts);

// Arrow function


function add(a, b){
    return a + b;
}

const add = (a, b)=> a + b;

const great = () => console.log('Hello!');

const double = n => n * 2;


const numbers2 = [1, 2, 3, 4, 5];

const doubled = numbers2.map(n => n * 2);

const button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('Button clicked!'); 
});

const person = {
    name: 'John',
    sayName: function(){
        console.log(this.name);        
    }};


const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((acc, cur) =>{  // accumulator / currentValue
    return acc + cur;
})  

console.log(sum);

const total = products.reduce((acc, cur) => acc + cur.price, 0);

console.log(total);
