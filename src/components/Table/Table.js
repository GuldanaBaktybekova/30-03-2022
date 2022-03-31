const style = {
  border: "1px solid black",
  padding: "5px",
  borderCollapse: "collapse"
  
}


const Table = () => {
  const users = [
    {
      userId: 1,
      id: 1,
      age: 28,
      name: "Michael",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 38,
      name: "Hope",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 58,
      name: "Halsey",
      title: "quidem molestiae enim",
    },
    {
      userId: 5,
      id: 2,
      age: 78,
      name: "Flora",
      title: "quidem molestiae enim",
    },
    {
      userId: 2,
      id: 5,
      age: 27,
      name: "Andy",
      title: "quidem molestiae enim",
    },
  ];

  const person = users.map((item) =>{
    return (
  
         <tr style={style}>
           <td style={style}>{item.userId}</td>
           <td style={style}>{item.id}</td>
           <td style={style}>{item.age}</td>
           <td style={style}>{item.name}</td>
           <td style={style}>{item.title}</td>
         </tr>
         
         
      
    )
  })
  return <table  style={style}>{person}</table>;
  
};
export default Table;
