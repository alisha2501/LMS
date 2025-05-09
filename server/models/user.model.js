import mongoose from'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['instructor', 'student'], //can choose anyone of these roles
        default: 'student'
    },
    enrolledCourses:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: false
        }
    ],
    photoUrl: {
        type: String,
        default:""
    }
}, { timestamps: true });

export const User =  mongoose.model('User', userSchema);