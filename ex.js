class employee{
    constructor(name, role){
        this.name=name;
        this.role=role;
    }
    
    getDetails(){
        return `${this.name} work as a ${this.role}`;
    }

}
const emp1 = new employee("John","Developer");
console.log(emp1.getDetails());