window.addEventListener("load", getTableData);

function getTableData() {
  axios.get("json/data.js").then(res => {
    console.log(res.data);
  });
}
