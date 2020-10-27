//os modelos fazem parte do domínio(é uma camada da aplicação)
//model deve ser uma implementação de como interagir com a API - nesse caso

let allData = require('../data/data.json');


// selectAllData
const selectAllData = () => {
  return allData
}

//selectDataById

const selectDataById = (id) => {
  //Encontrar o elemento com o id igual ao repassado no parametro da funcao
  const dataById = allData.find(el => el.id == id);
  return dataById
}

//insertData
const insertData = (newData) => {
  //"Pushar" o conteudo do objeto passado para a funcao no parametro newData
  allData.push(newData)
  return allData
}

//updateData
const updateData = (newData, id) => {
  //Encontrar o elemento com o id igual ao repassado no parametro da funcao
  const elToUpdate = allData.find(el => el.id == id );
  //Encontrar o indice relacionado ao elemento elToUpdate
  const index = allData.indexOf(elToUpdate)
  //Validacao para saber se o indice para o elemento foi encontrado
  if(index !== -1) {
    allData[index] = newData
  }
  return allData
}


//deleteData
const deleteData = (id) => {
  //Encontrar o elemento com o id igual ao repassado no parametro da funcao
  const elToDelete = allData.find(el => el.id == id );
  //Encontrar o indice relacionado ao elemento elToDelete
  const index = allData.indexOf(elToDelete)
  //Deletar 1 item do array no indice(index)
  allData.splice(index, 1)
  return allData
}


//muitos chamam model de repository
//models são a forma em que vou trabalhar os dados

module.exports = {
  selectAllData,
  selectDataById,
  insertData,
  updateData,
  deleteData 
}