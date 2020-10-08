<h1 align="center">
    Robot Mars
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

### 💻 Projeto

<p align="justify">
Um time de robôs devem ser colocados pela NASA para explorar um terreno em Marte. Esse terreno, que é retangular, precisa ser navegado pelos robôs de tal forma que suas câmeras acopladas possam obter uma visão completa da região, enviando essas imagens novamente para a Terra. 
</p>

<p align="justify">
Esse programa permite aos engenheiros da NASA enviar comandos para o Robô e saber onde ele se encontra. Os engenheiros podem rodar testes neste software para garantir que ele se comporta da forma esperada, antes de enviar o Robô para marte.

Para utilizá-lo, faça requisições REST para o programa, com os seguintes parâmetros:
</p>

```L```: Rotaciona o robô 90 graus para a esquerda. <br>
```R```: Rotaciona o robô 90 graus para a direita. <br>
```M```: Move o robô uma posição para frente.<br><br>

Para iniciar o projeto, instale as dependências com ```npm install``` e inicie o sistema com ```npm start```. <br><br>

<b>Exemplo de Utilização</b>: Realizando a requisição: <br>
```curl -s --request POST http://localhost:3000/rest/mars/RMMLRMLM```<br>

o sistema irá retornar: <br>

```(3, 1, N)``` <br>

onde ``3`` é o eixo X, ``1`` o eixo Y e ``N`` a direção onde o robô está apontando, podendo ser ```N, E, S,``` ou ``` W```.

<br><br>

### 🚀 Tecnologias

Esse projeto foi desenvolvido com [Node.js](https://nodejs.org/).

<br>

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

<br>

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
