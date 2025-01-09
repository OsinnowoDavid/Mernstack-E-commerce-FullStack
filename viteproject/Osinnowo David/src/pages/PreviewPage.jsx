import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Footer from "../landingpage/Footer";
import Cookies from 'js-cookie';
import { useShopContext } from '../content';
function PreviewPage() {
  const navigate = useNavigate();
const {backendUrl} = useShopContext()
  const fetchUser = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(`${backendUrl}/api/user/verified`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });
      if (response.status !== 200) {
        navigate('/login');
      }
    } catch (err) {
      navigate('/login');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Preview Page</h1>
      {/* Add your page content here */}
      <Footer />
    </div>
  );
}

export default PreviewPage;
