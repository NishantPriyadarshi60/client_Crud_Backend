const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const clientController = require('./controllers/clientControllers.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/clentStore', { useNewUrlParser: true })
  .then(() => {
    app.listen(3001, () => {
        console.log(`server started `)
    })
  })
  .catch((err) => {
    console.log(err)
  })


app.post('/clients', async (req, res) => {
    try {
       const client=  await clientController.create(req.body);
        res.json(client);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
        
    }
});

app.get('/clients',async(req,res) => {
    try{
        const clients   = await clientController.getAll();
        res.json(clients);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

app.delete('/clients/:id', async (req, res) => {
    try {
        await clientController.remove(req.params.id);
        res.json({ message: 'Client removed' });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }   
});


app.put('/clients/:id', async(req,res) => {
    try{
        const client = await clientController.update(req.params.id, req.body);
        res.json(client);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

