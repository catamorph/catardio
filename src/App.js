import "./App.css";
import BouncingImages from "./components/catardios";
import FallingDollarBills from "./components/dollarBills";
import Footer from "./components/footer";
import Header from "./components/header";
import LinksList from "./components/linksList";

function App() {
  return (
    <div className="App">
      <Header text={"Catardio"}></Header>
      <LinksList />

      <FallingDollarBills></FallingDollarBills>
      <BouncingImages></BouncingImages>
      <Footer></Footer>
    </div>
  );
}

export default App;
