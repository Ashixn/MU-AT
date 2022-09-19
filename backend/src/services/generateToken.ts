import JWT from "jsonwebtoken";
import { Types } from "mongoose";

interface dataI {
  id: Types.ObjectId;
}

export const generateToken = (data: dataI) => {
  return JWT.sign(data, `${process.env.JWT_TOKEN}`, {
    expiresIn: "30d",
  });
};
