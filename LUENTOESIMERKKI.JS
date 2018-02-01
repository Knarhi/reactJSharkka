import React, { Component } from 'react';
import api from './api';

class PostList extends Component{

  constructor(props){
    super(props);

    this.state = {
      reversePosts: false,
      search: ""
    };

    this.reversePostOrder = this.reversePostOrder.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  reversePostOrder(){
    this.setState({ reversePosts: (!this.state.reversePosts)})
    console.log("Tila on:", this.state.reversePosts)
  }

  setSearch(evt){
    this.setState({ search: evt.target.value})
  }

  render(){

    if (!this.props.posts){
      return <div>Viestejä ei ladattu</div>;
    }

    const posts = this.props.posts.filter(post => post.title.indexOf(this.state.search) !== -1);

    if(this.state.reversePosts){
        posts.reverse();
    }



    console.log("PostList:", posts);

    return <div>
      <h1>{posts.length} viestiä </h1>
      <input type="text" onChange={this.setSearch} value= {this.state.search}/>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
      {this.state.reversePosts ? 'Järjestys käännetty' : 'Järjestys normaali'}
      <button onClick={this.reversePostOrder}>Käännä järjestys</button>

    </div>
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = { posts: null}
  }

  componentDidMount(){
    api.getPosts().then(posts => {
      this.setState({posts});
      console.log("Alkuperäinen:", posts);
    })
  }

  render() {
    return (
      <div className="App">
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
