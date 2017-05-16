import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
  return date.toLocaleDateString();
}

function CommentA(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={ props.author.avatarUrl }
          alt={ props.author.name }
        />
        <div className="UserInfo-name">
          { props.author.name }
      	</div>
      </div>
      <div className="Comment-text">
        { props.text }
      </div>
      <div className="Comment-date">
        { formatDate(props.date) }
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={ props.user.avatarUrl }
      alt={ props.user.name }
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={ props.user } />
      <div className="UserInfo-name">
        { props.user.name }
      </div>
    </div>
  );
}

function CommentB(props) {
  return (
    <div className="Comment">
      <UserInfo user={ props.author } />
      <div className="Comment-text">
        { props.text }
      </div>
      <div className="Comment-date">
        { formatDate(props.date) }
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    avatarUrl: "https://avatars1.githubusercontent.com/u/3197942?v=3&s=460",
    name: "hoge"
  }
};

ReactDOM.render(
  <CommentB
    author={ comment.author }
    text={ comment.text }
    date={ comment.date } />,
  document.getElementById("root")
);
