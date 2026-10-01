console.log("\n=== 3. Operador OR (||) ===");


console.log("Nome preenchido:", "Davi" || "Visitante");
console.log("Nome nulo:", null || "Visitante");

const pontuacao = 0;
console.log("0 com || (troca por 10):", pontuacao || 10);

const apelido = "";
console.log("String vazia com || (troca por padrao):", apelido || "Anonimo");


console.log("0 com || :", 0 || 10);
console.log("0 com ?? :", 0 ?? 10);
