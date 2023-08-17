import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { FaTrash } from 'react-icons/fa6';

const DeleteProjectButton = ({ projectId }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
  });
  const navigate = useNavigate();

  const onClick = async () => {
    await deleteProject();
    navigate('/');
  };

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={onClick}>
        <FaTrash className="icon" size={'1rem'} /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
