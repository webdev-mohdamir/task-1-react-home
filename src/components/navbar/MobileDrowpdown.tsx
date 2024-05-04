import { toTitleCase } from "@/lib/titleCaseConverter";
import { Post } from "@/types/post.type";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

interface MobileDropdownProps {
  posts: Post[];
  post_types: string[];
  selectedType: string;
  handleSelect: (event: React.MouseEvent<HTMLSpanElement>) => void;
  handleOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MobileDropdown = ({
  posts,
  post_types,
  selectedType,
  handleSelect,
  handleOnChange,
}: MobileDropdownProps) => {
  return (
    <>
      <span className={`active d-block d-sm-none`}>
        Posts {`(${posts.length})`}
      </span>
      <div className="span-view gap-4 d-none d-sm-flex">
        {post_types.map((type) => (
          <span
            key={type}
            className={selectedType === type ? "active" : ""}
            data-value={type}
            onClick={handleSelect}
          >
            {type && toTitleCase(type)}
          </span>
        ))}
      </div>

      <div className="dropdown-view d-block d-sm-none">
        <Dropdown as={ButtonGroup} className="mobile_filter">
          <Button variant="success">
            Filter: {selectedType && toTitleCase(selectedType)}
          </Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu onChange={handleOnChange}>
            <Dropdown.Item>
              <option value="all" data-value="all" onClick={handleSelect}>
                All
              </option>
            </Dropdown.Item>
            {post_types.map((type) => (
              <Dropdown.Item key={type}>
                <option value={type} data-value={type} onClick={handleSelect}>
                  {type && toTitleCase(type)}
                </option>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default MobileDropdown;
