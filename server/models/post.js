const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  text: {
    type: String,
    required: true,
  },
  
  photo: {
    type: String,
  },
  likes:{
    type: Number,
    },
    
  comments: [String]
  
});

module.exports = Post = mongoose.model("post", PostSchema);
