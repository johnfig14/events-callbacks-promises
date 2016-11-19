//discriminate between sychronous and async events and understand the complexity of async

const work = () => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
        console.log(number + 1);
    });

    ['Tyler', 'Bob', 'Donald', 'Hillary'].forEach(person => {
        console.log(person);
    });
};

work();


//use callbacks to run after a function is complete

const workBetter = (callback) => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
        console.log(number + 1);
    });

    workBetterAgain((err) => {
        workBetterAgain((err) => {
            return callblack(null, 'Done');
        });
    })
};



workBetter((err, message) => {
    if(err) throw err;
    console.log(message); // Shoud be 'Done'
});



//use promises in place of callbacks

const iPromiseIWorkBetter = () => {
    return new Promise((resolve, reject) => {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
            console.log(number + 1);
        });

        return resolve();
    });
};


const log = (message) => {
    return new promise ((resolve) => {
        return resolve(message);
    });
};


iPromiseIWorkBetter()
    .then(() => {
        return log("I'm done")
    })
        .then(mesage => console.log(message))
        .catch(err => console.error(err));



//async await patter
const workAsync = async () => {
    await iPromiseIWorkBetter();
    return await log();
};

try {
    workAsync()
} catch (err) {
    console.error(err);
}

//Comment