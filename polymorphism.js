class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        return `${this.name} makes a sound`;
    }
}
const a1=new Animal("Dog");
console.log(a1.makeSound());
class Dog extends  Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    makeSound(){
        return `${this.name} barks`;
    }
}  