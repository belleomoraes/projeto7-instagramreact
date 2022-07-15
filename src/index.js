import ReactDOM from "react-dom";
import Navbar from "./compartimentos/Navbar";
import BarraStories from "./compartimentos/BarraStories";
import Posts from "./compartimentos/Posts";
import Sidebar from "./compartimentos/Sidebar";
import FundoMobile from "./compartimentos/FundoMobile";

function App() {
  return (
    <div>
      <Navbar />
      <div class="corpo">
        <div class="esquerda">
          <BarraStories />
          <Posts />
        </div>
        <Sidebar />
        <FundoMobile />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
