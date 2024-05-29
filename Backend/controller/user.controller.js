import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs"
export const signup = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).json({message:"User all ready exists"});
    }
    const hashPassword =await bcryptjs.hash(password,10);
    const createUser = new User(
        {
        name:name,
        email:email,
        password:hashPassword
        } );
        await createUser.save();
        res.status(200).json({message:"User created successfully", user:{
            _id:createUser._id,
            name:createUser.name,
            email:createUser.email,
        }});
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}

export const login =async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const ismatch = await bcryptjs.compare(password,user.password);
        if(!user||!ismatch){
            return res.status(400).json({message:"Invalid username or password"})
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        }

    } catch (error) {
        console.log("Error"+error.message);
        res.status(500).json({message:"Internal server error"});
    }
}