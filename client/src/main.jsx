import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Project from './pages/Project.jsx';

const host = import.meta.env.VITE_APP_HOST || 'http://localhost:8080/graphql';

const client = new ApolloClient({
  uri: host,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge: (existing, incoming) => {
              return incoming;
            },
          },
          projects: {
            merge: (existing, incoming) => {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="projects/:projectId" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
