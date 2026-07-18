import { Form, Input, Button, Spin, message, Space  } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const EditStory = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Lấy dữ liệu chi tiết
  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  // Fill form
  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  // Update
  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.put(`http://localhost:3000/stories/${id}`, values);
    },
    onSuccess: () => {
      // reload list
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      message.success("Cập nhật thành công");

      // quay lại list
      navigate("/lab4");
    },
  });

  const handlePatch = async () => {
    const values = await form.validateFields(['title']);    
    await axios.patch(`http://localhost:3000/stories/${id}`, { title: values.title });
    message.success('Đã cập nhật tiêu đề!');
    navigate('/lab4');
  };

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  if (isLoading) return <Spin />;

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Ten truyen"
        name="title"
        rules={[{required: true, message: "Vui long nhap ten truyen!"}]}
        >
        <Input />
        </Form.Item>

      <Form.Item name="author" label="Tác giả"
      rules={[{required: true, message: "Vui long nhap ten tác giả!"}]}>
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Ảnh">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>
      <Space>
        <Button type="primary" onClick={handlePatch} ghost>
            Chỉ sửa Tiêu đề
          </Button>
      <Button type="primary" htmlType="submit" loading={mutation.isPending} disabled={isLoading}>
        {mutation.isPending ? 'Đang cập nhật truyện...' : 'Cập nhật truyện'}
      </Button>
      </Space>
    </Form>
  );
};

export default EditStory;