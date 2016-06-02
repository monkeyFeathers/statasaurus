var GraphQLSchema = require('graphql').GraphQLSchema;

module.exports = new GraphQLSchema({
    query: QueryType,
})
