import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
        voluptates. Aliquam, quibusdam. Voluptates, quas. Quisquam, quibusdam
        voluptates? Quod, quas. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quo, voluptates. Aliquam, quibusdam. Voluptates, quas.
      </p>
    </div>
  );
}
