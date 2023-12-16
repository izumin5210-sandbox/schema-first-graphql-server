/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace ProfileModule {
  interface DefinedFields {
    Profile: "age" | "name";
    User: "profile";
  }

  export type Profile = Pick<Types.Profile, DefinedFields["Profile"]>;
  export type User = Types.User;

  export type ProfileResolvers = Pick<
    Types.ProfileResolvers,
    DefinedFields["Profile"] | "__isTypeOf"
  >;
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields["User"]>;

  export interface Resolvers {
    Profile?: ProfileResolvers;
    User?: UserResolvers;
  }

  export interface MiddlewareMap {
    "*"?: {
      "*"?: gm.Middleware[];
    };
    Profile?: {
      "*"?: gm.Middleware[];
      age?: gm.Middleware[];
      name?: gm.Middleware[];
    };
    User?: {
      "*"?: gm.Middleware[];
      profile?: gm.Middleware[];
    };
  }
}
