import React, { useState } from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";
function CreateProject(props) {
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  const [posts, setPosts] = useState({
    id: 0,
    title: "",
    description: "",
    images: { normal: "" },
  });
  console.log(projectsData);
  function handleSubmit(e) {
    e.preventDefault();
    setProjeData([posts, ...projectsData]);
  }
  console.log(setPosts);

  return (
    <div id='createProject'>
      <form onSubmit={handleSubmit} >
        <input
        className="create-title"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setPosts({
              ...posts,
              title: e.target.value,
            });
          }}
        ></input>
        <input
         className="create-description"
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setPosts({
              ...posts,
              description: e.target.value,
            });
          }}
        ></input>
        <input
        className="create-image"
          type="url"
          placeholder="Enter image url"
          onChange={(e) => {
            setPosts({
              ...posts,
              images: { normal: e.target.value },
            });
          }}
        ></input>
        <button
          onClick={() => {
            setPosts({
              ...posts,
              id: `${Math.floor(Math.random() * Math.pow(10, 8))}`,
            });
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
