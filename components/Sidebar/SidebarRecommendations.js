import React from "react";
import Link from "next/link";

import { capitalizeFirstLetter } from "../../libs/utils/string";

const SidebarRecommendations = (props) => {
  const { data } = props;

  if(!data.length) return null
  return (
    <React.Fragment>
      <div class="col-md-4 pl-4">
        <h5 class="font-weight-bold spanborder">
          <span>Popular</span>
        </h5>
        <ol class="list-featured">
          {data?.map((item, index) => (
            <li>
              <span>
                <Link href={`/articles/${item.slug}-${item.id}`} key={`${item.slug}-${item.id}`}>
                  <h6 style={{ cursor: "pointer" }} class="font-weight-bold">
                    <a class="text-dark">{item?.title}</a>
                  </h6>
                </Link>
                <p class="text-muted">In {capitalizeFirstLetter(item?.tag_list?.[0] || "Blog")}</p>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
};

export default SidebarRecommendations;
