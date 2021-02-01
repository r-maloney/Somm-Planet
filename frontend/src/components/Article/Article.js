import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../store/article";
import { Modal } from "../../context/Modal";
import EditArticleModal from "./EditArticleModal";
import "./Article.css";

const Article = ({ country }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  const articles = useSelector((state) =>
    Object.values(state.article).filter((article) => {
      if (!country) return true;
      return article.countryId === country.id;
    })
  );

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    if (articles && user) setIsLoaded(true);
  }, [articles, user]);

  const handleEdit = () => {
    setEditMode((p) => !p);
  };

  if (!isLoaded) return null;

  return (
    <div className='country-articles'>
      {articles &&
        articles.map((article) => (
          <div key={article.id} className='country-article'>
            <div className='country-article__user'>
              <div className='country-article__avatar'>
                <img src='/images/wine-glass-icon.png' alt='wine glass icon' />
                {user && article.User && user.id === article.User.id && (
                  <button onClick={handleEdit}>Edit</button>
                )}
              </div>
            </div>
            <div className='country-article__article'>
              <p className='country-article__date'>
                {new Date(Date.parse(article.createdAt)).toDateString()}
              </p>
              <div className='country-article__title'>{article.title}</div>
              <p className='country-article__body'>{article.body}</p>
            </div>
            {editMode && (
              <Modal onClose={() => setEditMode(false)}>
                <EditArticleModal
                  article={article}
                  user={user}
                  setIsLoaded={setIsLoaded}
                />
              </Modal>
            )}
          </div>
        ))}
    </div>
  );
};

export default Article;
