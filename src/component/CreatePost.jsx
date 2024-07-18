import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="row gy-2 gx-3 align-items-center createPost">
      <div className="">
        <label className="" htmlFor="autoSizingInputGroup">
          UserID
        </label>
        <div className="input-group">
          <div className="input-group-text">@</div>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="autoSizingInputGroup"
            placeholder="UserID"
          />
        </div>
      </div>
      <div className="">
        <label className="" htmlFor="autoSizingInput">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="autoSizingInput"
          placeholder="How are you feeling Today !!!"
        />
      </div>
      <div className="">
        <label className="" htmlFor="autoSizingInput">
          Post Content
        </label>
        <input
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="autoSizingInput"
          placeholder="Tell Us More"
        />
      </div>
      <div className="">
        <label className="" htmlFor="autoSizingInput">
          How Many Number of Peoples Reacted ?
        </label>
        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="autoSizingInput"
          placeholder="Tell Us More"
        />
      </div>
      <div className="">
        <label className="" htmlFor="autoSizingInput">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="autoSizingInput"
          placeholder="Please Enter Tags Leaving Space."
        />
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => handleSubmit(event)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default CreatePost;
