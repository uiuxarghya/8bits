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

    // Note: We don't await the tracking, we just let it run in the background
    /* not await */ db.db('links_db').collection('links_redirects_collection').insertOne({
        link: req.query.id,
        date: new Date(),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        userAgent: req.headers['user-agent'],
        referer: req.headers['referer'],
    });


    if (entry !== null) {
        return res.redirect(301, entry.link);
    }

    return res.redirect(301, '/');
}