import './App.css';
import AddArticle from './components/AddArticle/AddArticle';
import Articles from './containers/Articles';
import ArticleProvider from './context/articleContext';

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}

export default App;
