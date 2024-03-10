const { getModel, addPostModel, updatePostLikesModel, deletePostModel } = require("../model/posts.model.js");

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

exports.updatePostLikes = async (req, res) => {
  try {
    const { id } = req.params;
    await updatePostLikesModel(id); // Llama a la función para actualizar likes en la base de datos
    res.sendStatus(200); // Envía una respuesta exitosa
  } catch (error) {
    console.error("Error al actualizar likes:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};


exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePostModel(id);
    return res.status(200).json(deletedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
