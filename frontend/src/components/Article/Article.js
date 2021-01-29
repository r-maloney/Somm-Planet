import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../store/article";
import "./Article.css";
import ArticleForm from "../ArticleForm";

const Article = (country) => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => Object.values(state.article));

  useEffect(() => {
    dispatch(getArticles()); //NEED TO INCLUDE USER IN FETCH
  }, [dispatch]);

  return (
    <div className='country-articles'>
      <ArticleForm />{" "}
      {
        //INCLUDE USER AS PROPS}
      }
      <h2>What people are saying about COUNTRY.NAME</h2>
      {articles &&
        articles.map((article) => (
          <div key={article.id} className='country-article'>
            <div className='country-article__user'>
              <div className='country-article__user-avatar'>USER AVATAR</div>
              <p>USER NAME</p>
            </div>
            <div className='country-article__article'>
              <p className='country-article__date'>
                Published on:{" "}
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

// div(class="user-reviews")
//   div(class="user-reviews__new")

//   h2 What people are saying about #{spot.name}
//     ion-icon(name="chatbox")
//   div(class="user-reviews__list")
//     each review in spot.Reviews
//       div(class="user-review")
//         div(class="user-review__user")
//           div(class="user-review__avatar")=review.User.username.slice(0,1).toUpperCase()
//           p=review.User.username
//         div(class="user-review__review")
//           div(class="user-review__rating")=review.stars
//           p(class="user-review__date")= `Reviewed on: ${new Date(Date.parse(review.createdAt)).toDateString()}`
//           h3(class="user-review__title")=review.title
//           p(class="user-review__body")=review.body

export default Article;
