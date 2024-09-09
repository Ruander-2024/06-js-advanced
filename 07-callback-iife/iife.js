//Immediately-invoked Function Expressions
function printer() {
    console.log('Hello');
};

printer();
///////////////////////////////////////////////
(function() {
    console.log('Mizu?');
})();

///////////////////////////////////////////////
(function(name) {
    console.log(name);
})('Anna');