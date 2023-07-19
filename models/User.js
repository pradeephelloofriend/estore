import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:"Please enter your name",
        
    },
    email:{
        type:String,
        required:"Please enter your email",
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:"please enter your password"
    },
    role:{
        type:String,
        default:"user"
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg"
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    defaultPaymentMethod:{
        type:String,
        default:""
    },
    address:[
        {
            firstName:{
                type:String
            },
            lastName:{
                type:String
            },
            phoneNumber:{
                type:String
            },
            address1:{
                type:String
            },
            address2:{
                type:String
            },
            city:{
                type:String
            },
            ZipCode:{
                type:String
            },
            state:{
                type:String
            },
            country:{
                type:String
            },
            active:{
                type:Boolean,
                default:false
            },
        }
    ]
},{
    timestamps:true
})

const User=mongoose.models.User || mongoose.model("User",userSchema)

export default User