import React from "react";
import ReactDOM from "react-dom";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.value}</li>;
  }
}

class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map(n =>
      <ListItem key={n.toString()}
                value={n} />
    );
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        <ul>
          {numbers.map(n =>
            <ListItem key={n.toString()}
                      value={n} />
          )}
        </ul>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;
    const todoItems = todos.map((v, i) => 
      <li key={i}>
        {v}
      </li>
    );
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.id}</h2>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map(post =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = this.props.posts.map(post =>
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
      />
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const todos = ["Coding", "Build", "Test", "Publish"];
    const posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
      { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];
    return (
      <div>
        <NumberList numbers={numbers} />
        <TodoList todos={todos} />
        <Blog posts={posts} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
