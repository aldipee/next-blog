import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "../libs/utils/string";
const ItemHorizontalPost = ({ data, ...props }) => {
  const { tag_list, title, description, cover_image, user, social_image } = data;
  return (
    <div class="mb-4 d-flex justify-content-between item-container">
      <div class="pr-3 pl-m-3">
        <h2 class="mb-1 h4 font-weight-bold">
          <Link href={`/articles/${data.slug}-${data.id}`}>
            <a className="text-dark">{title}</a>
          </Link>
        </h2>
        <p className="desc-overview">{description}</p>
        <div class="card-text text-muted small">
          In category {tag_list?.[0] && capitalizeFirstLetter(tag_list?.[0])}
        </div>

        <small class="text-muted">{`${dayjs(data?.published_timestamp).format("DD MMM")} · ${
          data?.reading_time_minutes
        } min read`}</small>
      </div>
      <img className="cover-image" height="120" src={cover_image ? cover_image : social_image} />
    </div>
  );
};

export default ItemHorizontalPost;
