class User {
    constructor (username){
        this.username = username
    }
    logMe(){    //this is a method
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{     //Here Teacher(which is a new class) have all the functionalities of User bcoz of extends (just like __prototype__)
    constructor(username,email,password){
        super(username)     //alternate of -> User.call(this, username), so we get property of username from User class using super keyword
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);  //here we can use this.username bcoz of super(username)
    }
}

const chai = new Teacher('chai','chai@example.com','123')
chai.addCourse()
const masalaChai = new User('masalaChai')
// masalaChai.addCourse()  //it does not have access of addCourse bcoz we are using class User which does not contain that addCourse function
masalaChai.logMe()
chai.logMe()    //this chai which is an instance of class Teacher 'll have property(function) of User Class bcoz it's connected with User Class

console.log(chai === masalaChai);   //false -> bcoz they both are instances of different classes
console.log(chai === Teacher);   //false -> bcoz chai is an instance of Teacher class 
console.log(chai instanceof Teacher);   //true
console.log(chai instanceof User);   //true -> bcoz Teacher is connected with User class, so it has all the properties of User class
