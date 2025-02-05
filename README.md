Este projeto é um simples jogo de sorteio de amigo secreto desenvolvido em JavaScript, permitindo que os usuários adicionem nomes a uma lista e realizem um sorteio aleatório.

🎯 Funcionalidades

• Adicionar amigos a uma lista.

• Sortear um amigo aleatoriamente.

• Exibir o amigo sorteado.

• Limpar a lista após o sorteio.

🚀 Como Usar

1. Digite o nome de um amigo no campo de entrada.

2. Clique no botão para adicionar o amigo à lista.

3. Após adicionar todos os amigos desejados, clique no botão de sorteio.

4. O nome sorteado será exibido na tela.

📜 Código Principal

O código principal do jogo está no arquivo JavaScript e funciona da seguinte forma:

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

🛠 Tecnologias Utilizadas

• HTML
• CSS
• JavaScript

📌 Melhorias Futuras

• Permitir que os amigos adicionados não sejam repetidos.
• Manter a lista de amigos após o sorteio.
• Adicionar uma interface mais interativa com estilos visuais.
