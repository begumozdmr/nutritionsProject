import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql

  type Users {
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String
  }

  type Query {
    users: [Users]
  }

  input CreateUsers{
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
  }

  type Login{
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
  }

  type Mutation{
    createUsers(input:CreateUsers!):Users,
    login(email:String!,password:String!):Login,
  }
`;
let users = [
    {
        id: 1,
        nameSurname: "Begüm Özdemir",
        email: "begum@gmail.com",
        password: "begumozdemir",
        token: "hmvVDyNYFTWSUPPT6TdiVkDTehglsL6H",
        usersDate: "8.11.2022"
    },
    {
        id: 2,
        nameSurname: "Ogün Özdemir",
        email: "ogun@gmail.com",
        password: "ogunozdemir",
        status: "member",
        token: "WiTMMLHl9mTM31YGVz022TqIMro2XhEl",
        usersDate: "8.11.2022"
    },
];
const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        createUsers: (parent, { input: { id, nameSurname, email, password, token, usersDate } }) => {
            let newUsers = {
                id,
                nameSurname,
                email,
                password,
                token,
                usersDate
            };
            users = [...users, newUsers];
            return newUsers;
        },
        login: (parent, { email, password }) => {
            return users.find((index) => index.email === email && index.password === password);
        },
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
