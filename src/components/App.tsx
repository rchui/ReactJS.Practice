import * as React from 'react';
import '../stylesheets/App.css';

const logo = require('../assets/logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello World.
        </p>
      </div>
    );
  }
}

export default App;
