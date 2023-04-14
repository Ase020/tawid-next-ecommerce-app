import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <Link
        href="/products/new"
        className="bg-green-500 text-white rounded-md py-1 px-2"
      >
        Add new product
      </Link>
    </Layout>
  );
};

export default Products;
