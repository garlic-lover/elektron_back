import { gql } from "apollo-server-express";

import userSchema from "./user";
import trickSchema from "./trick";

const linkSchema = gql`
  scalar Date
  scalar JSON
  scalar JSONObject

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, trickSchema];
