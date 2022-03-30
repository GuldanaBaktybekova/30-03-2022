const style = {
  border: "1px solid black",
  padding: "5px",
  borderCollapse: "collapse",
};

const Table = () => {
  const users = [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
    },
  ];

  const author = users.map((item) => {
    return (
      <tr>
        <td style={style}>{item.userId}</td>
        <td style={style}>{item.id}</td>
        <td style={style}>{item.title}</td>
      </tr>
    );
  });
  return <table style={style}>{author}</table>;
};
export default Table;
