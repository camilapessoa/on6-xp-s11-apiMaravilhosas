const express = require('express');
const app = express();
const maravilhosasRouter = require('./routes/maravilhosasRoutes');

app.use(express.json());//middleware - cadeia de responsabilidades
app.use('/', maravilhosasRouter);

module.exports = app;

//começar pelo controllers

//listar todas as mulheres cadastradas; filtrar por id; alterar registros; criar um novo registro; deletar ; tratamento de erro; registro duplicado (não consegui realizar as tratativas)