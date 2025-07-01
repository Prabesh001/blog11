import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Home = () => {
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:4000/blog");
      setBlogs(res.data.data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col p-5 lg:px-48 lg:py-11">
        {blogs.map((item) => (
          <div key={item._id} className="bg-gray-100 p-5 mb-10">
            <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
            <p className="my-3">{item.subTitle}</p>
            <button className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
              Read More...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
