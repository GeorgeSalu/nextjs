// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 10000) {
    return parseInt(Math.random() * (max - min))
}

export default function handler(req, res) {
    res.status(200).json([
        { id: numeroAleatorio(), nome: "caneta", preco: 5.69 },
        { id: numeroAleatorio(), nome: "caderno", preco: 15.69 },
        { id: numeroAleatorio(), nome: "borracha", preco: 7.69 },
        { id: numeroAleatorio(), nome: "tesoura", preco: 21.69 }
    ])
  }
  