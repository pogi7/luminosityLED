// Connects to MongoDB

const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config()
const USER = process.env.DBUSER;
const PSWD = process.env.DBPASS;
const HOST = process.env.DBHOST;

// Atlas connection string
const uri = `mongodb+srv://${USER}:${PSWD}@${HOST}/?retryWrites=true&w=majority&appName=LuminosityCluster-0`;

// Create a MongoClient 
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect to the server
    await client.connect();

    // Confirm connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB. Great success!");
  } 
  finally {
    await client.close();
  }
}

run().catch(console.dir);

export default client;