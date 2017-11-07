var React = require('react');
var ReactDOM = require('react-dom');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Switch = ReactRouter.Switch;

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className = 'container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            {/*exact is prevent the path with the same starts to show at the same time*/}
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function(){
              return <p>Not Found</p>
            }} />
          </Switch>{/*Switch allows to show each route, so we add a fallback one if none the first three one was clicked*/}
        </div>
      </Router>
    );
  }
}

module.exports =App;
