import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./utility/Footer"
import Header from "./utility/Header"
import Memo from "./memo/Memo"
import Menu from "./menu/Menu"
import Details from "./menu/Details"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/menu' exact component={Menu} />
          <Route path='/' exact component={Memo} />
          <Route path='/menu/:id' component={Details} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
