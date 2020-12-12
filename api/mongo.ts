import { MongoClient, Db } from "mongodb";

let _db: Db;

const connectToMongoDB = (cb: (_: MongoClient) => void) => {
    MongoClient.connect(process.env.MONGODB_URI as string, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(client => {
            console.log("MongoDB Connected!");
            _db = client.db();
            cb(client);
        })
        .catch(err => {
            console.log(err);
        });
};

const getDB = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!";
};

export { connectToMongoDB, getDB };
