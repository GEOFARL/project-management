import { GET_CLIENTS } from '../queries/clientQueries';
import ClientsRow from './ClientsRow';

import { useQuery } from '@apollo/client';
import Spinner from './Spinner';

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(data);

  if (loading) return <Spinner />;

  if (error) return <div>Something went wrong!</div>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientsRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
