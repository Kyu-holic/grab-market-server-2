const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const { query } = req;
  console.log("QUERY : ", query);
  res.send({
    products: [
      {
        id: 1,
        name: "농구공",
        price: 10000,
        seller: "조던",
        imageUrl: "images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: 50000,
        seller: "조던",
        imageUrl: "images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 15000,
        seller: "규호",
        imageUrl: "images/products/keyboard1.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const { body } = req;
  res.send({
    body,
  });
});

app.get("/products/:id", (req, res) => {
  console.log(req);
  const params = req.params;
  const { id } = params;
  res.send(`id는 ${params.id}입니다.`);
});

app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
});
