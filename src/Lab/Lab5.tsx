import {Form, Input, Button, Select, Checkbox} from 'antd';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Story {
  id: string; 
  title: string; 
  author: string; 
  genre: string; 
  image: string; 
  description: string; 
  isActive: boolean; 
}



const AddStory = () => {

const fetchCategories = async () => {
  // Thay url này bằng link API GET /categories thực tế của bạn
  const response = await axios.get('http://localhost:3000/categories'); 
  return response.data;
};
const { data: rawCategories = [], isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  
  const categoryOptions = rawCategories.map((category: any) => ({
    value: category.categoryId || category.id,
    label: category.categoryTitle || category.title
  }));
const [form] = Form.useForm();
    const mutation = useMutation({
        mutationFn: async (data: Story) => {
            const res = await axios.post("http://localhost:3000/stories", data);
            return res.data;
    },
    onSuccess: () => {
        toast.success("Them truyen thanh cong!");
        form.resetFields()
    },
    onError: () => {
        toast.error("Them truyen that bai!");
    },
})

const onFinish = (values: Story) => {
    mutation.mutate(values);
}
return (
    <Form onFinish={onFinish} form={form} layout="vertical" style={{maxWidth: 600}}>
        <Form.Item
        label="Ten truyen"
        name="title"
        rules={[{required: true, message: "Vui long nhap ten truyen!"}]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Tac gia"
        name="author"
        >
        <Input />
        </Form.Item>

<Form.Item
          label="Danh mục"
          name="categoryId"
          rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
        >
          <Select
            loading={isCategoriesLoading} 
            placeholder="Chọn một danh mục"
            options={categoryOptions} 
            showSearch
            optionFilterProp = "label"
            filterOption={(input, option) =>
              String(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            disabled={mutation.isPending}
          />
        </Form.Item>

        <Form.Item
        label="Image URL"
        name="image"
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Mo ta"
        name="description"
        >
        <Input.TextArea rows={4} />
        </Form.Item>

<Form.Item name="isActive" valuePropName="checked">
      <Checkbox>Active</Checkbox>
    </Form.Item>

        <Button type="primary" htmlType="submit" loading={mutation.isPending} disabled={mutation.isPending}>
            {mutation.isPending ? 'Đang thêm truyện...' : 'Thêm truyện'}
        </Button>
    </Form>
)
}
export default AddStory;
