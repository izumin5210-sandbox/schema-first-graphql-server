/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Image } from "./gallery/resolvers/Image";
import { login as Mutation_login } from "./auth/resolvers/Mutation/login";
import { signup as Mutation_signup } from "./auth/resolvers/Mutation/signup";
import { uploadPicture as Mutation_uploadPicture } from "./gallery/resolvers/Mutation/uploadPicture";
import { Profile } from "./profile/resolvers/Profile";
import { me as Query_me } from "./auth/resolvers/Query/me";
import { user as Query_user } from "./user/resolvers/Query/user";
import { User as user_User } from "./user/resolvers/User";
import { User as gallery_User } from "./gallery/resolvers/User";
import { User as profile_User } from "./profile/resolvers/User";
import { User as auth_User } from "./auth/resolvers/User";
export const resolvers: Resolvers = {
  Query: { me: Query_me, user: Query_user },
  Mutation: {
    login: Mutation_login,
    signup: Mutation_signup,
    uploadPicture: Mutation_uploadPicture,
  },

  Image: Image,
  Profile: Profile,
  User: { ...user_User, ...gallery_User, ...profile_User, ...auth_User },
};
