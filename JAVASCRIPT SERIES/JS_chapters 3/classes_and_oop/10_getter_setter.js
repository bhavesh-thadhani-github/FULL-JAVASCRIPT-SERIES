//GETTERS & SETTERS (interesting)
// 1]Using CLASS [90-95% usage]
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    //if we have to define getter then it's necessary that we define setters also(compulsary)
    //the value of password is now setting from here
    //the name of getter and setter have to same as of that property
    get password(){    //whenever we make properteis then bydefault getters & setters of that are made as a method
        // return this._password.toUpperCase()  //here we use return to send the value
        return `${this._password}hitesh`
    }     
    set password(value){    //Here constructor is also setting the value and setter also, so there is like a race between them & we get error: Maximum call stack size exceeded
        this._password = value    //now we have created a new variable & that variable is now setting the value of password
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value     //we never use return in setters 
    }
}
//Above, constructor is now setting the value but password value is getting overwrite
const hitesh = new User('h@hitesh.ai', 'abc')   //we cannot give the value without defining setter
console.log(hitesh.password);   //class ke bahar se koi value get karna chahte ho then we use getter & if we want to set a property inside the class then we use setter 
console.log(hitesh.email);