console.log("\n=== 5. Combinando ?. e ?? ===");

const usuario1 = undefined;
const status1 = usuario1?.ativo ?? "Desconhecido";
console.log("1. Usuario undefined -> Status:", status1);

const usuario2 = { nome: "Lucas" };
const status2 = usuario2?.ativo ?? "Desconhecido";
console.log("2. Sem propriedade ativo -> Status:", status2);


const usuario3 = { nome: "Marina", ativo: false };
const status3 = usuario3?.ativo ?? "Desconhecido";
console.log("3. Ativo e false -> Status:", status3);

const usuario4 = { nome: "Pedro", ativo: true };
const status4 = usuario4?.ativo ?? "Desconhecido";
console.log("4. Ativo e true -> Status:", status4);
