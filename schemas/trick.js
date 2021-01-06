import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    tricks(machine: String, theme: String, level: String): [Trick]
    trick(trickId: ID, trickName: String): Trick
  }
  extend type Mutation {
    trickCreate(trick: TrickInput): Boolean
  }
  type Trick {
    name: String
    machine: String
    level: String
    theme: String
    description: String
    steps: [Step]
    youtubeLinks: [String]
  }
  input TrickInput {
    name: String
    machine: String
    level: String
    theme: String
    description: String
    steps: [StepInput]
    youtubeLinks: [String]
  }
  type Step {
    instruction: String
    buttons: [Int]
  }
  input StepInput {
    instruction: String
    buttons: [Int]
  }
`;
