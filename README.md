# <p align="center">Projeto iChoveu</p>

## Contexto

Esse projeto é um site simples de previsão do tempo, `ele já tem sua estilização pronta`, bem como o `html`. O objetivo é consumir os dados de uma API, a [Weather API](https://www.weatherapi.com/), compreender o conceito assincronicidade em JavaScript e desenvolver as funções que estão em `src/helpers/`.

## Rode o projeto localmente

⚠️ É preciso ter o [Node](https://nodejs.org/en) instalado em sua máquina.

⚠️ É preciso ter uma `API Key`.

<details> <br>

<summary>Obtendo uma KEY</summary>

Crie uma conta no [Weather API](https://www.weatherapi.com/signup.aspx) para ter uma `API Key`.

![alt text](image-1.png)

</details>

⚠️ Crie um arquivo`.env` na raiz do projeto. Na raiz também, há um exemplo `.env.example` veja:

```Typescript
VITE_TOKEN=paste_your_API_KEY_here
```

Primeiro, instale as dependências com:

```JSON
npm install
```

Inicie o vite server:

```JSON
npm run start
```

Ou inicie o vite server já abrindo o navegador:

```JSON
npm run dev
```

## Competências desenvolvidas

- Compreensão de `promises` e `fetch`.
- Compreensão de `async` e `await`.
