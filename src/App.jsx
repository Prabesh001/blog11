import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/updateBlog/:id" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
