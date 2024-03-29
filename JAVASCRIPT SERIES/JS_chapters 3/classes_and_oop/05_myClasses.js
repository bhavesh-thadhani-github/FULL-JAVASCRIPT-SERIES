//ES6

/*class UserFirst {
    constructor(username, email, password){     //jaise hi class se ek object initialize hoga(means whenever we use 'new' keyword in use then constructor gets called automatically)then we use constructor 
        this.username = username    //this keyword - to define current context
        this.email = email
        this.password = password
    }     

    encryptPassword(){  //this is a function/method. It's not necessary to write constructor everytime
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new UserFirst('chai','chai@gmail.com','123')

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
console.log(typeof UserFirst);*/


// behind the scene(Creating the same as above but using Functions)
function UserSecond(username, email, password){     //this UserSecond(function) also behaves like object
    this.username = username
    this.email = email
    this.password = password
}

UserSecond.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserSecond.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new UserSecond('tea', 'tea@gmail.com', '123')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

console.log(typeof UserSecond);
