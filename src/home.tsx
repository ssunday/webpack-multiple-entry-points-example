import React from 'react';
import { render } from 'react-dom';

const Home = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <h1>Home page</h1>
      <p>My count is {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

render(React.createElement(Home), document.getElementById('home-root'));
