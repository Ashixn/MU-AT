import { model, Schema } from "mongoose";
import { userModelI } from "../types/user.type";

const userSchema = new Schema<userModelI>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model("User", userSchema);
