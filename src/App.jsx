import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fetch from "./Fetch";
import ProductDetails from "./ProductDetails";
import InstitutionalProductDetails from "./InstitureProductDetails";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./ProtectedRoute";
import AdminMain from "./pages/AdminPanel/AdminMain";
import InstitutionalCategory from "./pages/AdminPanel/InstitutionalCategory";
import OfficeCategory from "./pages/AdminPanel/OfficeCategory";
import InstitutionalProduct from "./pages/AdminPanel/InstitutionalProduct";
import OfficeProduct from "./pages/AdminPanel/OfficeProduct";
import IPImages from "./pages/AdminPanel/IPImages";
import OPImages from "./pages/AdminPanel/OPImages";
import ProductImagesPage from "./pages/ProductImagesPage";
import CategoryImages from "./pages/CategoryImages";
import NotFound from "./pages/NotFound";
import OfficeProductDetails from "./pages/OfficeProductDetails";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import InstitutionalProducts from "./components/Product/Institutional/MainInstitutional";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/products/:name" element={<InstitutionalProductDetails />} />
        <Route path="/office-products/:name" element={<OfficeProductDetails />} />
        <Route path="/category-images/:name/:id" element={<CategoryImages />} />
        <Route path="/products/details/:name" element={<ProductDetails />} />
        <Route path="/products" element={<InstitutionalProducts />} />

        {/* Corrected Duplicate NotFound Route */}
        <Route path="*" element={<NotFound />} />

        {/* Product Images */}
        <Route path="/institutional/:productId" element={<ProductImagesPage />} />
        <Route path="/office/:productId" element={<ProductImagesPage />} />

        {/* Categories */}
        <Route path="/institutional-category" element={<InstitutionalCategory />} />
        <Route path="/office-category" element={<OfficeCategory />} />
        <Route path="/office-product" element={<OfficeProduct />} />
        <Route path="/ip-images" element={<IPImages />} />
        <Route path="/op-images" element={<OPImages />} />

        {/* Contact */}
        <Route path="/contact-us" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminMain />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
