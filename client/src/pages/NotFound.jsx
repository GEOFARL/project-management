import { FaTriangleExclamation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaTriangleExclamation className="text-danger" size={'5em'} />
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exists</p>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
