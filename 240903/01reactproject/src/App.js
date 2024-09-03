// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  // const name = "JB";
  const BodyProps = {
    name: "J",
    location: "서울시",
    favoList: ["마라탕", "밤빵", "막국수"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      {/* <Body name={name} location={"서울시"} /> */}
      <Footer />
    </div>
  );
}
export default App;
