import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required:true
    },
    zip: {
        type: String,
        required:true
    },
    image: {
        type: String
    },
},{timestamps:true});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;

