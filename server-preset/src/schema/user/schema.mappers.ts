import { User } from "../types.generated";

// resolver type から不要なフィールド（個別の field resolver から返されるフィールド）を外す
export type UserMapper = Omit<User, "gallery">;
