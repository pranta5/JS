// immediately invoked function expression (IIFE)

(function one(){        // named IIFE
    console.log(`DB CONNECTED`);
})();                       // ; is use to end 
                                            //procted from gobal polutation we use IIFE
(()=>{
    console.log(`DB TWO CONNECTED`);
})();

((name)=>{
    console.log(`HEllO - ${name}`);
})("pranta");