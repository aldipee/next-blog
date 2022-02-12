import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

import { capitalizeFirstLetter } from "../../libs/utils/string";

function PopularPosts(props) {
  const { data } = props;
  console.log(data, "PopularPost");
  const featured = data?.[0];
  data.shift();
  return (
    <div class="container pt-4 pb-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="card border-0 mb-4 box-shadow h-xl-300">
            <div
              style={{
                backgroundImage: `url(${featured?.cover_image})`,
                height: 150,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
              <h2 class="h4 font-weight-bold">
                <Link href={`/articles/${featured.slug}-${featured.id}`}>
                  <a class="text-dark">{featured?.title}</a>
                </Link>
              </h2>
              <p class="card-text">{featured?.description}</p>
              <div>
                <small class="d-block">
                  <a class="text-muted" href="./author.html">
                    by <b>{featured?.user?.name}</b>
                  </a>
                </small>
                <small class="text-muted">{`${dayjs(featured?.published_timestamp).format("DD MMM")} · ${
                  featured?.reading_time_minutes
                } min read`}</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          {data?.map((item) => (
            <div class="flex-md-row mb-4 box-shadow">
              <div class="mb-3 d-flex align-items-center">
                <img className="cover-image" height="80" src={item?.cover_image} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link href={`/articles/${item.slug}-${item.id}`}>
                      <a class="text-dark">{item.title}</a>
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">{capitalizeFirstLetter(item?.tag_list?.[0])}</div>
                  <small class="text-muted">{`${dayjs(item?.published_timestamp).format("DD MMM")} · ${
                    item?.reading_time_minutes
                  } min read`}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularPosts;
