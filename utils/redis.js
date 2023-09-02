const redis = require('redis');


class RedisClient {
  constructor(host, port) {
    this.client = redis.createClient ({
      host: host || 'localhost',
    port: port || 6379,
    });

  this.client.on('error', (err) => {
    console.error('Redis Error:', err)
  });
  
}

  async isAlive() {
    return new Promise(( resolve) => {
      this.client.ping((err, reply) => {
         if (err) {
           console.error(false);
    } else {
    console.log(true);
  }
});
});
}

  async get (key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
      }
    });
  });
}

  async set (key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.setex(key, duration, value, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
      }
    });
  });
}

  async del (key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply === 1);
       }
    });
  });
}
}


const redisClient = new RedisClient();

module.exports=  redisClient;
