import { MongoClient } from "mongodb";

let _client: MongoClient;

const connectToMongoDB = (cb: (_: MongoClient) => void) => {
    MongoClient.connect(process.env.MONGODB_URI as string, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(client => {
            console.log("MongoDB Connected!");
            _client = client;
            cb(client);
        })
        .catch(err => {
            console.log(err);
        });
};

const getMongoClient = () => {
    if (_client) {
        return _client;
    }
    throw "No client found!";
};

export { connectToMongoDB, getMongoClient };
