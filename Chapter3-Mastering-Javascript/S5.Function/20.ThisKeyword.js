//Here this keyword is used to refer to the object that has been passed to a function.
function account(username, password) {
  this.username = username;
  this.password = password;
  this.captcha = 9998;
}

let myaccount = new account('gun@gmail.com', 'test1234');
console.log(myaccount);
console.log(typeof myaccount);
console.log(myaccount.captcha);

