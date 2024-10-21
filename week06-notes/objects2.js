let p1 = {
    name: "Ali",
    surname: "Aliyev",
    birthDay: new Date(2001, 1, 13),
    getAge: function (){
        return new Date().getFullYear() - this.birthDay.getFullYear();
    }
}

let p2 = new Object();
p2.name = "Mammad";
p2.surname = "Zaurlu";
p2.birthDay = new Date(2000, 2, 15)
p2.getAge = () => {
    console.log(this); //Arrow functions cannot refer to this object
    return new Date().getFullYear() - p2.birthDay.getFullYear();
}

console.log(p2);
