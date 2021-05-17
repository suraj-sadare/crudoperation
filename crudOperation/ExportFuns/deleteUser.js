const userSignup = require("../models/signup");
exports.deleteUser= async(req,res,next)=>{
try {
    console.log(req.params.id);
    const user = await userSignup.findByIdAndRemove(req.params.id);
    res.send(user);
    console.log(user);
} catch (err) {
    res.send('error');
}
}