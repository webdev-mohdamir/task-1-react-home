import thumbIcon from "@/assets/images/icons/twotone-thumb_up-24.svg";
import Button from "react-bootstrap/Button";
const dummyData = [
  {
    name: "Leisure",
    image_src: "r-1.png",
  },
  {
    name: "Activism",
    image_src: "r-2.png",
  },
  {
    name: "MBA",
    image_src: "r-3.png",
  },
  {
    name: "Philosophy",
    image_src: "r-4.png",
  },
];

const RecommenedGroup = () => {
  return (
    <div className="recommened_group">
      <div className="recommened_group_header d-flex justify-content-start gap-2 align-items-center mt-4">
        <img src={thumbIcon} alt="" />
        <h3 className="text-uppercase fs-6 mb-0">Recommended Groups</h3>
      </div>
      <ul className="recommened_group_items">
        {dummyData.map((item, index) => (
          <li
            key={index}
            className="d-flex align-items-center gap-3 justify-content-between mt-3"
          >
            <div className="d-flex gap-4 align-items-center">
              <img src={`../assets/images/avatar/${item.image_src}`} alt="" />
              <span className="fw-normal">{item.name}</span>
            </div>
            <Button className="follow_btn gray_btn icon_btn rounded-pill">
              Follow
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommenedGroup;
