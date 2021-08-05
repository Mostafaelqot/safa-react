import Posts from "./components/posts/posts";
import ListItem from "./components/list-item/list-item";
import UpdateItem from "./components/update-item/update-item";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>

        <Route exact path="/ListItem/:id">
          <ListItem />
        </Route>

        <Route exact path="/UpdateItem/:id">
          <UpdateItem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
