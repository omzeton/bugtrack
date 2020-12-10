import { MongoClient } from "mongodb";

export default new MongoClient(process.env.MONGODB_URI as string, { useUnifiedTopology: true, useNewUrlParser: true });
