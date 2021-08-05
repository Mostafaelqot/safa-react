import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";

const UpdateItem = () => {
  let sending = false;
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handelSubmit = (e) => {
    sending = true;
    e.preventDefault();
    const updatedPost = { title, body };
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost)
      .then((res) => {
        console.log(res);
        sending = false;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className=" text-3xl md:text-5xl text-primairy my-8  font-semibold text-center">
        Update Post
      </h2>

      <form className=" grid justify-items-center " onSubmit={handelSubmit}>
        <input
          className="card search"
          type="text"
          required
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          className="card search"
          cols="30"
          rows="10"
          placeholder="Enter Post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="flex my-4 ">
          <button className="update-btn" type="submit">
            Update
          </button>

          <Link className="back-btn text-center" to={`/ListItem/${id}`}>
            Back
          </Link>
        </div>
        {sending && <Spinner></Spinner>}
      </form>
    </div>
  );
};

export default UpdateItem;
