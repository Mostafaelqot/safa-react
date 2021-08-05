import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../context/postsContext";

const List = () => {
  const { posts } = useContext(PostsContext);
  const [searchValue, setSearchValue] = useState("");
  const [itemsList, setItems] = useState(posts);

  let time;

  const startSearch = (e) => {
    time = setTimeout(() => {
      const result = posts.filter((item) => {
        return item.title.toUpperCase().includes(searchValue.toUpperCase());
      });
      setItems(result);
      
      result.forEach((item) => {
        let elem = document.getElementById(item.id);
        elem.innerHTML = item.title.replaceAll(
          searchValue,
          `<span class="text-gray-900 font-bold ">${searchValue}</span>`
        );
      });

    }, 500);
  };

  const clearSearch = () => {
    clearTimeout(time);
  };

  return (
    <>
      <div className="text-center">
        <input
          onKeyDown={clearSearch}
          onKeyUp={startSearch}
          placeholder="Search by title"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className="card search"
          required
        />
      </div>

      {itemsList.length === 0 && (
        <h2 className="text-4xl text-primairy my-8  font-semibold text-center">
          No posts with this title
        </h2>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3   gap-5 ">
        {itemsList.map((item) => (
          <div className="card" key={item.id}>
            <li className="badge">{item.id}</li>
            <h2 className="card-title ">
              <Link to={`/ListItem/${item.id}`} id={item.id}>
                {item.title}
              </Link>
            </h2>
            <p className="text-base text-indigo-900 ">{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
