const path = require("path");
const axios = require("axios");

const mod1 = require("./mod1");
// const nome = require('./mod1').nome;

// mod1.falaNome();

////////////////////////////////////

// const p1 = new mod1.Pessoa('Laís');
// console.log(p1);

////////////////////////////////////

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((e) => console.log(e));
