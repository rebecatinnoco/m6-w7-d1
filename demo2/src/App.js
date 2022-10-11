import React, {Component} from "react";
// import Home from "./Home"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./BarChart";
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          {/* <Route path='/inventories' element={< />} />
          <Route path='/inventories/:id' element={< />} /> */}
        </Routes>
      </Router>
    )
  }
}

export default App;