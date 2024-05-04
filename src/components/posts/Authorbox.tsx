import { Author } from "@/types/post.type";

const AuthorBox = ({ name, image_src }: Author) => {
  return (
    <div className="author d-flex justify-content-between align-items-center">
      <div className="author_img">
        <img src={`src/assets/images/avatar/${image_src}`} alt={name} />
      </div>

      <div className="author_details">
        <h3 className="author_name">{name}</h3>
      </div>
    </div>
  );
};

export default AuthorBox;
