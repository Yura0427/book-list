import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBook from "./components/addBook/AddBook";
import {Provider} from "./contexts/Context";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/add" component={AddBook} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
