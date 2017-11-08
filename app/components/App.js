var React = require('react');
var ReactDOM= require('react-dom');
var Popular = require('./popular');
var Home = require('./Home');
var Battle = require('./Battle');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

var Switch = ReactRouter.Switch;

function App(){
  return (

    <Router>
      <div className = 'display-nav'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/battle' component={Battle} />
          <Route path='/popular' component={Popular} />
          <Route render = {function(){
            return <p>Not Found</p>
          }} />
          {/*this is a fallback if user type any wrong path. Just
            add a render property to the Route to render the msg*/}
        </Switch>
      </div>
    </Router>

  )
}

module.exports = App;
