import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa6';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';

const ClientsRow = ({ client }) => {
  const [deleteClient, { data, loading, error }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENTS }],
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
      });
    },
  });

  return (
    <>
      {!loading && !error && (
        <tr key={client.id}>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>{client.phone}</td>
          <td>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
              <FaTrash />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default ClientsRow;
