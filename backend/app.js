const express = require('express');
const redis = require('@redis/client');

const app = express();
const port = 3000;

const client = redis.createClient({
    url: 'redis://redis:6379',
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

async function connectRedis() {
    try {
        await client.connect();
        console.log('Connected to Redis');
    } catch (err) {
        console.error('Redis connection error:', err);
    }
}

connectRedis();

app.get('/', async (req, res) => {
    try {
        await client.set('message', 'Hello from Redis!');

        const value = await client.get('message');

        res.send(`Redis message: ${value}`);
    } catch (err) {
        res.status(500).send('Error interacting with Redis');
        console.error('Error during Redis operation:', err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
