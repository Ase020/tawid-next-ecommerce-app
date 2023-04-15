import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProduct() {
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const { id } = router.query;
  const goBack = () => {
    router.push("/products");
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=${id}`).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);

  const deleteProduct = async () => {
    await axios.delete(`/api/products?id=${id}`);
    goBack();
  };

  return (
    <Layout>
      <h1 className="text-center">
        Delete product&nbsp;"{productInfo?.title}"?
      </h1>
      <div className="flex gap-2 justify-center">
        <button onClick={deleteProduct} className="btn-red font-bold">
          YES
        </button>
        <button onClick={goBack} className="btn-default font-bold">
          NO
        </button>
      </div>
    </Layout>
  );
}
