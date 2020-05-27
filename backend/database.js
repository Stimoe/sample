const mongoose = require('mongoose');
const connection = "mongodb+srv://stimoe:<S1mps0ns3>@cluster0-65biu.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));




 