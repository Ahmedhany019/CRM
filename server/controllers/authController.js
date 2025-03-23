import User  from "../models/User.Model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
/**--------------------------------
 * @desc register
 * @router /api/users/register
 * @method get
 * @access private (only admin)
---------------------------------*/
const registerUser = async (req,res) =>{
    const {email,password,username,image,role} = req.body;
    try {

        let exist = await User.findOne({email})
        if(exist){
            return res.status(400).json({message:"This email already exist"})
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long", success: false });
        }
        const salt =await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        
        const user = new User({
            email,
            password:hashedPassword,
            image,
            username,
            role,
        })
        await user.save()
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        return res.status(200).json({message:"Register Successfully ",token,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}

/**--------------------------------
 * @desc login
 * @router /api/users/login
 * @method get
 * @access private (only admin)
---------------------------------*/
const loginUser = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid email or password",success:false})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            return res.status(200).json({message:"Login Successfully",token,success:true})
        }else{
            return res.status(400).json({message:"Invalid email or password",success:false})
        }
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}

export {registerUser,loginUser}