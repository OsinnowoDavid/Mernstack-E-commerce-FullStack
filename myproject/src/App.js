import { Routes, Route , BrowserRouter} from "react-router-dom";
import AddProduct from "./pages/Deals/AddProduct.js";
import Control from "./Admin-Dashborad/Control.js";
// import EditProduct from "./Admin-Dashborad/EditProduct.js";
import AddToCart from "./Admin-Dashborad/addToCart.js";

import Register from "./authentication/Register.js";
import Login from "./authentication/Login.js";
import ComponentNavbar from "./components/navbar.js";
import LandingPage from "./landingpage/LandingPage.js";
import {QueryClientProvider , QueryClient} from "react-query"
import Category from "./pages/Category/Category.js";
import Message from "./pages/Message.js";
import Account from "./pages/Account.js";
import Product from "./pages/Product.js";
import Fetchproduct from "./components/Fetchproduct.js";
import Categorylist from "./pages/Category/Categorylist.js";
import Addcategory from "./pages/Category/AddCategoty.js";
import Overview from "./components/Overview.js";
import Appsettings from "./components/Appsettings.js";
import CategorySettings from "./pages/Category/CategorySettings.js";
import EditCategory from "./pages/Category/EditeCategory.js";
import AddHoTdeals from "./pages/Deals/AddHotdeals.js";
import Dealsettings from "./pages/Deals/DealSettings.js";
import EditandDeletePage from "./pages/Category/EditandDeletePage.js";
import HotDealSettings from "./pages/Deals/Hotdealssettings.js";
import NewItemSetiings from "./pages/Deals/NewItemSetiings.js";
import EditNewDeals from "./pages/Deals/EditNewDeals.js";
import FlashDealsSettings from "./pages/Deals/FlashdealSettings.js";
import AddFlashDeals from "./pages/Deals/AddFlashDeas.js";
import EditFlashDeals from "./pages/Deals/EditFlashDeals.js";
import PreviewPage from "../src/pages/PreviewPage.js";
import { Component } from "./components/Carousel.js";
import Aboutus from "./pages/Aboutus.js";
import { ToastContainer } from "react-toastify";
import EditeHotdeals from "./pages/Deals/EditeHotdeals.js";
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
