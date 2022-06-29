const express = require("express");
const User = require('../models/post'); 
const router = express.Router();

router

.post('/create', async (req, res) => {
    try {
      const user = await User.createpost(req.body.c);
      res.send({...c});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const user = await User.updatePost(req.body.id, req.body.c);
      res.send({...c});
    } catch(error)
     {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await User.deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })