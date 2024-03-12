import React from "react";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

        <input type="checkbox" className="dark-light-btn" />
        <span className="dark-light-btn"></span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aliquid ullam dolorem unde quam perspiciatis amet consectetur officiis
          pariatur nemo est, quibusdam vel consequatur mollitia possimus libero
          natus at fugiat!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aliquid ullam dolorem unde quam perspiciatis amet consectetur officiis
          pariatur nemo est, quibusdam vel consequatur mollitia possimus libero
          natus at fugiat!
        </p>
      </div>
    </React.Fragment>
  );
};
export default Home;
