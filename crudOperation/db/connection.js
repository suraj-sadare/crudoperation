const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
   console.log("connection is established");
}).catch((e) => {
   console.log("no connection ");
});