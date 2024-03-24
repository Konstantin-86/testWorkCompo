import "./App.scss";
import FirstLineNav from "./components/header/firstNav/FirstLineNav";
import SecondLineNav from "./components/header/secondNav/SecondLineNav";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <FirstLineNav />
      <SecondLineNav />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
