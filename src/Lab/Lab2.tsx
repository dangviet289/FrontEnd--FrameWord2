import { Button, Table } from "antd";


function Lab2() {

    // bài 1
   const columns1 = [
    {title: "ID", dataIndex: "id",},
    {title: "Name", dataIndex: "name"},
    {title: "Age", dataIndex: "age"},
    {title: "Major", dataIndex: "major"}
]
const data1 = [
    {key: 1, id: 1, name: "Nam", age: 20, major: "IT"},
    {key: 2, id: 2, name: "Linh", age: 21, major: "Business"},
    {key: 3, id: 3, name: "Hà", age: 19, major: "Design"}
]
// bài 2
const columns2 = [
    {title: "ID", dataIndex: "id"},
    {title: "Product Name", dataIndex: "productName"},
    {title: "Price", dataIndex: "price"},
    {title: "Category", dataIndex: "category"}
]
const data2 = [
    {key: 1, id: 1, productName: "iphone11", price: 1000000, category:"Điện thoại" },
    {key: 2, id: 2, productName: "iphone12", price: 2000000, category: "Điện thoại"},
    {key: 3, id: 3, productName: "iphone13", price: 3000000, category:"Điện thoại" },
    {key: 4, id: 4, productName: "iphone14", price: 4000000, category: "Điện thoại"},
    {key: 5, id: 5, productName: "macbook2", price: 5000000, category:"Laptop" },
    {key: 6, id: 6, productName: "macbook3", price: 6000000, category: "Laptop"}
]

// bài 3
const columns3 = [
    {title: "ID", dataIndex: "id",},
    {title: "Name", dataIndex: "name"},
    {title: "Email", dataIndex: "email"},
    {title: "Status", dataIndex: "status",
    render: (status) => (
      <span style={{ color: status === "active" ? "green" : "red" }}>
        {status}
      </span>
    ),
  },
  {title: "Action", 
    render:(_, record)=>(
        <>
        <Button >Edit</Button>
        <Button >Delete</Button>
        </>
    )
  }
]
const data3 = [
    {key: 1, id: 1, name: "Nam", email: "nam@gmail.com", status: "active"},
    {key: 2, id: 2, name: "Linh", email: "linh@gmail.com", status: "inactive"}
]
    return(
        <>
        <h2>Danh sách sinh viên</h2>
        <Table columns={columns1 } dataSource={data1} />
        <h2>Danh sách sản phẩm</h2>
        <Table columns={columns2} dataSource={data2} pagination={{pageSize: 3}}/>
        <h2>User Management</h2>
        <Table columns={columns3} dataSource={data3} />
        </>
    )
}
export default Lab2;