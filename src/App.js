// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from './Header.js';
import HornedBeast from './HornedBeast.js';
import Footer from "./Footer.js";
import './App.css';

class App extends React.Component {
  render() {
      return (
        <>
          <Header/>
          <main>
            <HornedBeast 
            title="Angie"
            img='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bearded_Dragon_-_close-up.jpg/800px-Bearded_Dragon_-_close-up.jpg?20041127182107'
            bio='Im a really awesome bearded dragon'
            />
            <HornedBeast
            title='RJ'
            img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Easy_origami_dragon_for_beginners-_how_to_paint_a_dragon_for_beginners.jpg/800px-Easy_origami_dragon_for_beginners-_how_to_paint_a_dragon_for_beginners.jpg?20190512132204'
            bio='The biggest beast around'
            />
          </main>
          <Footer/>
        </>
      );
    }
}

export default App;
