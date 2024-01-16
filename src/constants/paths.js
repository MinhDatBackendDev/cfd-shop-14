const PRODUCT_PATH = "/products";
const BLOG_PATH = "/blogs";

const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: {
    INDEX: BLOG_PATH,
    SINGLE: BLOG_PATH + "/:slug",
  },
  CART: "/cart",
  CHECKOUT: {
    INDEX: "/checkout",
    SUCCESS: "/checkout-success",
  },
  CONTACT: "/contact",
  DASHBOARD: "/dashboard",
  FAQ: "/faq",
  PAYMENT: "/payment-methods",
  PRIVACY: "/privacy-policy",
  PRODUCTS: {
    INDEX: PRODUCT_PATH,
    DETAIL: PRODUCT_PATH + ":slug",
  },
  RETURNS: "/returns",
  SHIPPING: "/shipping",
};

export default PATHS;
