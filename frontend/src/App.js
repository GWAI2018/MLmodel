import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ChatBotHelper from '../src/components/chatbot.js';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
       
          <Route path="/"><ChatBotHelper/></Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
