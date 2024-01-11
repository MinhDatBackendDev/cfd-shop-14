import PATHS from "@constants/paths";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainLayout = lazy(() => import("@layouts/MainLayout"));
const HomePage = lazy(() => import("@pages/HomePage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const BlogPage = lazy(() => import("@pages/BlogPage"));
const BlogSinglePage = lazy(() => import("@pages/BlogSinglePage"));
const CartPage = lazy(() => import("@pages/CartPage"));
const CheckoutPage = lazy(() => import("@pages/CheckoutPage"));
const CheckoutSuccessPage = lazy(() => import("@pages/CheckoutSuccessPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const DashboardPage = lazy(() => import("@pages/DashboardPage"));
const FaqPage = lazy(() => import("@pages/FaqPage"));
const PaymentMethodsPage = lazy(() => import("@pages/PaymentMethodsPage"));
const PrivacyPolicyPage = lazy(() => import("@pages/PrivacyPolicyPage"));
const ProductPage = lazy(() => import("@pages/ProductPage"));
const ProductDetailPage = lazy(() => import("@pages/ProductDetailPage"));
const ReturnsPage = lazy(() => import("@pages/ReturnsPage"));
const ShippingPage = lazy(() => import("@pages/ShippingPage"));
const Page404 = lazy(() => import("@pages/Page404"));

const App = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
            <Route path={PATHS.BLOG.SINGLE} element={<BlogSinglePage />} />
            <Route path={PATHS.CART} element={<CartPage />} />
            <Route path={PATHS.CHECKOUT.INDEX} element={<CheckoutPage />} />
            <Route
              path={PATHS.CHECKOUT.SUCCESS}
              element={<CheckoutSuccessPage />}
            />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
            <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
            <Route path={PATHS.FAQ} element={<FaqPage />} />
            <Route path={PATHS.PAYMENT} element={<PaymentMethodsPage />} />
            <Route path={PATHS.PRIVACY} element={<PrivacyPolicyPage />} />
            <Route path={PATHS.PRODUCT.INDEX} element={<ProductPage />} />
            <Route
              path={PATHS.PRODUCT.DETAIL}
              element={<ProductDetailPage />}
            />
            <Route path={PATHS.RETURNS} element={<ReturnsPage />} />
            <Route path={PATHS.SHIPPING} element={<ShippingPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
