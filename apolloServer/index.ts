import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

  type UsersDetails {
    id: Int!,
    day: String,
    weight: Int,
    height: Int,
    result: String
  }

  type Users {
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
    usersDetails:[UsersDetails]
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

  input CreateBodyIndex{
    token:String,
    id:Int!,
    day:String,
    weight:Int,
    height: Int,
    result: String
  }

  type Login{
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
    usersDetails:[UsersDetails]
  }

  type Token{
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
    usersDetails:[UsersDetails]
  }

  type Mutation{
    createUsers(input:CreateUsers!):Users,
    login(email:String!,password:String!):Login,
    token(token:String):Token,
    bodyIndex(input:CreateBodyIndex!):[UsersDetails],
  }
`;

let users = [
  {
    id: 1,
    nameSurname: "Begüm Özdemir",
    email: "begum@gmail.com",
    password: "begumozdemir",
    token: "hmvVDyNYFTWSUPPT6TdiVkDTehglsL6H",
    usersDate: "8.11.2022",
    usersDetails: [
      {
        id: 1,
        day: "25.11.2023",
        weight: 65,
        height: 168,
        result: "23.03"
      },
      {
        id: 2,
        day: "28.11.2023",
        weight: 63,
        height: 168,
        result: "22.32"
      },
      {
        id: 3,
        day: "30.11.2023",
        weight: 60,
        height: 168,
        result: "21.26"
      },
      {
        id: 4,
        day: "26.11.2023",
        weight: 60,
        height: 168,
        result: "21.26"
      },
      {
        id: 5,
        day: "26.11.2023",
        weight: 60,
        height: 168,
        result: "21.26"
      },
      {
        id: 6,
        day: "26.11.2023",
        weight: 60,
        height: 168,
        result: "21.26"
      },
      {
        id: 7,
        day: "26.11.2023",
        weight: 60,
        height: 168,
        result: "21.26"
      },
      {
        id: 8,
        day: "26.11.2023",
        weight: 60,
        height: 168,
        result: "21.26"
      }
    ]
  },
  {
    id: 2,
    nameSurname: "Ogün Özdemir",
    email: "ogun@gmail.com",
    password: "ogunozdemir",
    status: "member",
    token: "WiTMMLHl9mTM31YGVz022TqIMro2XhEl",
    usersDate: "8.11.2022",
    usersDetails: [
      {
        id: 1,
        day: "25.11.2023",
        weight: 65,
        height: 181,
        result: "19.84"
      },
      {
        id: 2,
        day: "28.11.2023",
        weight: 68,
        height: 181,
        result: "20.76"
      },
    ]
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    createUsers: (parent, { input: { id, nameSurname, email, password, token, usersDate, usersDetails } }) => {

      if (usersDetails === null || usersDetails === undefined) {
        usersDetails = [];
      }

      let newUsers = {
        id,
        nameSurname,
        email,
        password,
        token,
        usersDate,
        usersDetails
      }
      users = [...users, newUsers]
      return newUsers;
    },
    login: (parent, { email, password }) => {
      return users.find((index) => index.email === email && index.password === password);
    },
    token: (parent, { token }) => {
      return users.find((index) => index.token === token);
    },
    bodyIndex: (parent, { input: { token, id, day, weight, height, result } }) => {
      const user = users.find((index) => index.token === token);

      let newBodyIndex = {
        id,
        day,
        weight,
        height,
        result
      }
      user.usersDetails.push(newBodyIndex);
      return user.usersDetails;
    }
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