
// login page DOM selector
const userName = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const loginBtn = document.querySelector('.login-btn');
const forgotPassword = document.querySelector('.forgot-password-link');
const loginContainer = document.querySelector('.login-container');

// main container selector
const mainContianer = document.querySelector('.main-container');
const welcomeMessage = document.getElementsByTagName('h3');
const categoriesContainer = document.querySelector('.categories-container');
const transactionContainer = document.querySelector('.transaction-adding-container')

const logoutBtn = document.querySelector('#logout-btn')
const transactionBtn = document.querySelector('#transaction');
const dashBoardBtn = document.querySelector('#dashboard');


const loginDetails = {
    name:'Akhil Lawania',
    userID:'akhil',
    password:'8560939399'
}

const bricks1 = [{}];
const brick2 = [{}];
const brick3 = [{}];
const brick4 = [{}];
const brick5 = [{}];
const perosnal = [{}];
const employees = [{}];


const loginAccount = () => {
    if(userName.value === "" || userPassword.value === ""){
        alert("Please Enter your Username or Password")
    }else if(userName.value !== loginDetails.userID || userPassword.value !== loginDetails.password){
        alert('Pleasew Enter Correct Credentials 🙏');
    }else{
        alert('Successfully logged in 😁')
        loginContainer.classList.add('login-active');
        mainContianer.classList.add('main-active');
        userName.value = "";
        userPassword.value = "";
    }
}

const openDashBoardArea = (e) => {
    e.preventDefault();
    transactionContainer.classList.remove('transaction-active');
    categoriesContainer.classList.add('categories-active');
}

const openTransactionArea = (e) => {
    e.preventDefault();
    categoriesContainer.classList.remove('categories-active');
    transactionContainer.classList.add('transaction-active');
}

const logoutSession = (e) => {
 e.preventDefault();
 alert('You have successfully logged out 🥲 | We are happy to see yoiu again');
 mainContianer.classList.remove('main-active');
 loginContainer.classList.remove('login-active');
}

loginBtn.addEventListener("click", loginAccount);
forgotPassword.addEventListener("click", () => {
    alert(`Your login Password is ${loginDetails.password} 🙏`);
})
transactionBtn.addEventListener("click", openTransactionArea);
dashBoardBtn.addEventListener("click",openDashBoardArea);
logoutBtn.addEventListener("click", logoutSession);


