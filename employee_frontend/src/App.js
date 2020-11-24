import logo from './logo.svg';
import './App.css';
import Header from "./Components/HeaderComonents";
import Footer from "./Components/FooterComponents";
import ListEmployeeComponents from './Components/ListEmployeeComponent'
function App() {
  return (
    <div className="container">
      <Header />
       <ListEmployeeComponents />
       <Footer />
    
    </div>
  );
}

export default App;
