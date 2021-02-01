import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateArticle } from "../../store/article";
import { useEffect, useState } from "react";
import "../ArticleFormModal/ArticleFormModal.css";
import { getCountries } from "../../store/country";

const EditArticleModal = ({ article, user, setIsLoaded }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(article.title || "");
  const [body, setBody] = useState(article.body || "");
  const [imgUrl, setImgUrl] = useState(article.imgUrl || "");
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const { countryId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoaded(false);

    if (!user) {
      setErrors((errors) => [...errors, "Must be signed in to create story."]);
      return;
    }
    if (!title) {
      setErrors((errors) => [...errors, "Please include a title."]);
    }
    if (!body) {
      setErrors((errors) => [...errors, "Please include a body."]);
    }
    if (errors.length > 0) {
      return;
    }
    const articleObj = {
      id: article.id,
      countryId,
      userId: user.id,
      body,
      imgUrl,
      title,
    };
    dispatch(updateArticle(articleObj));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <>
      <form onSubmit={handleSubmit} className='article__form'>
        <h2 className='article__header'>Share your thoughts</h2>
        <ul className='article__errors-list'>
          {errors.map((error, idx) => (
            <li className='article__error' key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div className='article__form-group'>
          <label className='article__label'>Title</label>
          <input
            className='article__input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className='article__form-group'>
          <label className='article__label'>Body</label>
          <textarea
            type='text'
            className='article__textarea'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className='article__form-group'>
          <label className='article__label'>Link Image *Optional*</label>
          <input
            className='article__input'
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          ></input>
        </div>
        <button className='article-form__button' type='submit'>
          Update Story
        </button>
      </form>
    </>
  );
};

export default EditArticleModal;
