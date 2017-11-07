var React = require('react');
var NavLink = require('react-router-dom').NavLink;
/*NavLink vs Link
Link and NavLink both can create a <a> tag, Link is more for just create a <a> tag
NavLink allwo to dynamically change the <a> style based on if that route is active, so NavLink are basic
Link but with more property in it.
*/
function Nav(){
  return(
    <ul className="nav">
      <li>
        <NavLink exact activeClassName = 'active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
