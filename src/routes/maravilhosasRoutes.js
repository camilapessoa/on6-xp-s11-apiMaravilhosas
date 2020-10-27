const express = require('express');
const router = express.Router();

const {getMaravilhosas, getMaravilhosaById, addMaravilhosa, updateMaravilhosa, deleteMaravilhosa } = require('../controllers/maravilhosasController');
const cors = require('cors');
//aqui eu devo implementar os métodos das rotas

//Nomes dos métodos para implementação: no controllers

//updateMaravilhosa 


//router pede duas informações: 1 parâmetro é a rota  (/maravilhosas). 2 quem faz a requisição? controller

//get /maravilhosas
// router.get('/maravilhosas/', cors(), getMaravilhosas);

//post /maravilhosas
// router.post('/maravilhosas/', cors(), addMaravilhosa);

//get /maravilhosas/id
// router.get('/maravilhosas/:id', cors(), maravilhosasControllers.getMaravilhosaById);

//put /maravilhosas/id
// router.put('/maravilhosas/:id', cors(), maravilhosasControllers.updateMaravilhosa);


//delete /maravilhosas/id
// router.delete('/maravilhosas/:id', cors(), maravilhosasControllers.deleteMaravilhosa);

//Faz a mesma coisa, a unica diferenca e que os verbos(get, post)
//estao "atrelados" na execucao um do outro, ja que possuem os mesmos endpoints da api
router.get('/maravilhosas/', cors(), getMaravilhosas)
.post('/maravilhosas/', cors(), addMaravilhosa);

//Faz a mesma coisa, a unica diferenca e que os verbos(get, put, delete)
//estao "atrelados" na execucao um do outro, ja que possuem os mesmos endpoints da api
router.get('/maravilhosas/:id', cors(), getMaravilhosaById)
.put('/maravilhosas/:id', cors(), updateMaravilhosa)
.delete('/maravilhosas/:id', cors(), deleteMaravilhosa)


module.exports = router; //middleware - uma função na infinita cadeia de funções que a aplicação possui

