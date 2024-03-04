const { getModel, addPostModel } = require("../model/posts.model.js");

exports.posts = async (_, res) => {
  try {
    const likes = await getModel();
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createPosts = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const newPost = await addPostModel(titulo, img, descripcion);
    return res.status(200).json(newPost);
  } catch (error) { 
    return res.status(500).json({ message: error.message });
   }
};
