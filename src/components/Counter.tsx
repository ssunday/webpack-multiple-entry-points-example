import React from 'react';

const Counter = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <p>My count is {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
