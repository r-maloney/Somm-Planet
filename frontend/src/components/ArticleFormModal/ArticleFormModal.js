import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postArticle } from "../../store/article";
import { Modal } from "../../context/Modal";
import { useEffect, useState } from "react";
import "./ArticleFormModal.css";
import { getCountries } from "../../store/country";

const ArticleFormModal = ({ country }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const articleObj = {
      regionId: 1,
      userId: user.id || 1,
      body,
      imgUrl,
      title,
    };
    const res = await dispatch(postArticle(articleObj));
    // if (res.data && res.data.errors) setErrors(res.data.errors);
    // else history.push(`/`);
    history.push(`/countries/${country.id}`);
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <h2>Have a story to tell? Just love wine?</h2>
      <button
        className='article-model__button'
        onClick={() => setShowModal(true)}
      >
        Tell us here!
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
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
              Create Story
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ArticleFormModal;
