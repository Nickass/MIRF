// modules
import * as React from 'react';

// custom

// assets
import './assets/styles.scss';

interface AppProps {

};

class App extends React.Component<AppProps> {
  render () {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Welcom to light video player</h1>
        </header>
        <div className="App__center">
          <video className="Video">
            <source src="" />
          </video>
        </div>
        <footer className="App__footer">
          <p>Created by Nikolay Nazarishin. 2019</p>
        </footer>
      </div>
    )
  }
}

export default App;