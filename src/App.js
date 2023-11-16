import "./App.css";
import "./CSS/test.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import { ColorProvider } from "./ch14_ContextAPITest/testColor";

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </ColorProvider>
  );
}

export default App;
