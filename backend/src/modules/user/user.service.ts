import { RegisterUserBodyType } from "./user.schema";
import { User, UserModel } from "./user.model";

export async function createUser(
  user: Omit<RegisterUserBodyType, "confirmPassword">
) {
  return UserModel.create(user);
}

export async function findUserByEmail(email: User["email"]) {
  return UserModel.findOne({ email });
}
