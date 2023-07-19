import mongoose from 'mongoose'
const connection ={};
mongoose.set('strictQuery', true);
async function connectDb(){
    if(connection.isConnected){
    console.log('allready connected to database')
    return;
    }
    if(mongoose.connection.length>0){
        connection.isConnected=mongoose.connections[0].readyState;
    
        if(connection.isConnected===1){
                console.log('use previus connection to  database')
                return;
        }
        await mongoose.disconnect();
    }
    const db= await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        })
    console.log('new connection')
    connection.isConnected=db.connections[0].readyState;
}
async function disconnectDb(){
    if(connection.isConnected){
        if(process.env.NODE_ENV==="production"){
            await mongoose.disconnect()
            connection.isConnected=false;
        }else{
            console.log("not Disconnecting")
        }
    }
}
const db= {connectDb,disconnectDb}
export default db