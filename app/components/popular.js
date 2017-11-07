var React = require('react');
var ReactDOM =require('react-dom');

class Popular extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      selectedLang :'All'
    };
    this.updateLang = this.updateLang.bind(this);
  }

  updateLang(lang){
    this.setState(function(){
      return {
        selectedLang: lang
      }
    });
  }
  render(){
    const language = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
      <ul className = 'lang'>
        {language.map(function(x){
          return (
            <li
            style={x === this.state.selectedLang ? {color:'#de2244'}:null}
            key={x}
            onClick = {this.updateLang.bind(null, x)}>
              {x}
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

module.exports = Popular;
