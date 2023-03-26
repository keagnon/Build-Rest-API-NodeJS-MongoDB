const express = require('express');
const router = express.Router();
const Block=require("../models/block");
/* express.Router() permet de créer des sous-routers dans une application Express pour organiser les routes de manière modulaire. 
Les sous-routers peuvent être définis pour une partie spécifique de l'application, puis montés sur des routes spécifiques à l'aide de la méthode app.use(). 
Cela permet de mieux structurer le code de l'application et de le rendre plus facile à maintenir */


//Getting All blocks

router.get('/', (req, res) => {
    Block.find()
        .then(block =>{
            res.json(block);
        })
        .catch(err =>{
            res.status(500).json({error:err});
        });
  });

//Getting one block

router.get('/:id', (req, res) => {
    res.json(res.Block)
});

//Creating one block

// Creating one
router.post('/', async (req, res) => {
    const block = new Block({
      name: req.body.name,
      subscribedToChannel: req.body.subscribedToChannel
    })
    try {
      const newBlock = await Block.save()
      res.status(201).json(newBlock)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

//Updating one block

router.patch('/:id', (req, res) => {
    res.send('Update page');
});

//Deleting one block

router.delete('/:id', (req, res) => {
    res.send('Delete page');
});

module.exports = router;
