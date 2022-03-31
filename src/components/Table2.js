function Table2(props) {
  // const table = props.src.map((item) => (
  //   <tr>
  //   <td style={item.style}>{item.userId}</td>
  //   <td style={item.style}>{item.id}</td>
  //   <td style={item.style}>{item.title}</td>
  // </tr>
  // ));
  return (
    <table>
      <tr>
        <td>{props.src.userId}</td>
        <td>{props.src.id}</td>
        <td>{props.src.title}</td>
      </tr>
    </table>
  );
}

export default Table2;

// const test = users.map((item) => {
//   return <Table2 src={item} />
// })

// return <table style={style}>{test}</table>;
// import Table2 from "../Table2";