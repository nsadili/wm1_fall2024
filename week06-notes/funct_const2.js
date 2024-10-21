let p1 = {
    name: "Ali",
    surname: "Aliyev",
    birthDay: new Date(2001, 1, 13),
    getAge: function (){
        return new Date().getFullYear() - this.birthDay.getFullYear();
    }
}

function Person(name, surname, dateOfBirth, email, phone, address = ""){
    this.name = name;
    this.surname = surname;
    this.birthDay = dateOfBirth;
    this.getAge = function (){return new Date().getFullYear() - this.birthDay.getFullYear();}
    this.contacts = [
        {
            email: email,
            phone: phone,
            address: address
        }
    ];
}

let p2 = new Person("Nuraddin", "Sadili", new Date(1993,5), "abc@xyz.com", 123456789);

p2.contacts.push({
    email: "aaaa@aaa.aaa",
    phone: 333555777,
})

let p3 = new Person("Rashad", "Asadli", new Date(2005, 2), "xyz@abc.com", 987765432);
