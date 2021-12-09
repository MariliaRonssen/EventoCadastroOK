validardatadoEvento(30/08/2021)

function validardatadoEvento(data){

    dataAtual= new Date();

    data=new Date(data);

    if (data<dataAtual){
        console.log("Data Inválida, evento NÃO cadastrado.");
        return true;
    } else {
        console.log("Data Válida, evento pode ser cadastrado.");
        return false;
    }
}

let idadeParticipante = 18;
if (idadeParticipante <=18) {
    console.log("Participante cadastrado com sucesso.")
} else {
    console.log("Participante menor de 18 ano, cadastro não permitido.")
}

let listaDeParticipantes = ["Maria", "Alice", "Sofia"]

if (listaDeParticipantes.length < 100) {
    console.log("É possível cadastrar mais participantes")
} else {
    console.log("Não é possível cadastrar mais participantes")
}

console.log("Os participantes são:",listaDeParticipantes)

let listaDePalestras = ["Palestra 1","Palestra 2"]
    console.log ("As palestras do evento são",listaDePalestras)

let listaDePalestrantes = ["Pedro","João"]
    console.log("Os palestrantes são:",listaDePalestrantes)
  