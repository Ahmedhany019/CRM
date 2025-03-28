import mongoose from "mongoose";

const connectDb = async()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if (conn) {
          console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
      } catch (error) {
        console.log(error);
      }
}

export default connectDb