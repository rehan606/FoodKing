const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000


// Middle Ware 
app.use(cors())
app.use(cors({ origin: 'https://foodking-d2588.web.app' }));
// app.use(cors({
//   origin: ['http://localhost:5173', 'https://foodking-d2588.web.app'],
//   credentials: true
// }));
app.use(express.json())




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jwii9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    const foodsCollection = client.db('foodKing').collection('foods')
    const ordersCollection = client.db('foodKing').collection('orders')

    


    // post data in database
    app.post('/add-food', async(req, res) => {
      const foodData = req.body
      const result = await foodsCollection.insertOne(foodData)
      res.send(result)
    })




     // Get specific user posted data 
    app.get('/foods/:email', async(req, res) => {
      const email = req.params.email
      const query = { 'buyer.email': email }
      const result = await foodsCollection.find(query).toArray()
      res.send(result)
    })

    // get single Food data by id from database to Update form
    app.get('/food/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await foodsCollection.findOne(query)
      res.send(result)

    })

    // Update data in database 
    app.put('/update-food/:id', async(req, res) => {
      const id = req.params.id
      const foodData = req.body
      const updated = {
        $set: foodData,
      }
      const query = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const result = await foodsCollection.updateOne(query, updated, options)
      res.send(result)
    })

    // Food Details 
    app.get('/details/:id', async(req, res) => {
      const id = req.params.id 
      const query = {_id: new ObjectId(id)}
      const result = await foodsCollection.findOne(query)
      res.send(result)
    })

    
    // order 
    app.post("/orders", async (req, res) => {
      // Save data in database order collection 
      const orderData = req.body 
      // const createdAt = new Date();
      const result = await ordersCollection.insertOne(orderData)

      // Incress purchase count
      const filter = {_id: new ObjectId(orderData.foodId)}
      const update = {
        $inc: {order: 1}
      }
      const orderCount = await foodsCollection.updateOne(filter ,update )
      res.send(result)
    });

    // Get specific user Order data 
    app.get('/my-order/:email', async(req, res) => {
      const email = req.params.email 
      const query = { email }
      const result = await ordersCollection.find(query).toArray()
      res.send(result)
    })

    // Delete Order Item 
    app.delete('/my-order/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await ordersCollection.deleteOne(query)
      res.send(result)
    })

    // Get all Foods data from database 
            // and
    // Data Display by filter, Search and Sort
    app.get('/all-foods', async(req, res) => {

      // filter and search
      const filter = req.query.filter
      const search = req.query.search 
      const sort = req.query.sort 
      let options = {}
      if(sort) options = {sort:{order: sort === 'asc' ? 1 : -1} }
      let query = {
        title: {
          $regex: search, 
          $options: 'i'
      }}
      if(filter) query.category = filter
      const cursor = foodsCollection.find(query, options)
      const result = await cursor.toArray()
      res.send(result)
    })


    // Top selling Food
    app.get('/top-foods', async(req, res) => {
      const cursor = foodsCollection.find().sort({ order: -1 });
      const result = await cursor.toArray()
      res.send(result)
    })


    





  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send(`Welcome to FoodKing Server `);
})

app.listen(port, () => {
    console.log(`Foodking server running by port ${port}`);
})