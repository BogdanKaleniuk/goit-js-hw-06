// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  // const forElements = event.currentTarget.elements;
  //   console.log(forElements);
  console.log('Предотвращает перезагрузку');
  const emailValue = email.value;
  const passwordValue = password.value;
  // const email = forElements.email.value;
  // const password = forElements.password.value;
  // const formData = new formData(event.currentTarget);
  // console.log(formData);

  // formData.forEach((email, password) => {
  //   console.log('email:', email);
  //   console.log('password:', password);
  // });
  if (emailValue === '' || passwordValue === '') {
    alert(`Всі поля мають бути заповнені!!!`);
  }
  console.log(emailValue);
  console.log(passwordValue);
  // console.log('Email:', mail);
  // console.log('Password:', password);
  form.reset();
}
