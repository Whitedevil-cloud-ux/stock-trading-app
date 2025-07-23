const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) =>{
    const token = req.cookies.token;
    if(!token){
        return res.json({ status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) =>{
        if (err) {
            return res.json({ staus: false });
        }else {
            const user = await User.findById(data.id);
            if (user) return res.json({status : true, user : user.username })
            else return res.json({ status: false });
        }
    })
}

module.exports.authenticateUser = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ error: "No token provided"});
    }
    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(decoded.id);

        if(!user){
            return res.status(401).json({ error: "Invalid token user" });
        }

        req.user = { id: user._id, username: user.username };
        next();
    }catch(err){
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};