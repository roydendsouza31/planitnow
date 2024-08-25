import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }

  const db = client.db('planitnow');
  cachedDb = db;
  return db;
}
