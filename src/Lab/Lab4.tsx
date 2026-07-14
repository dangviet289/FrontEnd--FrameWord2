import {Table, Image, Spin, Input} from "antd"
import { useState } from "react";
import {useQuery} from "@tanstack/react-query"
import axios from "axios"

const Lab4 = () => {
    const [keyword, setKeyword] = useState<string>("");
    
    const {data, isLoading, isError} = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories")
            return res.data
        }
    })

const handleDelete = async (id: number) => {
  await axios.delete(`http://localhost:3000/stories/${id}`);
  window.location.reload();
};


    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (url: string) => <Image src={url} width={100} />,
        },
        {
            title: "Tên Truyện",
            dataIndex: "title",
        },
        {
            title: "Tác Giả",
            dataIndex: "author",
        },
        {
            title: "Mô Tả",
            dataIndex: "description",
        },
        {
            title: "Ngày ra đời",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
        {
            title: "Hành Động",
            render: (_: any, record: any) => (
    <button onClick={() => handleDelete(record.id)}>
      Xóa
    </button>
  )
}
    ]

    const filteredData = data?.filter((item: any) =>
    item.title?.toLowerCase().includes(keyword.toLowerCase())
  );
    if (isLoading) return <Spin />
    if (isError) return <p>Lỗi khi tải dữ liệu</p>
    return (<>
    <div style={{ padding: 20 }}>
      <Input
        placeholder="Tìm kiếm theo tên truyện..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: 16, width: 300 }}
        allowClear 
      />
      <Table columns={columns} dataSource={filteredData} rowKey="id" pagination={{ pageSize: 5 }} />
    </div>
    </> )
}

export default Lab4;