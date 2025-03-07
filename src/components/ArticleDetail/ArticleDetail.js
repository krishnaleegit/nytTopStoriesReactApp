import './ArticleDetail.css';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ articles, id }) => {
  console.log(id);
  console.log("Articles",articles);
 
  //const selectedArticle = articles.find(article => article.asset_id === id);

  const selectedArticle = articles.filter(article=>article.asset_id == id);

  
//console.log(article);
  console.log("selected",selectedArticle[0]);
  const { title, abstract, byline, media, section, subsection, url, updated } = selectedArticle[0];

  return(
    <div className='details-viewpage'>
      <div className='back-btn-container'>
        <Link to='/'>
          <button className='back-btn'>Go Back</button>
        </Link>

      </div>
      <div className='article-details'>
        <div className='details-container'>
          <h1>{title}</h1>
          <p>{abstract}</p>
          <a className='article-link' href={url} target='_blank'>Read More...</a>
          <p>{byline}</p>
          <p>{updated}</p>
          <p>{section} {subsection}</p>
        </div>
        <div className='img-container'>
          <img src={media[0]["media-metadata"][2].url} alt={media[0].caption} />
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail;