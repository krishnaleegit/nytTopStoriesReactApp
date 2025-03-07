import './ArticleList.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = ({ articles, filteredResults, isFilter }) => { 
  console.log(articles);
  let arr
  !isFilter ? arr = articles : arr = filteredResults
  
  const articleCards = arr.map((article, index) => {
    console.log(article);
    return (
      <ArticleCard 
        key={index}
        id={article.id}
        title={article.title}
        abstract={article.abstract}
        media={article.media}
        short_url={article.uri}
      />
    )
  })
  return (
    !articleCards.length ? <p className='no-results-msg'>No results were found based on your search. Clear and try a new search.</p> : (
      <div className='article-list'>
        {articleCards}
      </div>
    )
  )
}

export default ArticleList;