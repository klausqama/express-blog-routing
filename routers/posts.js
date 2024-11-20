const express = require('express');
const posts = require('../immagini_e_posts/posts');
const router = express.Router();

// Rotte posts
//index
router.get('/',(req,res) =>{
    res.send('ecco elenco dei post');
    
});

//show
router.get('/:id',(req,res) => {
    const id = req.params.id
    res.send(`ecco il post con id ${id}`)
});

//store
router.post('/',(req, res) => {
    res.send('Creazione nuovo post');
});

//update
router.put('/:id',(req, res) =>{
    const id = req.params.id
    res.send(`Modifica integrale del posts ${id}`);
    });

//modify
router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modifica parziale della post ${id}`);
    });
    
//destroy
router.delete('/:id', function (req, res) {
    res.send(`Eliminazione del post  + ${id}`);
    });



module.exports = router;