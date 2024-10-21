let name = prompt("Enter name:")

let time = new Date().getHours();

if(time> 6 && time < 12)
    console.log(`Good morning, ${name}`);
else if(time < 16)
    console.log(`Good afternoon, ${name}`);