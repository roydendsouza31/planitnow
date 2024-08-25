import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    const clients = await db.collection('clients').find({}).toArray();
    console.log(clients);
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch clients' });
  }
}
