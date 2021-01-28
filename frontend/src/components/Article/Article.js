import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../store/article";

const Article = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => Object.values(state.article));
  console.log(articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <>
      <p>article</p>
      {articles &&
        articles.map((article) => (
          <>
            <p>{article.title}</p>
            <p>{article.body}</p>
          </>
        ))}
    </>
  );
};

export default Article;
