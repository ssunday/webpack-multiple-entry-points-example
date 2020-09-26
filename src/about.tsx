import React from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';

const About = (): JSX.Element => {
  return (
    <div>
      <h1>About This...</h1>
      <p>
        This was created with react, TypeScript, and Webpack!.
      </p>
      <Footer />
    </div>
  );
}

render(React.createElement(About), document.getElementById('about-root'));
