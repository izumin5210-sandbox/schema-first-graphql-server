/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    Query: 'user';
    User: 'id' | 'fullName' | 'isAdmin';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type User = Pick<Types.User, DefinedFields['User']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    User?: UserResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      fullName?: gm.Middleware[];
      isAdmin?: gm.Middleware[];
    };
  };
}