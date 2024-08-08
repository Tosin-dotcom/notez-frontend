import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes';
import ErrorBar from './components/commons/ErrorBar';

function App() {


  return (
  
    <div>
      <ErrorBar />
      <MainRoutes />
    </div>
  );
}

export default App;
