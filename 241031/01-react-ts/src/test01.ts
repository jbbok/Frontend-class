enum Role { // 자동으로 0,1,2 순서로 할당이 됨!
  ADMIN,
  USER,
  GUEST,
}

export const user1 = {
  name: "Ria",
  role: Role.ADMIN, // 0
};
const user2 = {
  name: "BBO",
  role: Role.USER, //1
};
const user3 = {
  name: "Banana",
  role: Role.GUEST, //2
};
