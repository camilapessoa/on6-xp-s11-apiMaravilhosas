//controller conversa com model (devolve) e as rotas (não precisa importar)

//Importacao explicita dos metodos dentro do Model
const { selectAllData, selectDataById, insertData, updateData, deleteData } = require('../models/maravilhosasModels')
//Nomes dos métodos para implementação:



//getMaravilhosas - GET
const getMaravilhosas = (req, res) => {
  res.status(200).send(selectAllData())
}

//getMaravilhosaById

const getMaravilhosaById = (req, res) => {
  const { id } = req.params
  const findId = selectDataById(id);
 
 //tratativa de erro entra aqui condicional

  res.status(200).json(findId);

} 

//addMaravilhosa POST

const addMaravilhosa = (req, res) => {
  //"Captura" explicita dos campos dentro do corpo da requisicao(req.body)
  const { id, name, photo, subtitle, about, phrase, history, addedBy} = req.body;

  //Construcao de um objeto com os campos capturados do corpo da requisicao
  const newData = {
    id,
    name,
    photo,
    subtitle,
    about,
    phrase,
    history,
    addedBy
  }

  
  res.status(201).json(insertData(newData))
}

//updateMaravilhosa PUT
const updateMaravilhosa = (req, res) => {
  //"Captura" explicita dos campos dentro do corpo da requisicao(req.body)
  const { id, name, photo, subtitle, about, phrase, history, addedBy } = req.body;
  
  //Construcao de um objeto com os campos capturados do corpo da requisicao
  const newData = {
    id,
    name,
    photo,
    subtitle,
    about,
    phrase,
    history,
    addedBy
  }

  res.status(201).json(updateData(newData, req.params.id))
}


//deleteMaravilhosa

const deleteMaravilhosa = (req, res) => {
  const { id } = req.params
  res.status(200).json(deleteData(id))
}

//PATCH - updatePartMaravilhosa



//não mudar pq o front não vai funcionar

module.exports = {
  getMaravilhosas,
  getMaravilhosaById,
  addMaravilhosa,
  updateMaravilhosa,
  deleteMaravilhosa
}