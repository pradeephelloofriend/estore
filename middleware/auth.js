import { getToken } from "next-auth/jwt";
//import { useSession } from "next-auth/react";

const AuthToken= async (req,res,next)=>{
    //const {data:session}=useSession();
    const token= await getToken({
        req:req,
        secret:process.env.JWT_SECRET,
        raw:true,
        secureCookie:process.env.NODE_ENV==="production",
    });
    console.log('jt-token',token)
    if (token) {
       //signed in
       //req.user=token.sub;
       next(); 
    }else{
       res.status(401).json({message:"Not signed in: "}) 
    }
    res.end();
};
export default AuthToken