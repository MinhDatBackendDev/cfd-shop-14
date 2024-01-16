import scrollTop from "@utils/scrollTop";
import React, { useEffect } from "react";

const BackToTopButton = () => {
  useEffect(() => {
    const $scrollTop = $("#scroll-top");
    $(window).on("load scroll", function () {
      if ($(window).scrollTop() >= 400) {
        $scrollTop.addClass("show");
      } else {
        $scrollTop.removeClass("show");
      }
    });
  }, []);

  return (
    <button
      id="scroll-top"
      title="Back to Top"
      onClick={(e) => {
        scrollTop(e);
      }}
    >
      <i className="icon-arrow-up" />
    </button>
  );
};

export default BackToTopButton;
