import { useQuery, gql } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(data);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!</div>;
  return <>{!loading && !error && <h1>Clients</h1>}</>;
};

export default Clients;
