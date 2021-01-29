import { useDispatch } from "react-redux";
import { postArticle } from "../../store";

const ArticleForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postArticle());
  };

  return (
    <>
      <h2>Have something to share? Post an article here!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input></input>
        </div>
        <div>
          <label>Body</label>
          <input></input>
        </div>
        <div>
          <label>Link Image *Optional*</label>
          <input></input>
        </div>
        <button type='submit'>Create Article</button>
      </form>
    </>
  );
};

export default ArticleForm;
