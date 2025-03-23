function person(name,age){
    this.name=name;
    this.age=age;

}
person.prototype.greet=function(){
    return "Hello,"+this.name;
};
let user = new person ("Pranav",23);
console.log(user.greet());//hello pranav
