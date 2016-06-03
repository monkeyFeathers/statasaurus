import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000/api/v1';

const PlayerType = new GraphQLObjectType({
    name: 'Player',
    description: '...',

    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
    })
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
        player: {
            type: PlayerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve: (root, args) => fetch(`${BASE_URL}/Player/${args.id}`)
                .then(response => response.json())
        }
    })
});

export default new GraphQLSchema({
    query: QueryType,
});
