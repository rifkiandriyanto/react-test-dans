import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import PrivateRoute from './Route/PrivateRoute';
import { AuthProvider } from './Auth/AuthContext';
import DetailJob from './pages/DetailJob';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute component={Home} path='/home' />
          <Route component={DetailJob} path='/detailjob' />
          <Route exact path='/' component={LoginPage}/>
          <Route path="*">Ups</Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
