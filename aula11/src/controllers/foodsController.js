const Food = require('../models/Food');

const index = async (req, res) => {
  const foods = await Food.readAll();

  res.render('foods/index.njk', { foods });
};

const readAll = async (req, res) => {
  const foods = await Food.readAll();

  res.json(foods);
};

const create = async (req, res) => {

  res.render('foods/cadastro.njk');

}

const createAction = async (req, res) => {

  const image = `/imgs/${req.file.originalname}`;

  const { name, price } = req.body;

  const id = await Food.create( {
    name,
    price,
    image
  });

  res.redirect('/foods/index');

}

module.exports = { index, readAll, create, createAction };
