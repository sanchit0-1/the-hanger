import { MongoClient, ServerApiVersion } from "mongodb";
const uri = ""
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Ping the admin database just to check connection
    await client.db("hello").command({ ping: 1 });
    console.log("Ping successful!");

    // Get your actual working database
    const db = client.db("myDatabaseName"); 
    const collection = db.collection("myCollection");

    // const result = await collection.insertOne({
    //   name: "theGreatSanchit",
    //   age: 21,
    //   city: "Africa",
    // });

    console.log("Insert result:", result);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // optional to close
    // await client.close();
  }
}

run().catch(console.dir);
