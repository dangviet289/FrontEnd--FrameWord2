
// import { Form, Input, Button, InputNumber, Select } from "antd";

// const ProductForm = () => {
//   const onFinish = (values: any) => {
//     console.log(values);
//   };

//   return (
//     <Form layout="vertical" onFinish={onFinish}>
//       <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>

//       <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
//         <InputNumber style={{ width: "100%" }} />
//       </Form.Item>

//       <Form.Item label="Danh mục" name="category">
//         <Select
//           placeholder="Chọn danh mục"
//           options={[
//             { label: "Laptop", value: "laptop" },
//             { label: "Điện thoại", value: "phone" },
//             { label: "Tablet", value: "tablet" },
//             { label: "Phụ kiện", value: "accessory" },
//           ]}
//         />
//       </Form.Item>

//       <Form.Item label="Mô tả" name="description">
//         <Input.TextArea rows={4} />
//       </Form.Item>

//       <Button type="primary" htmlType="submit">
//         Thêm sản phẩm
//       </Button>
//     </Form>
//   );
// };

// export default ProductForm;


import { Form, Input, Button, InputNumber, Select } from "antd";
import { useState } from "react";


const LoginForm = () => {
    const onFinish1 = (values: any) => {
    console.log("Form data:", values);
  };

  const onFinish2 = (values: any) => {
    console.log("Form data:", values);
  };
  const [form] = Form.useForm();
const data = {
  name: "One Piece",
  email: "Oda@gmail.com"
};

  const onFinish3 = (values: any) => {
    console.log("Form data:", values);
  };

   const [postData, setPostData] = useState<any>(null);
  const onFinish4 = (values: any) => {
    setPostData(values);
  };
 



  return (
    <>
    {/* bài 1 */}
    <Form layout="vertical" onFinish={onFinish1} style={{ maxWidth: 400 }}>
        <h1>Form Đăng Nhập</h1>
      <Form.Item label="Email" name="email"
      rules={[
           { required: true, message: "Vui lòng nhập email"}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password"
      rules={[
           { required: true, message: "Vui lòng nhập mật khẩu"}
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Login
        </Button>
      </Form.Item>
    </Form >


{/* bài 2 */}
    <Form layout="vertical" onFinish={onFinish2} style={{ maxWidth: 400 }} form={form}>
        <h1>Form đăng ký người dùng</h1>
         <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email"
      rules={[
           { required: true, message: "Vui lòng nhập email"},
           {type: "email", message: "Email không hợp lệ"}
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone"
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Password" name="password"
      rules={[
           { required: true, message: "Vui lòng nhập mật khẩu"},
           { min: 6, message: "Mật khẩu phải có ít nhất 6 kí tự"}
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmPassword"
      rules={[
  { 
    required: true, 
    message: "Vui lòng nhập mật khẩu xác nhận!" 
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
    },
  }),
]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Đăng Ký
        </Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="button" onClick={() => form.resetFields()}>
          reset
        </Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="button" onClick={() => form.setFieldsValue(data)}>
          reset có data
        </Button>
      </Form.Item>
    </Form >

    {/* bài 3 */}
    <Form layout="vertical" onFinish={onFinish3} style={{ maxWidth: 400 }}>
        <h1>Form thêm sản phẩm</h1>
      <Form.Item label="Tên sản phẩm" name="productName">
        <Input />
      </Form.Item>
      <Form.Item label="Giá" name="price">
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Số lượng" name="quantity">
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Mô tả" name="description">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form >

    {/* bài 4 */}
    <Form layout="vertical" onFinish={onFinish4} style={{ maxWidth: 400 }}>
        <h1>Form thêm bài viết </h1>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Category " name="category">
        <Select
           placeholder="Chọn danh mục"
          options={[
            { label: "hài hước", value: "comedy" },
            { label: "kịch tính", value: "drama" },
        ]}
       />
      </Form.Item>
      <Form.Item label="Slug" name="slug">
        <Input />
      </Form.Item>
       <Form.Item label="Content" name="content">
        <Input />
      </Form.Item>
       <Form.Item label="Image URL" name="imageUrl">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form >

    
 {postData && (
  <div style={{ marginTop: 20, padding: 15, border: '1px solid #ccc', borderRadius: 8 }}>
    <h3>Dữ liệu bài viết vừa thêm:</h3>
    <p><strong>Tiêu đề:</strong> {postData.title}</p>
    <p><strong>Danh mục:</strong> {postData.category}</p>
    <p><strong>Slug:</strong> {postData.slug}</p>
    <p><strong>Nội dung:</strong> {postData.content}</p>
    <p><strong>Ảnh:</strong></p>
    <img src={postData.imageUrl} alt="Preview" style={{ maxWidth: '200px' }} />
  </div>
)}
    </>
  );
};

export default LoginForm;