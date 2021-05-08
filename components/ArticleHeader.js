import React from "react";
import Navbar from "../components/Navbar/index";
import { VerticalShareButton } from "../components/ShareButton";
function ArticleHeader({ data, ...props }) {
  const { title, cover_image, readable_publish_date } = data;
  return (
    <>
      <Navbar.Menu />
      <section class=" text-green-900 relative">
        <div className="flex flex-col-reverse lg:min-h-screen lg:flex-row">
          <div class="bg-transparent lg:w-6/12  relative container mx-auto p-4 flex items-center z-10">
            <div class="content float-left py-4 px-5 my-5">
              <div class="text leading-normal hidden sm:block font-titleHomeMedium px-2 text-xl text-black">
                {readable_publish_date}, 2021
              </div>
              <h1 className="absolute text-2xl leading-normal font-titleHome lg:w-196 md:text-4xl text-primaryBlue lg:text-6xl">
                <span className="bg-white">{title}</span>
                {/* <span>{title}</span> */}
                <VerticalShareButton />
              </h1>

              {/* <div class="heading mb-3 text-2xl md:text-4xl">{title}</div> */}
            </div>
          </div>
          <div
            class="h-64 lg:min-h-screen lg:w-6/12  lg:hero-image bg-right-bottom bg-cover flex  "
            style={{
              backgroundImage: `url(${cover_image})`,
            }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default ArticleHeader;
