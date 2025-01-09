import { Routes, Route , BrowserRouter} from "react-router-dom";
import AddProduct from "./pages/Deals/AddProduct.jsx";
import Control from "./Admin-Dashborad/Control.jsx";
// import EditProduct from "./Admin-Dashborad/EditProduct.js";
import AddToCart from "./Admin-Dashborad/addToCart.jsx";

import Register from "./authentication/Register.jsx";
import Login from "./authentication/Login.jsx";
import ComponentNavbar from "./components/navbar.jsx";
import LandingPage from "./landingpage/LandingPage.jsx";
import {QueryClientProvider , QueryClient} from "react-query"
import Category from "./pages/Category/Category.jsx";
import Message from "./pages/Message.jsx";
import Account from "./pages/Account.jsx";
import Product from "./pages/Product.jsx";
import Fetchproduct from "./components/Fetchproduct.jsx";
import Categorylist from "./pages/Category/Categorylist.jsx";
import Addcategory from "./pages/Category/AddCategoty.jsx";
import Overview from "./components/Overview.jsx";
import Appsettings from "./components/Appsettings.jsx";
import CategorySettings from "./pages/Category/CategorySettings.jsx";
import EditCategory from "./pages/Category/EditeCategory.jsx";
import AddHoTdeals from "./pages/Deals/AddHotdeals.jsx";
import Dealsettings from "./pages/Deals/DealSettings.jsx";
import EditandDeletePage from "./pages/Category/EditandDeletePage.jsx";
import HotDealSettings from "./pages/Deals/Hotdealssettings.jsx";
import NewItemSetiings from "./pages/Deals/NewItemSetiings.jsx";
import EditNewDeals from "./pages/Deals/EditNewDeals.jsx";
import FlashDealsSettings from "./pages/Deals/FlashdealSettings.jsx";
import AddFlashDeals from "./pages/Deals/AddFlashDeas.jsx";
import EditFlashDeals from "./pages/Deals/EditFlashDeals.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import { Component } from "./components/Carousel.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import { ToastContainer } from "react-toastify";
import EditeHotdeals from "./pages/Deals/EditeHotdeals.jsx";
// import { Toast } from "flowbite-react";
// import { useAuthStore } from "./authStore.js";
// import {useEffect} from "react"
function App() {
// const {ischeckingauth , checkauth, isAuthenticated, user}=useAuthStore()

// useEffect(()=>{
//   checkauth()
// },[checkauth])
// console.log(isAuthenticated,"isauthenticate")
// console.log(user)
const queryClient = new QueryClient()
  return (
    
    
    <>

    
    <QueryClientProvider client={queryClient}>
         <ComponentNavbar/>
         {/* < Component/> */}
        <Routes>
  {/*  */}
    {/* <Route path="/" element={<LandingPage/>}></Route> */}
    <Route path="/Fetchproduct" element={<Fetchproduct/>}></Route>
    <Route path="/Categorylist/:id" element={<Categorylist/>}></Route>
      <Route path="/" element={<Control/>}></Route>
      <Route path="/Product/:productID" element={<Product/>}></Route>
      <Route path="/Aboutus" element={<Aboutus/>}></Route>

      <Route path="/AddProduts" element={<AddProduct/>}></Route>
      <Route path="/EditandDeletePage" element={<EditandDeletePage/>}></Route>
      <Route path="/update/:id" element={<EditNewDeals/>}></Route>
      <Route path="/updatehotdeal/:id" element={<EditeHotdeals/>}></Route>
      <Route path="/EditCategory/:id" element={<EditCategory/>}></Route>
      <Route path="/AddHoTdeals" element={<AddHoTdeals/>}></Route>
      <Route path="/HotDealSettings" element={<HotDealSettings/>}></Route>
      <Route path="/FlashDealsSettings" element={<FlashDealsSettings/>}></Route>
      <Route path="/preview/:heroid" element={<PreviewPage/>}></Route>


      <Route path="/CategorySettings" element={<CategorySettings/>}></Route>
      <Route path="/EditFlashDeals/:id" element={<EditFlashDeals/>}></Route>
      <Route path="/Appsettings" element={<Appsettings/>}></Route>
      <Route path="/AddFlashDeals" element={<AddFlashDeals/>}></Route>
      <Route path="/NewItemSetiings" element={<NewItemSetiings/>}></Route>
      <Route path="/Dealsettings" element={<Dealsettings/>}></Route>
      <Route path="/Overview" element={<Overview/>}></Route>
      <Route path="/Category" element={<Category/>}></Route>
      <Route path="/Addcategory" element={< Addcategory/>}></Route>
      <Route path="/Message" element={<Message/>}></Route>
      <Route path="/Account" element={<Account/>}></Route>
      {/* <Route path="/EditProduct" element={< EditProduct/>}></Route> */}
      <Route path="/AddToCart" element={< AddToCart/>}></Route>
      <Route path="/register" element={< Register/>}></Route>
      <Route path="/Login" element={< Login/>}></Route>
   
    </Routes>
    
  <ToastContainer/>
 
    </QueryClientProvider>
    

       </>
  );
}

export default App;
