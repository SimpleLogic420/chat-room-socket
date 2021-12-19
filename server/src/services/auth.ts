import jwt from "jsonwebtoken";
import config from "../config/config";
import Token from "../models/token";
import UserModel from "../models/user";
import { NewUser, User, TwoFactorOptions } from "../types/user";
import twofactor = require('node-2fa');

const login = async (email: string, password: string): Promise<Record<string, unknown>> => {
  const user: User | null = (await UserModel.findOne({ email }));

  if (!user) throw { status: 400, message: "No such email" };
  if (!(password === user.password))
    throw { status: 400, message: "Bad password" };

  const userId = user.id;

  const accessToken = jwt.sign({ email, userId }, config.jwt.secret, {
    expiresIn: config.jwt.accessTime,
  });

  const refreshToken = jwt.sign({ userId, email }, config.jwt.secret, {
    expiresIn: config.jwt.refreshTime,
  });

  await Token.findOneAndUpdate(
    { userId },
    { jwt: refreshToken, userId },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  return { accessToken, refreshToken };
};

const token = async (token: string): Promise<Record<string, unknown>> => {
  if (!token) throw { status: 400, message: "Must provide a token" };

  const { email, userId } = <Record<string, unknown>>jwt.verify(token, config.jwt.secret);

  const exists = await Token.findOne({ jwt: token });
  if (!exists) throw { status: 400, message: "Log in again" };

  const accessToken = jwt.sign({ email, userId }, config.jwt.secret, {
    expiresIn: config.jwt.accessTime,
  });

  return { accessToken, email, userId };
};

const signUp = async (firstName: string, lastName: string, email: string, password: string): Promise<boolean> => {
  const exists = await UserModel.find({ email });

  if (exists.length > 0) throw { status: 400, message: "email already exists" };

  const user: NewUser = await UserModel.create({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });

  return user ? true : false;
};

const logout = async (userId: string): Promise<boolean> => {
  const { deletedCount } = await Token.deleteOne({ userId });

  return deletedCount > 0;
};

const generateSecret = (options: TwoFactorOptions): { secret: string, uri: string, qr: string } => {
  if (options) {
    return twofactor.generateSecret({
      name: options.name,
      account: options.account,
    });
  } else {
    return twofactor.generateSecret();
  }
};

const generateToken = (secret: string): { token: string } | null => {
  return twofactor.generateToken(secret);
};

const verifyToken = (secret: string, token: string): { delta: number } | null => {
  return twofactor.verifyToken(secret, token);
};

// const check2FA = async (email: string): Promise<boolean> => {
//   const user = await UserModel.findOne({ email });
//   if (user && user['2FA']) return user['2FA'];
//   return false;
// };

const enable2FA = async (email: string): Promise<boolean> => {
  const user = await UserModel.findOneAndUpdate({ email }, { '2FA': true });
  return user ? true : false;
};

const disable2FA = async (email: string): Promise<boolean> => {
  const user = await UserModel.findOneAndUpdate({ email }, { '2FA': false });
  return user ? true : false;
};

const twoFactor = {
  generateSecret,
  generateToken,
  verifyToken,
  enable2FA,
  disable2FA
};

export default {
  login,
  token,
  signUp,
  logout,
  twoFactor,
};