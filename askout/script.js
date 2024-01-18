let sarah ={
    name: 'sarah mohammed',
    age: 17,
    thingtosay: 'i love you',

}
;

let chars =["y", "o", "u", "s", "s", "e", "f"] ;
let x=[];
x.length = 7;
prompt("Please enter a string: ", x );

if(x.indexOf( 0 )=="y" && x.indexOf( 1 )=="o" &&  x.indexOf( 2 )=="u" && x.indexOf( 3 )=="s"&& x.indexOf( 4 )=="s" && x.indexOf( 5 )=="e"&& x.indexOf( 6 )=="f"){
    console.log(sarah);
}
else{
    console.log("Fuck you!");
}

