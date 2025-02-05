const inputNomeAmigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

function adicionarAmigo() {
  let nome = inputNomeAmigo.value.trim();
  if (!nome) return alert("Escreva o nome do amigo");

  const li = document.createElement("li");
  li.innerText = nome;
  listaAmigos.appendChild(li);

  inputNomeAmigo.value = "";
}

function sortearAmigo() {
  const amigos = listaAmigos.querySelectorAll("li");
  if (amigos.length === 0) return alert("Adicione o amigo para poder sortear");

  const posicaoSorteada = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[posicaoSorteada].innerText;

  resultado.innerText = amigoSorteado;
  listaAmigos.innerText = "";
}
