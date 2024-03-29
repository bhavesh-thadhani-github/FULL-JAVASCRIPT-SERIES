function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log('called');  //this 'll get pass but variabled do not get pass
}

function createUser(username, email, password){
    // this.username = username     //we are outsourcing this task to the below syntax
    // SetUserName(username)   //it should have the access of username     //actually, this username is not getting called bcoz technically just the reference of that function is given
    //  we get methods in js through which we explicitly go and call to that method -> one of it is CALL
    SetUserName.call(this, username)  //so we have to hold its reference. To hold the reference(of that function) we use .call  //Here we are giving this (the 'this' keyword here is given by this current function only bcoz the 'this' of that above function got deleted)
    // whenever we use 'call' we can pass 'this' as the first parameter

    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', '123')
console.log(chai);
// console.log(typeof chai);    //output-> Object