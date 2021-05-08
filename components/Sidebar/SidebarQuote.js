import React from "react";

const SidebarQuote = (props) => {
  return (
    <div className="px-8">
      <sidebar className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border-b border-grey-light ">
        <div class="flex items-center justify-center">
          <div class="w-full mx-auto text-gray-800" style={{ maxWidth: 500 }}>
            <div class="w-full mb-4">
              <div class="text-3xl text-gray-500 text-left leading-tight h-3">“</div>
              <p class="text-lg text-gray-500 text-center px-3 font-body">
                You know you're in love when you can't fall asleep because reality is finally better than your dreams.
                <br />
                <span> - </span> <span className="text-sm italic">Dr. Seuss</span>
              </p>
              <p class="text-md text-indigo-500 font-bold text-center"></p>
              <div class="text-3xl text-gray-500 text-right leading-tight h-3 -mt-7">”</div>
            </div>
          </div>
        </div>
      </sidebar>
    </div>
  );
};

export default SidebarQuote;
