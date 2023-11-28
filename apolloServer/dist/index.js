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

  type MeetingTime{
    id:Int!,
    nutritionName:String
    day:String,
    hour:String,
  }

  type Users {
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
    usersDetails:[UsersDetails],
    meetingTime:[MeetingTime],
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

  input InputLogin{
    email:String,
    password:String
  }

  type Login{
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
    usersDetails:[UsersDetails],
    meetingTime:[MeetingTime],
  }

  type Token{
    id:Int!,
    nameSurname:String,
    email:String,
    password:String,
    token:String,
    usersDate:String,
    usersDetails:[UsersDetails],
    meetingTime:[MeetingTime],
  }

  type Mutation{
    createUsers(input:CreateUsers!):Users,
    login(input:InputLogin!):Login,
    token(token:String):Token,
    bodyIndex(input:CreateBodyIndex!):[UsersDetails],
    addAppointment(id:Int,token:String,nutritionName:String, day:String,hour:String):[MeetingTime]
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
                day: "25.11.2023 10:45",
                weight: 65,
                height: 168,
                result: "23.03"
            },
            {
                id: 2,
                day: "28.11.2023 21:36",
                weight: 63,
                height: 168,
                result: "22.32"
            },
            {
                id: 3,
                day: "30.11.2023 01:56",
                weight: 60,
                height: 168,
                result: "21.26"
            },
            {
                id: 4,
                day: "26.11.2023 12:00",
                weight: 60,
                height: 168,
                result: "21.26"
            },
            {
                id: 5,
                day: "26.11.2023 17:30",
                weight: 60,
                height: 168,
                result: "21.26"
            },
            {
                id: 6,
                day: "26.11.2023 18:45",
                weight: 60,
                height: 168,
                result: "21.26"
            },
            {
                id: 7,
                day: "26.11.2023 11:00",
                weight: 60,
                height: 168,
                result: "21.26"
            },
            {
                id: 8,
                day: "26.11.2023 13:38",
                weight: 60,
                height: 168,
                result: "21.26"
            }
        ],
        meetingTime: [
            {
                id: 1,
                day: "25.11.2023",
                hour: "10:45",
                nutritionName: "Danial Frankie"
            },
            {
                id: 2,
                day: "26.11.2023",
                hour: "17.30",
                nutritionName: "Alena John"
            },
            {
                id: 3,
                day: "28.11.2023",
                hour: "12.00",
                nutritionName: "Michal Smart"
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
                day: "25.11.2023 00:54",
                weight: 65,
                height: 181,
                result: "19.84"
            },
            {
                id: 2,
                day: "28.11.2023 05:17",
                weight: 68,
                height: 181,
                result: "20.76"
            },
        ],
        meetingTime: [
            {
                id: 1,
                day: "25.11.2023",
                hour: "10:45",
                nutritionName: "Danial Frankie"
            },
            {
                id: 2,
                day: "26.11.2023",
                hour: "17.30",
                nutritionName: "Alena John"
            },
            {
                id: 3,
                day: "28.11.2023",
                hour: "12.00",
                nutritionName: "Michal Smart"
            }
        ]
    },
];
const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        createUsers: (parent, { input: { id, nameSurname, email, password, token, usersDate, usersDetails, meetingTime } }) => {
            if ((usersDetails === null || usersDetails === undefined) && (meetingTime === null || meetingTime === undefined)) {
                usersDetails = [];
                meetingTime = [];
            }
            ;
            if (!nameSurname || !email || !password) {
                throw new Error('Please fill in all fields.');
            }
            ;
            const existingUser = users.find((user) => user.email === email);
            if (existingUser) {
                throw new Error('Email is already in use.');
            }
            ;
            if (password.length < 8) {
                throw new Error('Your password cannot be less than 8 characters.');
            }
            let newUsers = {
                id,
                nameSurname,
                email,
                password,
                token,
                usersDate,
                usersDetails,
                meetingTime
            };
            users = [...users, newUsers];
            return newUsers;
        },
        login: (parent, { input: { email, password, } }) => {
            const user = users.find((index) => index.email === email && index.password === password);
            if (!email || !password) {
                throw new Error('Please fill in all fields.');
            }
            if (!user) {
                throw new Error('User not found.');
            }
            if (user.password !== password) {
                throw new Error('Your password is wrong.');
            }
            return user;
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
            };
            user.usersDetails.push(newBodyIndex);
            return user.usersDetails;
        },
        addAppointment: (parent, { id, token, nutritionName, day, hour }) => {
            const user = users.find((index) => index.token === token);
            let newAppointment = {
                id,
                token,
                nutritionName,
                day,
                hour
            };
            user.meetingTime.push(newAppointment);
            return user.meetingTime;
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
