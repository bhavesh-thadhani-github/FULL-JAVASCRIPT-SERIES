//This is an old way to define getters & setters
// 2]Using FUNCTION [Older way- not very used today]

function User(email, password){     //function behaves like light. It's an object also & function also(wave,particle)
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {      //here 'this' refers to golobal object(context)
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })    
    Object.defineProperty(this, 'password', {      //here 'this' refers to golobal object(context)
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    }) 
}

const chai = new User('chai@chai.com', 'chai')
console.log(chai.email);