import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../spinner/spinner";
import axios from "axios";
import "./list-item.css";

const ListItem = () => {
  const edit = <FontAwesomeIcon icon={faEdit} size="2x" />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} size="2x" />;

  const [post, setPost] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removePost = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>

      {post && (
        <div className="flex justify-center mt-20">
          <div className="card md:w-7/12 flex flex-col mt-20">
            <li className="badge">{post.id}</li>
            <h2 className="card-title ">{post.title}</h2>
            <p className="text-base text-indigo-900 ">{post.body}</p>

            <div className="flex justify-end my-5">
              <Link className="btn-icons" to={`/UpdateItem/${post.id}`}>
                {edit}
              </Link>

              <h2 className="btn-icons" onClick={removePost}>
                <Link to="/"> {remove}</Link>
              </h2>
            </div>
          </div>
        </div>
      )}
 
    </div>
  );
};

export default ListItem;
