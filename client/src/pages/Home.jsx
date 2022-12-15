import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = ({ user }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user.username}/repos?per_page=5&sort=updated`
      );
      const data = await res.json();
      setItems(data);
      console.log(data);
    };

    fetchRepos();
  }, [user]);

  console.log(items);

  return (
    <div className="home">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
