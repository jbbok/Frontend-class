// 객체타입정의
// interface student {
//   name: string;
//   profile: {
//     type: string;
//     school: string;
//   }
// }

interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

// 서로소 유니온 타입
interface User<T> {
  name: string;
  profile: T;
}

// 서로소 관계 (공통분모 x)
const developerUser: User<Developer> = {
  name: "B",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "K",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
};

console.log(gotoSchool(studentUser));
