// import product from "./product.js";

// console.log(product.data[0].img);

const productInfo = "./products.json";
//외부에서 데이터를 불러올 때 사용하는 함수
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    // console.log(product.data[0]);
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        // 인자값 공간(item자리)은 배열의 아이템 이번 전개연산자는 원본데이터를 그대로 가져와주게끔함
        ...item,
        id: idCounter++,
      })),

      // data: data.data.forEach((item) => ({
      //   ...item,
      //   id: idCounter++, //아예 불가능함
      // })),
    };

    // Removing Items //중복방지
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Making Items
    const createItem = (product) => {
      // console.log(idCounter);
      const ul = document.querySelector("ul");
      // console.log(ul);

      const li = document.createElement("li");
      const img = document.createElement("img");
      // 돔안에서 특정 태그를 생성하고자 할 때
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      // 프로토타입 함수 : 현재 너가 숫자가 통화 표기하려고 할 때 어느 나라꺼로 할지!
      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency", //화폐통화단위
        currency: "KRW",
      }).format(product.price);

      // 순서주의
      h3.className = "name";
      h3.innerText = product.name;

      span.className = "price";
      span.innerText = price;

      attr.value = product.img;
      // Node 꼭 입력해야함
      img.setAttributeNode(attr);

      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
    };

    // Important Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    // Button Events
    const newlisting = document.querySelector(".newlisting");
    // console.log(newlisting);

    const sortNew = (e) => {
      e.preventDefault();
      // console.log("click");
      // 정렬된 배열을 담을 변수
      const myProducts = products.data.sort((a, b) => {
        // return a.id - b.id; //오름차순
        return b.id - a.id; //내림차순
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    // Ascending
    const AscendingButton = document.querySelector(".ascending");
    // console.log(ascending);

    const sortAsce = (e) => {
      e.preventDefault();
      // console.log();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    AscendingButton.addEventListener("click", sortAsce);

    // Descending
    const descButton = document.querySelector(".decending");

    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descButton.addEventListener("click", sortDesc);

    // Search
    const searchBar = document.querySelector(".searchBar");
    // console.log(searchBar);

    searchBar.addEventListener("input", () => {
      // console.log("input"); // : 어떤 값이 들어온다면
      const keyword = searchBar.value.toLowerCase();
      // console.log(keyword);
      if (keyword === "") {
        removeItems(); //예외조항처리! -> 메모리 효율적으로 쓸 수 있음
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });
      }

      const filtered = products.data.filter((product) => {
        return product.name.toLowerCase().includes(keyword);
      });

      removeItems();

      filtered.forEach((product) => {
        createItem(product);
      });
    });

    // Select Event
    const select = document.querySelector("select");
    // console.log(select);

    const selectCategory = (e) => {
      // console.log("select");
      // console.log(e);
      // console.log(e.target);
      // console.log(e.target.options);
      // console.log(e.target.options.selectedIndex);
      // 이때 html -> select에 option값을 씀! 그래서 잘 적어야함
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      // console.log(value);

      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  });
