import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength:8,
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1634381842/Avatar.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
