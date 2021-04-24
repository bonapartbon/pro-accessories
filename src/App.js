import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./NotFound"
import Body from "./components/layout/Body";
import mouseLogitech from "./pages/mouse/mouseLogitech";
import mouseSteelseries from "./pages/mouse/mouseSteelseries";
import mouseZowie from "./pages/mouse/mouseZowie";
import keyboardKeychron from "./pages/keyboard/keyboardKeychron";
import keyboardDucky from "./pages/keyboard/keyboardDucky";
import keyboardVarmilo from "./pages/keyboard/keyboardVarmilo";
import keyboardLeopold from "./pages/keyboard/keyboardLeopold";
import keyboardMistel from "./pages/keyboard/keyboardMistel";
import keyboardAkko from "./pages/keyboard/keyboardAkko";
import keyboardLogitech from "./pages/keyboard/keyboardLogitech";
import keyboardHyperX from "./pages/keyboard/keyboardHyperX";
import headsetLogitech from "./pages/headset/headsetLogitech";
import headsetHyperX from "./pages/headset/headsetHyperX";
import mousepadSteelseries from "./pages/mousepad/mousepadSteelseries";
import mousepadZowie from "./pages/mousepad/mousepadZowie";
import mousepadHyperX from "./pages/mousepad/mousepadHyperX";
import About from "./pages/About";
import ItemDetail from "./itemDetail";



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Body}/>
          <Route path="/about" component={About}/>

          <Route path="/mouse/logitech" component={mouseLogitech}/>
          <Route path="/mouse/steelseries" component={mouseSteelseries}/>
          <Route path="/mouse/zowie" component={mouseZowie}/>
          <Route path="/keyboard/akko" component={keyboardAkko}/>
          <Route path="/keyboard/keychron" component={keyboardKeychron}/>
          <Route path="/keyboard/ducky" component={keyboardDucky}/>
          <Route path="/keyboard/varmilo" component={keyboardVarmilo}/>
          <Route path="/keyboard/leopold" component={keyboardLeopold}/>
          <Route path="/keyboard/mistel" component={keyboardMistel}/>
          <Route path="/keyboard/logitech" component={keyboardLogitech}/>
          <Route path="/keyboard/hyperx" component={keyboardHyperX}/>
          <Route path="/headset/logitech" component={headsetLogitech}/>
          <Route path="/headset/hyperx" component={headsetHyperX}/>
          <Route path="/mousepad/steelseries" component={mousepadSteelseries}/>
          <Route path="/mousepad/zowie" component={mousepadZowie}/>
          <Route path="/mousepad/hyperx" component={mousepadHyperX}/>
          <Route path="/mousepad/hyperx" component={mousepadHyperX}/>
          <Route path="*"  component={NotFound}/>


        </Switch>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;