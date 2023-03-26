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

router.get('/:id', getBlock,(req, res) => {
    res.json(res.block.name)
});

//Creating one block
router.post('/', async (req, res) => {
    const block = new Block({
      name: req.body.name,
      address: req.body.address
    })
    try {
      const newBlock = await Block.save()
      res.status(201).json(newBlock)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

//Updating one block

router.patch('/:id', getBlock, async (req, res) => {
    if (req.body.name != null) {
      res.block.name = req.body.name
    }
    if (req.body.address != null) {
      res.subscriber.address = req.body.address
    }
    try {
      const updatedblock = await res.block.save()
      res.json(updatedblock)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

//Deleting one block

router.delete('/:id', getBlock, async (req, res) => {
    try {
      await res.block.remove()
      res.json({ message: 'Deleted block' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  

//Middlleware
async function getBlock(req, res, next) {
    let block1
    try {
      block1 = await Block.findById(req.params.id)
      if (block1 == null) {
        return res.status(404).json({ message: 'Cannot find block' })
      }
      else{
        return res.status(404).json({ message: 'block' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.block1= block1
    next()
  }

module.exports = router;
