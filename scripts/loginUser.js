// when click on signup button
const signUp = () => {
  const all = document.getElementsByClassName('input-field');
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove('display');
    all[i].classList.add('hide');
  }
  console.log(all);
  
  const element = document.getElementsByClassName('sign-up');
  console.log(element);
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add('display');
  }
  let btn = document.getElementsByClassName('btn');
  btn[0].innerText = 'SignUp';
}

// when click on login button
const login = () => {
  const all = document.getElementsByClassName('input-field');
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove('display');
    all[i].classList.add('hide');
  }
  console.log(all);
  
  const element = document.getElementsByClassName('login');
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add('display');
  }
  let btn = document.getElementsByClassName('btn');
  btn[0].innerText = 'Login';
}

const redirect = () => {
  const btn = document.getElementsByClassName('btn');
  if(btn[0].innerText === 'SignUp') {
      location.href = "./loginUser.html";
  }
  else {
      location.href = "./viewCar.html";
  }
}