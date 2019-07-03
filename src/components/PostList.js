import React from "react";
import App from "../App";

function PostList() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Diego Fernandes",
        avatar: "http://url-da-imagem.com/imagem.jpg"
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: "http://url-da-imagem.com/imagem.jpg"
          },
          content: "Conteúdo do comentário"
        }
      ]
    }
  ];

  return (
    <div className="post-list">
      {posts.map(post => {
        return (
          <div key={post.id} className="post">
            <div className="header">
              <p>{post.author.name}</p>
              <small>{post.date}</small>
            </div>
            <div className="content">{post.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
