import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [resp, setResp] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/polka');
      const newDate = await res.text();
      setResp(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h2>The serverless function response is:</h2>
      <p>{resp ? resp : 'Loading response...'}</p>

      <br />

      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless.
      </p>
    </main>
  );
}

export default App;
