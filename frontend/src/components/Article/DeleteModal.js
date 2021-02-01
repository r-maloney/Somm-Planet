import { useHistory } from "react-router-dom";
import { deleteArticle } from "../../store/article";
import { useDispatch } from "react-redux";

const DeleteConfirmation = ({ id, setDeleteModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const delArticle = () => {
    dispatch(deleteArticle(id));
    history.push("/articles");
  };

  const closeModal = () => {
    setDeleteModal(false);
  };

  return (
    <div>
      <h3>Would you like to delete this story?</h3>
      <button onClick={delArticle}>Yes</button>
      <button onClick={closeModal}>No</button>
    </div>
  );
};

export default DeleteConfirmation;
