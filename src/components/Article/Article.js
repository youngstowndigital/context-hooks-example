import React from 'react';

const Article = ({ article }) => {
    return (
        <div className="article">
            <h1>{ article.title }</h1>
            <p>{ article.body }</p>
        </div>
    )
}

export default Article;
