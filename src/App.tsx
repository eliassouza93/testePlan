import Navbar from "./components/Navbar";
import TelaInicial from "./pages";
import style from './app.module.scss'

function App() {
  return (

    <div className={style.app}>
      <Navbar/>
      <TelaInicial />

    </div>


  );
}

export default App;
