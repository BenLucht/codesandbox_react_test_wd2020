import React, { Suspense } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Switch, Link, Route } from 'react-router-dom';
// import './App.css';
import mainLogo from'./logo.png';

import Home from './components/home';
import LoadingScreen from './components/loadingscreen';
const Planning = React.lazy(() => import('./components/planning'));
const GetCoding = React.lazy(() => import('./components/getcoding'));
const JSGeneral = React.lazy(() => import('./components/jsgeneral'));
const Sprint0 = React.lazy(() => import('./components/sprints/sprint0'));
const Sprint1 = React.lazy(() => import('./components/sprints/sprint1'));
const Sprint2 = React.lazy(() => import('./components/sprints/sprint2'));
const Sprint3 = React.lazy(() => import('./components/sprints/sprint3'));
const Sprint4 = React.lazy(() => import('./components/sprints/sprint4'));


function App() {
  return (
    <div className="App" style={{ boxSizing: "border-box", position: "relative", "-webkit-font-smoothing": "antialiased", }}>
      <header 
        className="App-header"
        style={{
          position: "fixed",
          width: "100vw",
          height: "85px",
          backgroundColor: "rgb(60, 78, 224)",
          zIndex: "999",
          top: "0",
        }}
      >
        <img src={mainLogo} style={{ height: "32px", marginTop: "26.5px", marginLeft: "3rem" }} />
      </header>
      <div style={{ marginTop: "85px", backgroundColor: "fefefa" }}>
        <Suspense fallback={<LoadingScreen />}>
          <Switch>       
            <Route exact path="/" component={Home} />
            <Route exact path="/planning" component={Planning} />
            <Route exact path="/getcoding" component={GetCoding} />
            <Route exact path="/jsgeneral" component={JSGeneral} />
            <Route exact path="/sprint0" component={Sprint0} />
            <Route exact path="/sprint1" component={Sprint1} />
            <Route exact path="/sprint2" component={Sprint2} />
            <Route exact path="/sprint3" component={Sprint3} />
            <Route exact path="/sprint4" component={Sprint4} />
            <Route exact path="/loading" component={LoadingScreen} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
