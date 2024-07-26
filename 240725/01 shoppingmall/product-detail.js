const productInfo =
  "https://my-json-server.typicode.com/jbbok/oliveyoung-fake/db";

//json으로 바꿔서 데려와야함
fetch(productInfo)
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data); //아이디값 부여해줘야함
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };
    // console.log(products); // 1씩 증가함

    const params = new URLSearchParams(window.location.search);
    // 붕어빵 틀에서 나온 붕어빵 냠
    const category = params.get("category");
    // console.log(category);
    const name = params.get("name");
    // console.log(category, name);

    const product = products.data.find(
      (product) => product.category === category && product.name === name
      // && 조건 2개가 모두 같은, || 조건 1개만 맞아도 가져옴
    );

    if (product) {
      const productDetailDiv = document.querySelector("#product-detail");
      // console.log(productDetailDiv);
      productDetailDiv.innerHTML = `
      <div class="product-category">
        <h3>현재 카테고리 ${product.category} > ${product.name}</h3>
      </div>
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p>Category: ${product.category}</p>
        <p>Price: ${price} 원</p>
      </div>
      <button>장바구니 이동</button>
      `;
    } else {
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerText = "존재하지 않는 상품입니다!";
    }
  })
  .catch((error) => {
    console.log(error);
  });
