import React from "react";

class PopularRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeNav: "All",
    };
  }

  fetchRepos = (name) => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${name}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  handleClick = (name) => {
    this.setState({
      activeNav: name,
    });
    this.fetchRepos(name);
  };

  componentDidMount() {
    this.fetchRepos("All");
  }

  render() {
    let navigations = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <header>
          <nav>
            <ul className="nav-list flex">
              {navigations.map((nav, i) => (
                <li
                  className={this.state.activeNav === nav ? "active" : ""}
                  key={nav}
                  onClick={() => this.handleClick(nav)}
                >
                  {nav}
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <ul className="repo-list">
          {!this.state.data ? (
            <h2>Loading...</h2>
          ) : (
            this.state.data.items.map((repo, i) => (
              <li key={repo.id}>
                <div className="text-center">
                  <h4>#{i + 1}</h4>
                  <img src={repo.owner.avatar_url} alt="" />
                  <h2>{repo.name}</h2>
                </div>

                <h5>{repo.stargazers_count}</h5>
                <h5>{repo.forks}</h5>
                <h5>{repo.open_issues}</h5>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}
export default PopularRepos;
