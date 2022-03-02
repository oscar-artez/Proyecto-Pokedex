
import './App.css';
import './Styles/StylesMypage.css'
import CardSection from './Components/CardSection';
import Modals from './Components/Modals';
import Mypage from './Components/Mypage';
import Navbar from './Components/Navbar';

function App() {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <div className="App">
    <Navbar
    //filtrarBusqueda={(e) => {filtrarProductos(e.target.value)}}
    />
    <Mypage/>
    {/* <CardSection
    
    /> */}
    {/* <div className="d-grid gap-2">
    </div> */}
    {/* <Modals/> */}
    </div>

  );
}

export default App;
