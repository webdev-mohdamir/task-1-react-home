import { formatViewCount } from "@/lib/formatViewCount";
import { EyeIcon } from "lucide-react";

const ViewBox = ({ count }: { count: number }) => {
  return (
    <div className="view_box text-center d-flex" style={{ gap: "8px" }}>
      <div className="view_icon">
        <EyeIcon color="#525252" />
      </div>
      <span
        className="view_count"
        style={{ fontSize: "14px", lineHeight: "2" }}
      >
        {formatViewCount(count)} views
      </span>
    </div>
  );
};

export default ViewBox;
