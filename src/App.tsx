import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom'
import Lab1 from './Lab/lab1'
import { Link } from "react-router-dom";
import { Button } from "antd";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
  const onFinish = (values: any) => {
    console.log(values);
  }


function App() {
  return (
    <>
    <Layout>
      <Header style={{ color: "white" }}>
      <nav className=" text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>
      </Header>
      {/* MAIN CONTENT */}
      <Content style={{ padding: 20 }}>
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* button */}
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
        <Button type="dashed">Dashed</Button>

        

    <Routes>
    <Route path="/lab1" element={<Lab1 />} />
    </Routes>
      </div>
      </Content>
      <Footer>
      <Toaster />
      </Footer>
      </Layout>
    </>
  );
}

export default App;
