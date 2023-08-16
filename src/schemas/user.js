import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstNames: {
      type: String,
      required : true,
      
    },
    lastNames: {
      type:String,
      required: true,
    },
    email: {
      type:String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.compareRole = async (role, receiveRol) => {
  return await (role == receiveRol);
};

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivePassword) => {
  return await bcrypt.compare(password, receivePassword);
};

export default model("User", userSchema);

