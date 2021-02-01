import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../store/article";
import "./Article.css";

const Article = ({ country }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const articles = useSelector((state) => Object.values(state.article));

  let countryArticles = [];
  let countryRegions = [];

  if (country.Regions) {
    countryRegions = country.Regions;
    for (let region of countryRegions) {
      for (let article of articles) {
        if (article.regionId === region.id) countryArticles.push(article);
      }
    }
  }

  return (
    <div className='country-articles'>
      {countryArticles &&
        countryArticles.map((article) => (
          <div key={article.id} className='country-article'>
            <div className='country-article__user'>
              <div className='country-article__avatar'>
                <img src='/images/wine-glass-icon.png' alt='wine glass icon' />
              </div>
            </div>
            <div className='country-article__article'>
              <p className='country-article__date'>
                {new Date(Date.parse(article.createdAt)).toDateString()}
              </p>
              <div className='country-article__title'>{article.title}</div>
              <p className='country-article__body'>{article.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Article;
