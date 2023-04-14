import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm({
  _id,
  title: prevTitle,
  price: prevPrice,
  description: prevDescription,
}) {
  const [title, setTitle] = useState(prevTitle || "");
  const [description, setDescription] = useState(prevDescription || "");
  const [price, setPrice] = useState(prevPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  //   const [product, setProduct] = useState({
  //     title: "",
  //     description: "",
  //     price: "",
  //   });
  const productData = { title, description, price };

  const handleSubmit = async (e) => {
    e.preventDefault();

    _id
      ? // Update the product
        await axios.put("/api/products", { ...productData, _id })
      : // Create a new product
        await axios.post("/api/products", productData);

    setGoToProducts(true);
  };

  goToProducts && router.push("/products");
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
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

      <button className="btn-primary w-1/3 mt-4 mx-auto" type="submit">
        Save
      </button>
    </form>
  );
}
