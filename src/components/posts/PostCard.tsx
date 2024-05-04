import { toTitleCase } from "@/lib/titleCaseConverter";
import { Post } from "@/types/post.type";
import Card from "react-bootstrap/Card";
import IconBtn from "../ui/buttons/IconBtn";
import threeDotImg from "@/assets/images/icons/dots.svg";
import { truncateDescription } from "@/lib/truncateDescription";
import AuthorBox from "./Authorbox";
import ViewBox from "./ViewBox";
import { Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostCard = (post: Post) => {
  const [showPostActions, setShowPostActions] = useState(false);

  if (!post) return null;

  const getTypeValue = (post: Post) => {
    switch (post.type) {
      case "event":
        return "🗓️ " + post.details.sub_type;
      case "job":
        return "💼 " + post.type;
      case "article":
        return "✍️ " + post.type;
      case "education":
        return "🔬 " + post.type;
    }
  };

  return (
    <Card
      style={{ maxWidth: "692px" }}
      className={`post-card ${post.type && post.type.toLowerCase()}`}
      id={post.post_id.toString()}
    >
      <Card.Img
        variant="top"
        src={`../assets/images/posts/${post.image_src}`}
      />

      <Card.Subtitle>{toTitleCase(getTypeValue(post))}</Card.Subtitle>

      <Card.Body>
        <div className="row justify-content-between gap-3">
          <Card.Title className="col-8">
            <Link to={`../posts/${post.post_id}`}>{post.title}</Link>
          </Card.Title>

          <IconBtn
            icon={<img src={threeDotImg} alt="three dot" />}
            className={`${showPostActions ? "active" : ""} py-3 post_edit_btn`}
            onclick={() => setShowPostActions(!showPostActions)}
          >
            {showPostActions ? (
              <ul className="post_actions d-flex flex-column">
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            ) : (
              <></>
            )}
          </IconBtn>
        </div>
        {post.description && (
          <Card.Text className="post_description">
            {truncateDescription(post.description)}
          </Card.Text>
        )}

        {(post.type === "event" || post.type === "job") && (
          <Button className={`post_actionBtn d-block w-100 ${post.type}`}>
            {post.type == "event" ? "View Details" : "Apply on Timesjobs"}
          </Button>
        )}

        <div
          className="d-flex align-items-center justify-content-between"
          style={{ marginTop: "32px" }}
        >
          <AuthorBox {...post.author} />
          <div className="post-meta d-flex justify-content-between align-items-center">
            <ViewBox count={post.view_count} />
            <IconBtn
              className="lg"
              icon={<Share2 color="#2D2D2D" />}
              text="Share"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
