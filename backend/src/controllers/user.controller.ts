import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../services/generateToken";

export const login = async (req:Request,res:Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({username})
    if(user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({
        id: user._id,
        username: user.username,
        token: generateToken({ id: user._id }),
      })
    } else {
      return res.status(400).json({ message: "Login failed." });
    }
  } catch (error) {
    console.log(error);
  }
};
