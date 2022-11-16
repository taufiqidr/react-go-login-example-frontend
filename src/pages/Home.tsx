import React from "react";

interface Props {
  name: string;
}
//
const Home = ({ name }: Props) => {
  return (
    <div>
      <h1>{name ? "Hi " + name : "You are not logged in"}</h1>
    </div>
  );
};

export default Home;
