var React = require('react');
var api = require('../utils/api');
/*when should we call the api's fetchPopularRepos?
We should call it in the lifecycle with componentDidMount(), it is
the place for the AJAX call*/

function SelectedLanguage(props){
  var languages = ['All', 'Java', 'C', 'JavaScript', 'Ruby'];

  return (
    <ul className ="lang-list">
      {languages.map((lang) => {
        return (
          //3. add a onClick property to the item,use props.onSelect to get the result.
          //because we need to let updateLang function know which lang we are clicking, we need to use
          //bind to pass the parameter to the onSelect function.
          <li
            key={lang}
            className = 'lang-item'
            style = {lang === props.selectedlang? {color:'#3aa33e'}:null}
            onClick={props.onSelect.bind(null, lang)}
          >{lang}</li>
        )
      })}
    </ul>
  )
}
function RepoGrid(props){
  console.log(props.repos);
  return (
    <ul className="grid-list">
      {props.repos.map((repo, index)=>{
        return (
          <li key={repo.name} className ="grid-item">
            <div className="rank">#{index+1}</div>
            <ul className="owner-items">
              <li>
                <img className = 'avatar' src={repo.owner.avatar_url} />
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
    //the repos here is for the api
  	this.state = {
      selectedlang : 'All',
      repos: null
    };
    //0. Make sure to invoke it alwasy at the correct context.
    this.updateLang = this.updateLang.bind(this);
  }
  //lifecycle
  componentDidMount() {
    //for AJAX
    this.updateLang(this.state.selectedlang);
  }

  //1.create updateLang function to reset the state.
  updateLang(lang){
    this.setState(()=>{
      return {
        selectedlang : lang,
        repos:null
      }
    });
    //a. get the api returns here, because everytime we update the lang,
    //we want new api repos to show.
    api.fetchPopularRepos(lang)
      .then((repos)=> {
        this.setState(()=>{
          return{
            repos:repos
          }
        })
      });
  }

  render(){
    return(
      //2. add the onSelect property to pass the updateLang result to SelectLanguage function
      //in that function, everything is ready in props
      <div>
        <SelectedLanguage
          selectedlang = {this.state.selectedlang}
          onSelect = {this.updateLang}
        />
        {!this.state.repos?<p>Loading...</p> :
        <RepoGrid repos = {this.state.repos}/>}
      </div>
    );
  }
}

module.exports = Popular;
