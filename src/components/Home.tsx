import React, { FC, useEffect, useRef } from 'react';

const Home:FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    homeRef.current?.classList.remove('closed');
  });

  return (
    <div id="home-component" className="closed" ref={homeRef}>
      <h1>Varano Development</h1>
      <h3>Web development on React and Ruby on Rails</h3>
    </div>
  );
};

export default Home;
