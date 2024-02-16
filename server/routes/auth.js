const express =  require('express');

const authRouter = express.Router ();

authRouter.post( '/api/signup', (req, res) => { 
    //get data from the client
    //post the data in the database
    //return the data to the user
})

module.exports = authRouter;