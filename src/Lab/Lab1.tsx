import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Form, Input, Button, Modal} from "antd";
import { useState } from "react";
import { Table } from "antd";
  const onFinish = (values: any) => {
    console.log(values);
  }
  const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
];

const data = [
  { key: 1, name: "John", email: "John@gmail.com", role: "admin"},
  { key: 2, name: "Rô", email: "ro@gmail.com", role: "customer"},
  { key: 3, name: "Si", email: "si@gmail.com", role: "customer"},
  { key: 4, name: "Ney", email: "ney@gmail.com", role: "customer"},
  { key: 5, name: "Mpape", email: "mpape@gmail.com", role: "customer"},
];


  

function App() {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <>
   
        {/* bài 1 ở trang app.tsx, đây là bài 2 */}
        <Form onFinish={onFinish}>
          <Link to="#" className="text-xl font-semibold">
            <strong>Form đăng ký:</strong>
          </Link>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Nhập tên" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Nhập password" }]}
      >
        <Input placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>

    {/* bài 3 */}
    <Link to="#" className="text-xl font-semibold">
            <strong>Bảng danh sách user:</strong>
          </Link>
    <Table columns={columns} dataSource={data} />

    {/* bài 4 */}
     <>
      <Button onClick={() => setOpen(true)}>Add User</Button>

      <Modal
  title="Thêm người dùng mới"
  open={open}
  onCancel={() => setOpen(false)}
  onOk={() => setOpen(false)} 
>
  <Form
    layout="vertical"
    name="add_user_form"
    initialValues={{ role: 'customer' }} 
  >
    
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
    >
      <Input placeholder="Nhập tên user (VD: John)" />
    </Form.Item>

   
    <Form.Item
      label="Email"
      name="email"
      rules={[
        { required: true, message: 'Vui lòng nhập email!' },
        { type: 'email', message: 'Email không đúng định dạng!' }
      ]}
    >
      <Input placeholder="Nhập email (VD: john@gmail.com)" />
    </Form.Item>

   
    <Form.Item
      label="Role"
      name="role"
      rules={[{ required: true, message: 'Vui lòng nhập vai trò!' }]}
    >
      <Input placeholder="Nhập vai trò (VD: customer, admin)" />
    </Form.Item>
  </Form>
</Modal>
    </>
      
      <Toaster />
     
    </>
  );
}

export default App;
