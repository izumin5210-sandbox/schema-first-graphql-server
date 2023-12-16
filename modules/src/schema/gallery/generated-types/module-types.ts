/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace GalleryModule {
  interface DefinedFields {
    Image: "id" | "url" | "user";
    Mutation: "uploadPicture";
    User: "gallery";
  }

  export type Image = Pick<Types.Image, DefinedFields["Image"]>;
  export type User = Types.User;
  export type Mutation = Pick<Types.Mutation, DefinedFields["Mutation"]>;

  export type ImageResolvers = Pick<
    Types.ImageResolvers,
    DefinedFields["Image"] | "__isTypeOf"
  >;
  export type MutationResolvers = Pick<
    Types.MutationResolvers,
    DefinedFields["Mutation"]
  >;
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields["User"]>;

  export interface Resolvers {
    Image?: ImageResolvers;
    Mutation?: MutationResolvers;
    User?: UserResolvers;
  }

  export interface MiddlewareMap {
    "*"?: {
      "*"?: gm.Middleware[];
    };
    Image?: {
      "*"?: gm.Middleware[];
      id?: gm.Middleware[];
      url?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    User?: {
      "*"?: gm.Middleware[];
      gallery?: gm.Middleware[];
    };
    Mutation?: {
      "*"?: gm.Middleware[];
      uploadPicture?: gm.Middleware[];
    };
  }
}
