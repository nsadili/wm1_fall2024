let name = "Nuraddin";
let person1 = {
    _firstname: "Nuraddin",
    _lastname: "Sadili",
    get lastname(){ return this._lastname; },
    set lastname(lastname){ this._lastname =  lastname.toUpperCase();},
    _gpa: 3,
    fullname: function (){
        return this.firstname + " " + this.lastname.toUpperCase();
    },
    _contacts: [
        {
            phone: "123456",
            email: "abc@xyz.com"
        },
        {
            phone: "765432",
            email: "xyz@abc.com"
        }
    ]
};

let person2 = {
    name: "Shamil",
    surname: "Abbasov",
    gpa: 4
}

for(let x of Object.values(person1)){
    console.log(x);
}