
import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    roomArea:{
        type: Number,
        required: true
    },
    ofPeople:{
        type: Number,
        required: true
    },
    appointmentDate:{
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    progress:{
        type: String,
        required: true
    },
});

const Deal = mongoose.model('Deal', dealSchema);
export default Deal;