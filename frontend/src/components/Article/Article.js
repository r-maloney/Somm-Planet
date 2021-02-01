import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../store/article";
import { Modal } from "../../context/Modal";
import EditArticleModal from "./EditArticleModal";
import DeleteModal from "./DeleteModal";
import "./Article.css";

const Article = ({ country }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editArticle, setEditArticle] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);

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
    if (user && articles) setIsLoaded(true);
  }, [user, articles]);

  useEffect(() => {
    if (articles) setIsLoaded(true);
  }, [articles, user]);

  const handleEdit = (e) => {
    const article = e.target.value;
    setEditArticle((id) => article);
    setEditMode((p) => !p);
  };

  const handleDelete = (e) => {
    const article = e.target.value;
    setEditArticle((id) => article);
    setDeleteModal((e) => !e);
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
                  <>
                    <button value={article.id} onClick={handleEdit}>
                      Edit
                    </button>
                    <button value={article.id} onClick={handleDelete}>
                      Delete
                    </button>
                  </>
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
          </div>
        ))}
      {editMode && (
        <Modal onClose={() => setEditMode(false)}>
          <EditArticleModal
            id={editArticle}
            user={user}
            setIsLoaded={setIsLoaded}
            setEditMode={setEditMode}
          />
        </Modal>
      )}
      {deleteModal && (
        <Modal onClose={() => setDeleteModal(false)}>
          <DeleteModal setDeleteModal={setDeleteModal} id={editArticle} />
        </Modal>
      )}
    </div>
  );
};

export default Article;
