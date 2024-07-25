const product = {
  data: [
    {
      id: Date.now(),
      name: "Mouse",
      price: "19900",
      category: "it",
      img: "./img/mouse.jpg",
    },
    {
      id: Date.now() + 1,
      name: "Cup",
      price: "5900",
      category: "life",
      img: "./img/cup.jpg",
    },
    {
      id: Date.now() + 2,
      name: "Keyboard",
      price: "21000",
      category: "it",
      img: "./img/keyboard.jpg",
    },
    {
      id: Date.now() + 3,
      name: "Book",
      price: "19900",
      category: "book",
      img: "./img/book.jpg",
    },
    {
      id: Date.now() + 4,
      name: "Pen",
      price: "2000",
      category: "book",
      img: "./img/pen.jpg",
    },
  ],
};

// 출력을 해야 가져올 수 있기 때문에 꼭 선언해줘야 함!
export default product;
