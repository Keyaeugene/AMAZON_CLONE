// imports from packages
const express =  require('express');
const mongoose = require('mongoose');
//imports from other files
const authRouter = require("./routes/auth");

//middleware
app.use(authRouter);

//init
const PORT = 3000;
const app = express();
const DB ="mongodb+srv://rivaan:rivaan123@cluster0.sofuhm9.mongodb.net/?retryWrites=true&w=majority"

//connections
mongoose.connect(DB).then(() => { 
    console.log('Connection Successful');
}).catch((e) => { 
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT} `);
});

