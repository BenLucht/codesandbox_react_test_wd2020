import React, { Suspense } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
// import './App.css';
import mainLogo from'./logo.png';

import Home from './components/home';
import LoadingScreen from './components/loadingscreen';
// import General from './components/general';
// import Planning from './components/planning';
// import GetCoding from './components/getcoding';
// import JSGeneral from './components/jsgeneral';
// import Sprint0 from './components/sprints/sprint0';
// import Sprint1 from './components/sprints/sprint1';
// import Sprint2 from './components/sprints/sprint2';
// import Sprint3 from './components/sprints/sprint3';
// import Sprint4 from './components/sprints/sprint4';
const General = React.lazy(() => import('./components/general'));
const Planning = React.lazy(() => import('./components/planning'));
const GetCoding = React.lazy(() => import('./components/getcoding'));
const JSGeneral = React.lazy(() => import('./components/jsgeneral'));
const Sprint0 = React.lazy(() => import('./components/sprints/sprint0'));
const Sprint1 = React.lazy(() => import('./components/sprints/sprint1'));
const Sprint2 = React.lazy(() => import('./components/sprints/sprint2'));
const Sprint3 = React.lazy(() => import('./components/sprints/sprint3'));
const Sprint4 = React.lazy(() => import('./components/sprints/sprint4'));


function App() {
  const location = useLocation();

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
        <img src={mainLogo} style={{ height: "32px", marginTop: "26.5px", marginLeft: "3rem" }} alt="TechAcademy" />
      </header>
      <div style={{ marginTop: "85px", backgroundColor: "fefefa" }}>
          <AnimatePresence exitBeforeEnter>
            <Suspense fallback={<LoadingScreen />}>
                <Switch location={location} key={location.pathname}>  
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, type: "tween" }}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/general" component={General} />
                  <Route exact path="/planning" component={Planning} />
                  <Route exact path="/getcoding" component={GetCoding} />
                  <Route exact path="/jsgeneral" component={JSGeneral} />
                  <Route exact path="/sprint0" component={Sprint0} />
                  <Route exact path="/sprint1" component={Sprint1} />
                  <Route exact path="/sprint2" component={Sprint2} />
                  <Route exact path="/sprint3" component={Sprint3} />
                  <Route exact path="/sprint4" component={Sprint4} />
                </motion.div>     
                </Switch>
            </Suspense>
          </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
