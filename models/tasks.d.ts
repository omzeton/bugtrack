import { ObjectId } from "mongodb";

export default interface Task {
    _id: ObjectId;
    name: string;
    category: string;
    description: string;
    status: number;
}
