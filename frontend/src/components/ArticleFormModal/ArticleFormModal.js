import { useDispatch, useSelector } from "react-redux";
import { postArticle } from "../../store/article";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import "./ArticleFormModal.css";

const ArticleFormModal = (country) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const user = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleObj = {
      regionId: 1,
      userId: user.id || 1,
      body,
      imgUrl,
      title,
    };
    dispatch(postArticle(articleObj));
  };

  return (
    <>
      <h2>Have a story to tell? Just love wine?</h2>
      <button
        className='article-form__button article__model-button'
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
              Create Article
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ArticleFormModal;
