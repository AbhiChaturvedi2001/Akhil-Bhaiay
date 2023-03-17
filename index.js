// login page DOM selector
const userName = document.getElementById("user-id");
const userPassword = document.getElementById("user-password");
const loginBtn = document.querySelector(".login-btn");
const forgotPassword = document.querySelector(".forgot-password-link");
const loginContainer = document.querySelector(".login-container");
const bricksNumbee = document.getElementById("bricks-number");
const delivery = document.getElementById("expense-wages");
const show = document.querySelector(".show-container");

// main container selector
const mainContianer = document.querySelector(".main-container");
const welcomeMessage = document.getElementsByTagName("h3");
const categoriesContainer = document.querySelector(".categories-container");
const transactionContainer = document.querySelector(
  ".transaction-adding-container"
);

const logoutBtn = document.querySelector("#logout-btn");
const transactionBtn = document.querySelector("#transaction");
const dashBoardBtn = document.querySelector("#dashboard");
const addingTransactionBtn = document.querySelector(".adding-transaction");
const userTitle = document.getElementById("title");
const userAmount = document.getElementById("amount");
const transactionDate = document.getElementById("trans-date");
const info = document.getElementById("info");
const businessValue = document.getElementById("working-values");

const loginDetails = {
  name: "Akhil Lawania",
  userID: "akhil",
  password: "1234",
};

const bricks1 = [];
const brick2 = [];
const brick3 = [];
const brick4 = [];
const brick5 = [];
const personal = [];
const employees = [];

const loginAccount = () => {
  if (userName.value === "" || userPassword.value === "") {
    alert("Please Enter your Username or Password");
  } else if (
    userName.value !== loginDetails.userID ||
    userPassword.value !== loginDetails.password
  ) {
    alert("Pleasew Enter Correct Credentials 🙏");
  } else {
    alert("Successfully logged in 😁");
    loginContainer.classList.add("login-active");
    mainContianer.classList.add("main-active");
    userName.value = "";
    userPassword.value = "";
  }
};

const openDashBoardArea = (e) => {
  e.preventDefault();
  transactionContainer.classList.remove("transaction-active");
  categoriesContainer.classList.add("categories-active");
};

const openTransactionArea = (e) => {
  e.preventDefault();
  categoriesContainer.classList.remove("categories-active");
  transactionContainer.classList.add("transaction-active");
};

const logoutSession = (e) => {
  e.preventDefault();
  alert("You have successfully logged out 🥲 | We are happy to see yoiu again");
  mainContianer.classList.remove("main-active");
  loginContainer.classList.remove("login-active");
};

const add = () => {
  if (userTitle.value === "" || userAmount.value === "" || info.value === "") {
    alert("If you want to add something | then please enter the details 😅");
  } else if (businessValue.value === "Personal") {
    personal.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
    });
    console.log(personal);
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
    businessValue.value = "";
  } else if (businessValue.value === "Employees") {
    employees.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
    });
    console.log(employees);
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
  } else if (businessValue.value === "1 Bricks") {
    let result = eval(bricksNumbee.value) + Number(delivery.value);
    bricks1.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
      totalAmt: result,
    });
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
    displayUi(bricks1);
  } else if (businessValue.value === "2 Bricks") {
    brick2.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
      totalAmt: result,
    });
    console.log(brick2);
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
  } else if (businessValue.value === "3 Bricks") {
    brick3.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
      totalAmt: eval(bricksNumbee.value) + delivery.value,
    });
    displayUi(bricks1);
    console.log(brick3);
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
  } else if (businessValue.value === "4 Bricks") {
    brick4.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
      totalAmt: eval(bricksNumbee.value) + delivery.value,
    });
    displayUi(bricks1);
    console.log(brick4);
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
  } else if (businessValue.value === "5 Bricks") {
    brick5.push({
      title: userTitle.value,
      amount: userAmount.value,
      date: transactionDate.value,
      info: info.value,
      categories: businessValue.value,
      totalAmt: Number(eval(bricksNumbee.value)) + Number(delivery.value),
    });
    console.log(brick5);
    displayUi(bricks1);
    userTitle.value = "";
    userAmount.value = "";
    transactionDate.value = "";
    info.value = "";
  }
};

const displayUi = (bricks1) => {
   bricks1.map((x,y) => {
    const html = ` <div class="title-name">${x.title}</div>
    <div class="amt">${x.amount}</div>
    <div class="info">${x.info}</div>
    <div class="date">${x.date}</div>
    <div class="total-amount">${x.totalAmt}</div>
    <div class="cateogr">${x.categories}</div>`
    show.insertAdjacentHTML('afterbegin',html)
   })
};

loginBtn.addEventListener("click", loginAccount);
forgotPassword.addEventListener("click", () => {
  alert(
    `Your username is '${loginDetails.userID}' login Password is ${loginDetails.password} 🙏`
  );
});
transactionBtn.addEventListener("click", openTransactionArea);
dashBoardBtn.addEventListener("click", openDashBoardArea);
logoutBtn.addEventListener("click", logoutSession);
addingTransactionBtn.addEventListener("click", add);
