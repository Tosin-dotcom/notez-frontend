import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes';
import ErrorBar from './components/commons/ErrorBar';
import SuccessBar from './components/commons/SuccessBar';

function App() {


  return (
  
    <div>
      <ErrorBar />
      <SuccessBar />
      <MainRoutes />
    </div>
  );
}

export default App;
