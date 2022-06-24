// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        { id: 1, nome: "caneta", preco: 5.69 },
        { id: 2, nome: "caderno", preco: 15.69 },
        { id: 3, nome: "borracha", preco: 7.69 },
        { id: 4, nome: "tesoura", preco: 21.69 }
    ])
  }
  