let textContent = `Dead can dance - Live from Barcelona, 22nd March, 2005`

// const pattern = new RegExp();
// const pattern = /Dead/;

// const result = pattern.exec(textContent);
// const result = pattern.test(textContent);

// const result = textContent.match(pattern);

console.log("--------------flagek-------------");

// const pattern = /an/g;
// const result = textContent.match(pattern);

// const pattern = /dead/i;
// const result = textContent.match(pattern);

// const pattern = /an/m;
// const result = textContent.match(pattern);

console.log("--------------kezdő és végződő karakterek-------------");

// const pattern = /^D/;
// const result = textContent.match(pattern);

// const pattern = /5$/;
// const result = textContent.match(pattern);

// const pattern = /^Dead can dance$/;
// const result = "Dead can dance".match(pattern)

console.log("--------------intervallumok-------------");

// const pattern = /^[a-dA-D3-4]/
// const result = textContent.match(pattern)

console.log("--------------karakterek számossága-------------");

// const email = "3e4r5t@mail.hu"
// const pattern = /^[a-zA-Z0-9]{0,100}@mail.hu/

textContent = "Deasd! iufksdo jcfj sodjf"

//'+' egyszer vagy többször szerepel
// const pattern = /an+/
//'?' egyszer vagy nullaszor
// const pattern = /danc?/
// '*' nullaszor vagy többször
// const pattern = /can*/
// '.' bármilyen karakter
// const pattern = /..../

console.log("--------------metakarakterek-------------");

// textContent = "987"

// const pattern = /^\d{3}$/
// const pattern = /^[0-9]{3}$/

// textContent = "n!n"
// const pattern = /^\D{3}$/

// textContent = "n2n34w4rsft!%/ET!%/"
// const pattern = /^\w{5}/
// textContent = "!%/!%/ET!%/"
// const pattern = /^\W{5}/

console.log("--------------escaping character-------------");

// pattern = /^https?:\/\//
// textContent = "http://djnfkjn.sdijfs.com"



// console.log(textContent.match(pattern));


console.log("---------------------------");

// const idPattern = /^[0-9]{6}[A-Z]{2}$/
// const tajPattern = /^\d{3} \d{3} \d{3}$/
const tajPattern = /^(\d{3} ){2}\d{3}$/

console.log("345 345 345".match(tajPattern));

