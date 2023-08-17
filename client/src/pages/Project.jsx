import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';

const Project = () => {
  const { projectId } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: projectId,
    },
  });

  if (loading) return <Spinner />;

  if (error) return <div>Error :(</div>;

  console.log(data);

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link className="btn btn-light btn-sm w-25 d-inline ms-auto" to="/">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          {data.project.client && <ClientInfo client={data.project.client} />}

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
