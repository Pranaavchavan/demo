function outer(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    };
}
let increment=outer();
increment();//1
increment();//2