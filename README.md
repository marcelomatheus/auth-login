### In development
# Login-Auth Project Documentation
## Overview
This project is a Login and Authentication System developed using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, implemented in TypeScript. It uses JWT (JSON Web Token) for stateless authentication and Mongoose as the ODM (Object Data Modeling) tool to interact with MongoDB.

## Features
User registration and login.
Password hashing and validation using bcrypt.
Stateless authentication using JWT.
Protected routes requiring authentication.
Secure storage of passwords in MongoDB using hashing.
Token expiration for improved security.
User data validation with Mongoose schemas.

## Technologies Used
MongoDB: NoSQL database for storing user data.
Express.js: Backend web framework.
React.js: Frontend library for building the user interface.
Node.js: Backend runtime environment.
TypeScript: Strongly typed JavaScript for improving code quality.
Mongoose: ODM for MongoDB.
JWT: Authentication via JSON Web Tokens.
bcrypt: Library for password hashing and salting.

<pre>
  /login-auth
├── client/               # React frontend
├── server/               # Express and Node.js backend
│   ├── controllers/      # Request controllers for user handling
│   ├── database/         # Database connection
│   ├── models/           # Mongoose schemas and models
│   ├── routes/           # API routes (auth and user routes)
│   └── index.ts            # Entry point of the server
├── .env                  # Environment variables (e.g., JWT_SECRET, DB_URI)
└── README.md             # Project documentation

</pre>
