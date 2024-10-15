const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {  // szám duplázás
    return number * 2 ;
})  

const doubledNumbers2 = numbers.map(number => number * 2);  // Arrow function

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


const products = [
    {name: 'Tévé', price: 10000},
    {name: 'Telefon', price: 20000},
    {name: 'Laptop', price: 50000},
];

const prices = products.map(products => products.price);

console.log(prices);

const updatedProducts = products.map(product => {
    return{
        name : product.name,    // név
        price: product.price,   //ár
        discountedPrice: product.price * 0.9 // 10% kedvezmény
    };
});

console.log(updatedProducts);