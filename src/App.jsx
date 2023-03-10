import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Room from "./pages/Room/Room";
import Main from "./pages/Main/Main";
import NotFound404 from "./pages/NotFound404/NotFound404";


function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/room/:id' component={Room}/>
              <Route exact path='/' component={Main}/>
              <Route component={NotFound404}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
