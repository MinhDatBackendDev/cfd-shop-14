import { MenuStyled } from "@components/StyledComponent";
import PATHS from "@constants/paths";
import { useMainContext } from "@contexts/MainContext";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderMiddle = () => {
  const { handleShowMobileMenu } = useMainContext();

  useEffect(() => {
    // Header Search Toggle
    var $searchWrapper = $(".header-search-wrapper"),
      $body = $("body"),
      $searchToggle = $(".search-toggle");

    $searchToggle.on("click", function (e) {
      $searchWrapper.toggleClass("show");
      $(this).toggleClass("active");
      $searchWrapper.find("input").focus();
      e.preventDefault();
    });

    $body.on("click", function (e) {
      if ($searchWrapper.hasClass("show")) {
        $searchWrapper.removeClass("show");
        $searchToggle.removeClass("active");
        $body.removeClass("is-search-active");
      }
    });

    $(".header-search").on("click", function (e) {
      e.stopPropagation();
    });

    // Sticky header
    var catDropdown = $(".category-dropdown"),
      catInitVal = catDropdown.data("visible");

    if ($(".sticky-header").length && $(window).width() >= 992) {
      var sticky = new Waypoint.Sticky({
        element: $(".sticky-header")[0],
        stuckClass: "fixed",
        offset: -300,
        handler: function (direction) {
          // Show category dropdown
          if (catInitVal && direction == "up") {
            catDropdown
              .addClass("show")
              .find(".dropdown-menu")
              .addClass("show");
            catDropdown.find(".dropdown-toggle").attr("aria-expanded", "true");
            return false;
          }

          // Hide category dropdown on fixed header
          if (catDropdown.hasClass("show")) {
            catDropdown
              .removeClass("show")
              .find(".dropdown-menu")
              .removeClass("show");
            catDropdown.find(".dropdown-toggle").attr("aria-expanded", "false");
          }
        },
      });
    }

    // Menu init with superfish plugin
    if ($.fn.superfish) {
      $(".menu, .menu-vertical").superfish({
        popUpSelector: "ul, .megamenu",
        hoverClass: "show",
        delay: 0,
        speed: 80,
        speedOut: 80,
        autoArrows: true,
      });
    }

    // Add Mobile menu icon arrows to items with children
    $(".mobile-menu")
      .find("li")
      .each(function () {
        var $this = $(this);

        if ($this.find("ul").length) {
          $("<span/>", {
            class: "mmenu-btn",
          }).appendTo($this.children("a"));
        }
      });

    // Mobile Menu toggle children menu
    $(".mmenu-btn").on("click", function (e) {
      var $parent = $(this).closest("li"),
        $targetUl = $parent.find("ul").eq(0);

      if (!$parent.hasClass("open")) {
        $targetUl.slideDown(300, function () {
          $parent.addClass("open");
        });
      } else {
        $targetUl.slideUp(300, function () {
          $parent.removeClass("open");
        });
      }

      e.stopPropagation();
      e.preventDefault();
    });

    // Sidebar Filter - Show & Hide
    var $sidebarToggler = $(".sidebar-toggler");
    $sidebarToggler.on("click", function (e) {
      $body.toggleClass("sidebar-filter-active");
      $(this).toggleClass("active");
      e.preventDefault();
    });

    $(".sidebar-filter-overlay").on("click", function (e) {
      $body.removeClass("sidebar-filter-active");
      $sidebarToggler.removeClass("active");
      e.preventDefault();
    });

    // Clear All checkbox/remove filters in sidebar filter
    $(".sidebar-filter-clear").on("click", function (e) {
      $(".sidebar-shop").find("input").prop("checked", false);

      e.preventDefault();
    });
  }, []);

  return (
    <div className="header-middle sticky-header">
      <div className="container">
        <div className="header-left">
          <button
            className="mobile-menu-toggler"
            onClick={handleShowMobileMenu}
          >
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" />
          </button>
          <Link to={PATHS.HOME} className="logo">
            <img src="/assets/images/logo.svg" alt="Molla Logo" width={160} />
          </Link>
        </div>
        <nav className="main-nav">
          <MenuStyled className="menu">
            <li>
              <NavLink to={PATHS.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.PRODUCTS.INDEX}>Product</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.BLOG.INDEX}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
            </li>
          </MenuStyled>
        </nav>
        <div className="header-right">
          <div className="header-search">
            <a href="#" className="search-toggle" role="button" title="Search">
              <i className="icon-search" />
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper">
                <label htmlFor="q" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search in..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="dropdown cart-dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i className="icon-shopping-cart" />
              <span className="cart-count">2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-cart-products">
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Beige knitted</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $84.00{" "}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img
                        src="/assets/images/products/cart/product-1.jpg"
                        alt="product"
                      />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Blue utility</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $76.00{" "}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img
                        src="/assets/images/products/cart/product-2.jpg"
                        alt="product"
                      />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>
              </div>
              <div className="dropdown-cart-total">
                <span>Total</span>
                <span className="cart-total-price">$160.00</span>
              </div>
              <div className="dropdown-cart-action">
                <Link to={PATHS.CART} className="btn btn-primary">
                  View Cart
                </Link>
                <Link to={PATHS.CHECKOUT} className="btn btn-outline-primary-2">
                  <span>Checkout</span>
                  <i className="icon-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
