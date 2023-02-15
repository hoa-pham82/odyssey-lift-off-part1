const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "query to get tracks array for the homepage"
    tracksForHome: [Track!]!
  }
  "A track is a gorup of modules show about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
