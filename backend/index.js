import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://jcho114:p9HjoUIOJRd7sD4F@joseph.rf512wj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

async function retrieveHomeValue(Year, Zipcode) {
  try {
    const db = client.db("test");
    const houseValue = await db.getCollection("homevalues").findOne({
      Year: Year,
      Zipcode: Zipcode,
    });
    console.log(houseValue);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return houseValue;
  }
}
retrieveHomeValue(2011, 89061).catch(console.dir);
