import { GENERAL_MESSAGE, HOME_MESSAGE } from "@constants/message";
import useMutation from "@hooks/useMutation";
import useQuery from "@hooks/useQuery";
import { pageService } from "@services/pageService";
import { productService } from "@services/productService";
import { subscribeService } from "@services/subscribeService";
import { message } from "antd";
import { useState } from "react";

const useHomePage = () => {
  const [selectedCateSlug, setSelectedCateSlug] = useState("all");

  // API Handling
  const { data: productsData } = useQuery(productService.getProducts);
  const products = productsData?.products || [];
  const featuredProducts =
    products?.filter((product) => product.featured) || [];
  const featureProducts =
    selectedCateSlug === "all"
      ? [...(products || [])]
      : products?.filter(
          (product) => product?.category?.slug === selectedCateSlug
        );
  const onSaleProducts = products?.filter((product) => product.onSale) || [];
  const topRatedProducts =
    products?.filter((product) => product.topRated) || [];
  const dealProducts = onSaleProducts.filter((product) => product.discount > 0);
  const { execute: dealExecute } = useMutation(subscribeService.subscribeDeal);

  const { data: homeData } = useQuery(() =>
    pageService.getPageDataByName("home")
  );
  const brands = homeData?.data?.brands || [];

  const services = homeData?.data?.information || {};

  const { data: categoriesData } = useQuery(productService.getCategories);
  const categories = categoriesData?.products || [];

  const handleSubscribeDeal = (email, callback) => {
    if (email) {
      dealExecute(email, {
        onSuccess: (data) => {
          message.success(HOME_MESSAGE.dealSuccess);
          callback?.();
        },
        onFail: (error) => {
          message.error(GENERAL_MESSAGE.error);
        },
      });
    }
  };

  // Intro Section
  const introProducts = featuredProducts.slice(0, 3);
  const introProps = {
    introProducts,
  };

  // Hot Product Section
  const hotProductProps = {
    featuredProducts,
    onSaleProducts,
    topRatedProducts,
  };

  // Deal Section
  const dealProps = {
    dealProducts,
  };

  // Brand Section
  const brandProps = {
    brands,
  };

  // Featured Section
  const featureProps = {
    categories: [{ name: "All", slug: "all" }, ...categories],
    featureProducts,
    selectedCateSlug,
    handleSelectCate: (slug) => setSelectedCateSlug(slug),
  };

  // Services Section
  const serviceProps = {
    services,
  };

  // Get Deal Section
  const getDealProps = {
    handleSubscribeDeal,
  };

  return {
    introProps,
    hotProductProps,
    dealProps,
    brandProps,
    featureProps,
    serviceProps,
    getDealProps,
  };
};

export default useHomePage;
