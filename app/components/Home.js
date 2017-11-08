var React = require('react');
var ReactDOM= require('react-dom');
var Link = require('react-router-dom').Link;

function Home(){
  return (
    <div className='home'>
      <h1>Github Battle: Battle your friends</h1>

      {/*
      we want a button to redirect to the battle component
      we use a Link to do this, and use css to make it looks like button
      */}
      <Link to="/battle" className="button">
        Battle!
      </Link>
    </div>
  )
}

module.exports = Home;
