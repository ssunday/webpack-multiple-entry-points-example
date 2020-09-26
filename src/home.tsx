import React from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';
import Counter from './components/Counter';

const Home = (): JSX.Element => {

  return (
    <div>
      <h1>Home page</h1>
      <Counter />
      <Footer />
    </div>
  );
}

render(React.createElement(Home), document.getElementById('home-root'));
