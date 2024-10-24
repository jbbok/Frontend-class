// 외부 API 데이터를 찾아오게 되었을 때, 타입을 지정!!

// const loading = {
//   state: "LOADING",
// };

// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류발생...",
//   },
// };

// const success = {
//   state: "SUCCESS",
//   Response: {
//     data: "movie...",
//   },
// };

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// const processResult = (task: AsyncTask) => {
//   switch (task.state) {
//     case "LOADING": {
//       console.log("로딩 중");
//       break;
//     }
//     case "FAILED": {
//       console.log(`에러 발생 : ${task.error?.message}`);
//       break;
//     }
//     case "SUCCESS": {
//       console.log(`성공 : ${task.response?.data}`);
//       break;
//     }
//   }
// };

// 서로소 유니온 타입 : 교집합이 없는 관계

type LoadingTask = {
  state: "LOADING";
};

type FaildeTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FaildeTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response?.data}`);
      break;
    }
  }
};
