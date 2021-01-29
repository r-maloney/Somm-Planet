import { useDispatch, useSelector } from "react-redux";
import { postArticle } from "../../store/article";
import { useState } from "react";

const ArticleForm = (country) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleObj = {
      regionId: 1,
      userId: user.id,
      body,
      imgUrl,
      title,
    };
    dispatch(postArticle(articleObj));
  };

  return (
    <>
      <h2>Have something to share? Post an article here!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Body</label>
          <input value={body} onChange={(e) => setBody(e.target.value)}></input>
        </div>
        <div>
          <label>Link Image *Optional*</label>
          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          ></input>
        </div>
        <button type='submit'>Create Article</button>
      </form>
    </>
  );
};

export default ArticleForm;
