function Person(firstname, lastname, gpa, age){
    this._firstname = firstname;
    this._lastname = lastname;
    this._gpa = gpa;
    this._age = age;
    this.getGender = function(){return this._gender;}
}

Person.prototype._gender = "MALE";
Person.prototype.setGender = function(gender){this._gender = gender;}

let p1 = new Person("Nuraddin", "Sadili", 3, 31);
let p2 = new Person("Shamil", "Abbasov", 4, 20);

p1.setGender("FEMALE");

console.log(p1);
console.log(p2);