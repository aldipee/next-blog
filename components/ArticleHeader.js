import React from "react";
import Navbar from "../components/Navbar/index";
function ArticleHeader({ title, author, publishedDate, category, readTimes, bannerImage }) {
  return (
    <>
      <Navbar.Menu />
      <div class="container">
        <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div class="h-100 tofront">
            <div class="row justify-content-between">
              <div class="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                <p class="text-uppercase font-weight-bold">
                  <a class="text-danger">{category}</a>
                </p>
                <h1 class="display-4 secondfont mb-3 font-weight-bold">{title}</h1>

                <div class="d-flex align-items-center">
                  <small>
                    {author}{" "}
                    <span class="text-muted d-block">
                      {publishedDate} · {readTimes} min. read
                    </span>
                  </small>
                </div>
              </div>
              <div class="col-md-6 pr-0">
                <img src={bannerImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleHeader;
