import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { ArticleContext } from '../../context/articleContext';

const AddArticle = () => {
    const { saveArticle } = useContext(ArticleContext);
    const [article, setArticle] = useState();

    const handleArticleData = e => {
        setArticle({ ...article, [e.target.id]: e.target.value })
    }

    const addNewArticle = e => {
        e.preventDefault();
        saveArticle(article);
    }

    return (
        <form onSubmit={addNewArticle} className="add-article">
            <input
                type="text"
                id="title"
                placeHolder="Title"
                onChange={handleArticleData}
            />
            <input
                type="text"
                id="body"
                placeholder="Body"
                onChange={handleArticleData}
            />
            <button>Add article</button>
        </form>
    )
}

export default AddArticle;
