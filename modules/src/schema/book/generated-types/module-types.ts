/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace BookModule {
  interface DefinedFields {
    Query: "book";
    Mutation: "markBookAsRead";
    Book: "id" | "isbn";
  }

  export type Query = Pick<Types.Query, DefinedFields["Query"]>;
  export type Book = Pick<Types.Book, DefinedFields["Book"]>;
  export type Mutation = Pick<Types.Mutation, DefinedFields["Mutation"]>;

  export type QueryResolvers = Pick<
    Types.QueryResolvers,
    DefinedFields["Query"]
  >;
  export type MutationResolvers = Pick<
    Types.MutationResolvers,
    DefinedFields["Mutation"]
  >;
  export type BookResolvers = Pick<
    Types.BookResolvers,
    DefinedFields["Book"] | "__isTypeOf"
  >;

  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Book?: BookResolvers;
  }

  export interface MiddlewareMap {
    "*"?: {
      "*"?: gm.Middleware[];
    };
    Query?: {
      "*"?: gm.Middleware[];
      book?: gm.Middleware[];
    };
    Mutation?: {
      "*"?: gm.Middleware[];
      markBookAsRead?: gm.Middleware[];
    };
    Book?: {
      "*"?: gm.Middleware[];
      id?: gm.Middleware[];
      isbn?: gm.Middleware[];
    };
  }
}
