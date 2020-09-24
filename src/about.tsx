import React from 'react';
import { render } from 'react-dom';

const About = (): JSX.Element => {
  return (
    <div>
      <h1>About This...</h1>
      <p>
        This was created with react, TypeScript, and Webpack!.
      </p>
    </div>
  );
}

render(React.createElement(About), document.getElementById('about-root'));
