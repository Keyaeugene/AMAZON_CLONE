// imports from packages
const express =  require('express');

//imports from other files
const authRouter = require("./routes/auth");

//middleware
app.use(authRouter);

//init
const PORT = 3000;
const app = express();


app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT} `);
});

