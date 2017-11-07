var React = require('react');
var ReactDOM =require('react-dom');
var api = require('../utils/api');

function SelectLanguage (props){
  var language = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className = 'lang'>
      {language.map(function(x){
        return (
          <li
          style={x === props.selectedLang ? {color:'#de2244'}:null}
          key={x}
          onClick = {props.onSelect.bind(null, x)}>
            {x}
          </li>
        )
      }, this)}
    </ul>
  )
}
function RepoGrid(props){
  return (
    <ul className = 'popular-list'>
    {props.repos.map(function(repo, index){
      return(
        <li key={repo.name} className='popular-item'>
          <div className="poplular-rank">
            #{index+1}
          </div>
          <ul className="special-list-time">
            <li>
              <img className="avatar" src = {repo.owner.avatar_url} />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      )

    })}
    </ul>
  )
}
class Popular extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      selectedLang :'All',
      repos:null
    };
    this.updateLang = this.updateLang.bind(this);
  }
  componentDidMount() {
    //AJAX
    this.updateLang(this.state.selectedLang);
  }

  updateLang(lang){
    this.setState(function(){
      return {
        selectedLang: lang
      }
    });
    api.fetchPopularRepos(lang)
    .then(function(repos){
      this.setState(function(){
        return {
          repos : repos
        }
      })
    }.bind(this));
  }
  render(){

    return(
      <div>
        <SelectLanguage
        selectedLang = {this.state.selectedLang}
        onSelect = {this.updateLang} />
        {!this.state.repos?<p>Loading</p> :
        <RepoGrid repos = {this.state.repos} />
        }
      </div>
    )
  }
}

module.exports = Popular;
