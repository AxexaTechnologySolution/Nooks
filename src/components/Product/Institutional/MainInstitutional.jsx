import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // Ensure 'db' is correctly imported
import { Link } from "react-router-dom";


function InstitutionalProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch Institutional Products
        const institutionalSnapshot = await getDocs(
          collection(db, "institutionalProducts")
        );
        const institutionalProducts = institutionalSnapshot.docs.map((doc) => ({
          id: doc.id,
          type: "Institutional",
          ...doc.data(),
        }));

        // Fetch Office Products
        const officeSnapshot = await getDocs(collection(db, "officeProducts"));
        const officeProducts = officeSnapshot.docs.map((doc) => ({
          id: doc.id,
          type: "Office",
          ...doc.data(),
        }));

        // Merge both collections
        setProducts([...institutionalProducts, ...officeProducts]);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  if (error)
    return (
      <div className="flex h-[80vh] justify-center items-center ">
        <div className="lg:text-2xl text-xl">{error}</div>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {product.imageUrl ? (
              <div className="w-full h-48 mb-4 flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            ) : (
              <div className="w-full h-48 mb-4 bg-gray-200 rounded-lg flex items-center justify-center text-center">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
            <h3 className="text-xl font-medium mb-2">{product.name}</h3>
            {/* <p className="text-gray-500 text-sm mb-2">{product.type} Product</p> */}
            <Link
              to={`${
                product.type === "Office"
                  ? `/office-products/${product.id}`
                  : `/products/${product.id}`
              }`}
              className="text-green-500 hover:text-green-700"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstitutionalProducts;
