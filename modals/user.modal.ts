import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    metadata: {
        type: Object, // Store metadata as a JSON object
        default: {},  // Optional: Default empty object
    },
});

const User = models?.User || model("User", UserSchema);

export default User;