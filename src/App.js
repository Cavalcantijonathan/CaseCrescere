import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './Navigation';
import CardSection from './CardSections';

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div class="ms-Grid-row">
        <div class = "ms-Grid-col ms-sm6 ms-md8 ms-lg2">
          <Navigation />
        </div>
        <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
          <div class="ms-Grid-row">
            <CardSection />
          </div>
          <div class="ms-Grid-row">

          </div>
        </div>        
      </div>      
    </div>
  );
}

export default App;
