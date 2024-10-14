let initialState = { contactList: [], keyword: "" }; // 원본값은 건드리면 안됨

const reducer = (state = initialState, action) => {
  // console.log(action);
  const { type, payload } = action;
  // console.log(type, payload);
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    // return {
    //   ...state,
    //   contactList: [
    //     ...state.contactList,
    //     { name: payload.name, phoneNumber: payload.phoneNumber },
    //   ],
    // };
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    // return {
    //   ...state,
    //   keyword: payload.keyword,
    // };
    // default:
    //   return { ...state }; // 복제가 되어진 값으로
  }
  return { ...state };
};

export default reducer;

// const userList = [
//   {
//     id: 1,
//     name: "David",
//     number: "01012345678",
//   },
//   {
//     id: 2,
//     name: "Banana",
//     number: "01012345678",
//   },
//   {
//     id: 3,
//     name: "Apple",
//     number: "01012345678",
//   },
// ];
