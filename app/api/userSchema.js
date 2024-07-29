 "use server"
import mongoose from "mongoose";

async function main(){
    await mongoose.connect(process.env.mongodb)
    console.log("data base connected")
}


main().catch(err=>console.log(err))

const userSchema=mongoose.Schema({
    username:{type:String}
})

const userModel=mongoose.model("user_tbl2",userSchema)
export default userModel;
