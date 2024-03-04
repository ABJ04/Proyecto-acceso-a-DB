const { pool } = require('../dbase/config.js');

async function getModel() {
  try {
    const posts = await pool.query('SELECT id , titulo, img, descripcion FROM POSTS')
    return posts.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addPostModel(titulo, img, descripcion) {
  try {
    const newPost = await pool.query('INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *', [titulo, img, descripcion])
    return newPost.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { getModel, addPostModel };
