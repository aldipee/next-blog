import React from "react";
import ItemHorizontalPost from "./ItemHorizontalPost";
import CardLayout from "./CardLayout";
import { SidebarQuote, SidebarRecommendations } from "./Sidebar";

const Navbar = ({ data, ...props }) => {
  const recommendationsData = data?.filter((item) => item.tag_list.includes("recommendation"));
  const renderPost = (posts) => {
    return (
      !!posts.length &&
      posts.map((itemPost, index) => {
        return <ItemHorizontalPost data={itemPost} key={itemPost.id} />;
      })
    );
  };

  return (
    <div className="col-md-8 col-sm-12">
      <h5 class="font-weight-bold spanborder">
        <span>All Stories</span>
      </h5>
      {renderPost(data)}
    </div>
  );
};

export default Navbar;
