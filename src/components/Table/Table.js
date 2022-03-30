import Table2 from "../Table2";

const style = {
  border: "1px solid purple",
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

  const test = users.map((item) => {
    return <Table2 src={item} />
  })
  
  return <table style={style}>{test}</table>;
};
export default Table;
