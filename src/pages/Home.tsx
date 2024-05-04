import PostImg1 from "@/assets/images/posts/post-1.png";
import Header from "@/components/header/Header";
import RactagnleBtn from "@/components/ui/buttons/RactangleBtn";
import posts from "@/data/post-data.json";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import downDownIcon from "@/assets/images/icons/baseline-arrow_drop_down-24px.svg";
import groupAddIcon from "@/assets/images/icons/baseline-group_add-24px.svg";
import exitIcon from "@/assets/images/icons/exit-24.svg";
import Posts from "@/components/posts/Posts";
import { Post } from "@/types/post.type";
import LocationWidget from "@/components/ui/sidebar/LocationWidget";
import MobileDropdown from "@/components/navbar/MobileDrowpdown";
import useAuth from "@/components/context/useAuth";
import RecommenedGroup from "@/components/recommened/RecommenedGroup";

const Home = () => {
  const [postData, setPostData] = useState<Post[]>(posts as []);

  const post_types = [...new Set(posts.map((post) => post.type))];

  const [selectedType, setSelectedType] = useState("all post");
  const mainTagRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();

  useEffect(() => {
    // Scroll to the referenced element
    if (mainTagRef.current) {
      mainTagRef.current.scrollIntoView({
        behavior: "smooth", // Optional: for smooth scrolling
        block: "start", // Aligns the top of the element with the top of the viewport
      });
    }
  }, [selectedType]);

  const filterPosts = ({ posts, type }: { posts: Post[]; type: string }) => {
    return posts.filter((post) => post.type === type);
  };

  const handleSelect = (e: MouseEvent<HTMLSpanElement>) => {
    const { target } = e;

    const targetWithDataset = target as HTMLSpanElement & {
      dataset: { value: string };
    };

    const type = targetWithDataset.dataset.value;
    setSelectedType(type);

    if (!type) return;

    mainTagRef && mainTagRef.current?.focus();

    if (type === "all") {
      return setPostData(posts as []);
    }

    setPostData(filterPosts({ posts: posts as [], type }));
  };

  return (
    <>
      <Header postImg={PostImg1} />

      <Container>
        <div className="pt-5 pb-4 d-block d-sm-flex justify-content-between sticky-sm-top bg-white">
          <div className="filter_option d-flex gap-4 justify-content-between">
            <span
              className={`${
                selectedType === "all" ? "active" : ""
              } d-none d-sm-block`}
              data-value="all"
              onClick={handleSelect}
            >
              All Posts {`(${posts.length})`}
            </span>

            <MobileDropdown
              posts={postData}
              post_types={post_types}
              selectedType={selectedType}
              handleSelect={handleSelect}
              handleOnChange={(e) => setSelectedType(e.target.value)}
            />
          </div>

          <div className="action_buttons d-flex align-items-center">
            <RactagnleBtn
              key={"create_post"}
              text="Create Post"
              className="gray_btn d-none d-md-block"
              icon={<img src={downDownIcon} alt="down" />}
              iconDirection="right"
            />

            {(!user.name && (
              <RactagnleBtn
                text="Join Group"
                className="group_btn blue_btn d-block"
                icon={
                  <img
                    src={groupAddIcon}
                    className="d-none d-sm-block"
                    alt="groupAddIcon"
                  />
                }
              />
            )) || (
              <RactagnleBtn
                text="Leave Group"
                className="group_btn stroke_btn d-block"
                icon={
                  <img
                    src={exitIcon}
                    className="d-none d-sm-block"
                    alt="groupAddIcon"
                  />
                }
              />
            )}
          </div>
        </div>
        {/* Divider */}
        <div className="divider"></div>

        <main ref={mainTagRef} className="mb-3 row justify-content-between">
          <Posts className="col-12 col-md-8" posts={postData} />
          <div className="sidebar col-sm-3 mt-4 position-sticky">
            <LocationWidget className="d-none d-md-block" />

            {user.name && <RecommenedGroup />}
          </div>
        </main>
      </Container>
    </>
  );
};

export default Home;
