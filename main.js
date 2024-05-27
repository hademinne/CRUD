//Light/Dark Mode
document.querySelector(".change").addEventListener("click", function () {
  let body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    document.querySelector(".change").textContent = "OFF";
  } else {
    body.classList.add("dark");
    document.querySelector(".change").textContent = "ON";
  }
});

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

//get total
function getTotal() {
  if (price.value !== "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#93c572";
    total.style.color = "black";
  } else {
    total.innerHTML = "";
    total.style.background = "#93c572";
  }
}

//Create Product
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  dataPro.push(newPro);
  localStorage.setItem("product", JSON.stringify(dataPro));
  // console.log(dataPro);
  clearData();
  showData();
};

//clear Input

function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  count.value = "";
  category.value = "";
  total.innerHTML = "";
}

//Read Data

function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += ` <tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td>
      <button id="update">update</button>
    </td>
    <td>
      <button id="delete">delete</button>
    </td>
  </tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
}
showData();
