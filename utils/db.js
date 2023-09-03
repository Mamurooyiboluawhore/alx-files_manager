const MongoDB = require('mongodb');

class DBClient {
  constructor(DB_HOST, DB_PORT) {
    this.client = new MongoDBClient({
      DB_HOST: DE_HOST || localhost,
      DB_PORT: DE_PORT || 27017,
      DB_DATABASE: process.env.DB_DATABASE || fileManager,
    });
    this.db = null;
  }

  async isAlive() {
    try {
      await this.client.connect();
      await this.client.db(DB_DATABASE).command({ ping: 1 });
      return true;
    } catch (error) {
      return (false);
    } finally {
      this.client.close();
    }
  }

  async nbUsers() {
    if (!this.db) {
      throw new Error('Database connection not established.');
    }
    const userCollection = this.db.collection('files');
    const count = await userCollection.countDocuments();
    return count;
  }

  async nbFiles() {
    if (!this.db) {
      throw new Error('Database connection not established.');
    }
    const filesCollection = this.db.collection('files');
    const count = await filesCollection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
