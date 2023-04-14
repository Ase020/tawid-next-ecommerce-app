// import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  //   const [product, setProduct] = useState({
  //     title: "",
  //     description: "",
  //     price: "",
  //   });

  return (
    <Layout>
      <h1>New Product</h1>
      {/* <ProductForm /> */}
      <div className="flex flex-col">
        <label>Product name</label>
        <input
          type="text"
          placeholder="iPhone 14 Pro Max"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Product description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Price ($)</label>
        <input
          type="number"
          placeholder="Product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="btn-primary w-1/3 mt-4 mx-auto">Save</button>
      </div>
    </Layout>
  );
}
