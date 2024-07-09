import React, { useState } from "react";
import { articles } from "../../data/articleList";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [articlesArrye, setArticlesArrye] = useState(articles);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (searchInput != "") {
            navigate("/?articleName=" + searchInput);
            setArticlesArrye(
              articles.filter((a) =>
                a.title.toLowerCase().includes(searchInput.toLowerCase())
              )
            );
          } else {
            setArticlesArrye(articles);
          }
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {articlesArrye.map((a) => {
          return (
            <li key={a.id}>
              <p>{a.title}</p>
              <Link to={"/Article/" + a.id}>Detail</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
