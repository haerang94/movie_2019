import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

const App = () => {
  return (
    //같은 주소 부분을 포함하고 있으면 같이 나타낸다
    //exact를 사용해서 정확한 주소 부분을 포함한 것만 나타나게 할 수 있다
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
