import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import HomeRoutes from './HomeRoutes';
import UserRoutes from './UserRoutes';

const MainRoutes = () => (

  <Router>
    <Routes>

  
      <Route path="/*" element={<HomeRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/user/*" element={<UserRoutes />}/>
      

      
    </Routes>
  </Router>

);

export default MainRoutes;
