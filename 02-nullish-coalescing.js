console.log("\n=== 1. Optional Chaining (?.) ===");

const alunoSemEndereco = { nome: "Bruno" };

console.log("Cidade de Bruno (seguro com ?.):", alunoSemEndereco.endereco?.cidade);


const alunoComEndereco = {
  nome: "Ana",
  endereco: { cidade: "Sao Paulo" }
};
console.log("Cidade de Ana:", alunoComEndereco.endereco?.cidade);

const usuarios = [{ nome: "Carla" }];
const usuariosVazios = [];

console.log("Primeiro da lista:", usuarios[0]?.nome);
console.log("Primeiro da lista vazia:", usuariosVazios[0]?.nome);
