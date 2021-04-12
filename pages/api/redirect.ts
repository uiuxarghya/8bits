// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ObjectID } from 'mongodb';
import { VercelRequest, VercelResponse } from '@vercel/node';

let cachedDb;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });

    cachedDb = client;
    return await client.connect();
}

export default async (req: VercelRequest, res: VercelResponse) => {
    const db = await connectToDatabase();

    const entry = await db.db('links_db').collection('links_collection').findOne({ _id: new ObjectID(req.query.id as string) });

    if (entry !== null) {
        return res.redirect(301, entry.link);
    }

    return res.redirect(301, '/');
}