import axios from 'axios';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Loading from './components/Loading';
const IndexPage = lazy(()=>import('./pages/index'))


function App() {
  axios.defaults.baseURL=process.env.REACT_APP_API_URL
  return (
      <Router>
        <Suspense fallback={<Loading/>} >
          <Routes>
            <Route path='/' element={<IndexPage/>} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
