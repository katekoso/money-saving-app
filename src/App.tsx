import RoutesComponent from "./routes";
import NavigationComponent from "./components/Navigation/Navigation";
import './index.css'

function App() {
  return (
    <div className='page'>
      <NavigationComponent />
      <RoutesComponent />
    </div>
  );
}

export default App;
