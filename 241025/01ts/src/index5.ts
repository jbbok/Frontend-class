// Indexed Access Type
// 인덱스 값을 활용해서 타입 안에 특정 속성값의 타입만 추출해내는 방법

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    bio: string;
  };
}

const post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "B",
    age: 20,
    bio: d,
  },
};

const printAuthorInfo = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name} - ${author.age}`);
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post01: PostList[0] = {
  title: "채식주의자",
  content: "채식을 하자!",
  author: {
    id: 1,
    name: "한강",
    age: 20,
  },
};

// indexed access type
// 인덱스의 값을 찾아와서 값을 지정할 수 있음
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; //이렇게 하면 number타입이 됨
type Tup1 = Tup[1]; //이렇게 하면 string타입이 됨
type Tup2 = Tup[2]; //이렇게 하면 boolean타입이 됨

type Tup3 = Tup[number]; //유니온 타입이 됨
