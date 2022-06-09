require('dotenv').config()

const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});





// example of an exception
// if there are errors that occur u dont have to deal with them right at the sight of the function
// that your calling. we get to choose where to handle the error.
// function someProcedure(a) {
//     if (a == 1) {
//         return 5;
//     } else if (a == 2) {
//         return 10
//     }

//     throw new Error("a should be 1 or 2")
// }

// try {
//     console.log('my result is:', someProcedure(3))
// } catch (error) {
//     console.log('i got an exception:', error.message)
// }


// ASYNC FUNCTION EXAMPLE
// function after1SecondPromise() {
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     })
// }



// APPLIES TO THIS UNIT
// HOW TO CALL PROMISES
// after1SecondPromise()
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked'))



// ASYNC AWAIT
// same as promises, just a more elegant way
// async function example() {
//     await after1SecondPromise();
//     console.log('it worked')
//     await after1SecondPromise();
//     console.log('it worked')
//     await after1SecondPromise();
//     console.log('it worked')
//     await after1SecondPromise();
//     console.log('it worked')
// }

// example()