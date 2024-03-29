// 3] Using OBJECT [very rarely used- bcoz it's weird]
// we use getters and setters bcoz we don't want that anyone directly access them
// getters & setters are special method that i am putting on up the property
// Array.length also uses getters & setters behind the scene

const User = {
    _email: 'h@hc.com', //underscore_ say that it is defining a private property or it 'll not come in the use of private user
    _password: 'abc',
// here we say that get means take/get this from the memory(here this._email) & turn it into uppercase
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){   //email is not a method, it's just a property, so we access ._email
        this._email = value     //so now we have access the property(here this._email) so it provides a value & it gets store in (this._email variable)
    }
}

// const tea = new User()   
// new is a constructor function while Object.create is a factory function

const tea = Object.create(User)     //here we are declaring that to create an Object of User for tea
//User ke base pe ek object create karo aur usko tea ke andar refer kardo
console.log(tea.email);

