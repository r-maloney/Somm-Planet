import { fetch } from "./csrf";

const SET_ARTICLES = "articles/SET_ARTICLES";
const ADD_ARTICLE = "articles/ADD_ARTICLE";

const setArticles = (payload) => ({
  type: SET_ARTICLES,
  payload,
});

const addArticle = (payload) => ({
  type: ADD_ARTICLE,
  payload,
});

export const getArticles = () => async (dispatch) => {
  const res = await fetch("/api/articles");
  if (res.ok) {
    const articles = res.data;
    dispatch(setArticles(articles));
  }
};

export const postArticle = (article) => async (dispatch) => {
  const res = await fetch("/api/articles", {
    method: "POST",
    body: JSON.stringify(article),
  });
  if (res.ok) {
    const article = res.data;
    dispatch(addArticle(article));
    return res;
  }
};

export const updateArticle = ({ id, title, body, imgUrl }) => async (
  dispatch
) => {
  debugger;
  const article = { title, body, imgUrl };

  const res = await fetch(`/api/articles/${id}`, {
    method: "PUT",
    body: JSON.stringify(article),
  });
  if (res.ok) {
    const article = res.data;
    dispatch(addArticle(article));
    return res;
  }
};

const initState = {};

const articleReducer = (state = initState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_ARTICLES:
      for (let article of action.payload) {
        newState[article.id] = article;
      }
      return newState;
    case ADD_ARTICLE:
      const { article } = action.payload;
      debugger;
      newState[article.id] = article;
      return newState;
    default:
      return state;
  }
};

export default articleReducer;
