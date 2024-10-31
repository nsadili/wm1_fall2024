

let promise1 = new Promise(
    function (resolveCallback, rejectCallback) {

        //ENTIRE LOGIC GOES
        let isSuccess = false;
        let errorType = 3;
        setTimeout(() => {
            if (isSuccess) resolveCallback(
                { name: "Nuraddin", school: 'SITE' }
            );
            else {
                if (errorType == 1)
                    rejectCallback("Network is down!");
                else
                    rejectCallback("Some uncommon error occured!");
            }
        }, 2000);
    }
);

// promise1.then(
//     (data) => {
//         console.log("Success is achieved!");
//         console.log(`Here is the data received: ${data.name}`);

//     }
// ).catch(
//     (errMsg) => {
//         console.log(errMsg);
//     }
// );

async function initialization() {
    try {
        let res = await promise1;
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

initialization()
