
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //LOGIC
        let isSuccess = true;
        let data = { name: "nuraddin", school: 'site' }
        let errorType = 1;
        if (isSuccess) resolve(data); //after a successfull completion
        else reject(
            errorType == 1 ? "Network down" : "Uncommon error"
        );
    }, 2000);
});


// promise1.then((data) => {
//     console.log('success');
//     console.log(data)
// })
//     .catch((err) => console.log(err))
//     .finally();


async function exec() {
    try {
        let res = await promise1;
        console.log(res);
    } catch (err) {
        console.log(err)
    } finally {

    }
}

exec();