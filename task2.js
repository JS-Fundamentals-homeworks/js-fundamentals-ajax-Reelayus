// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.getElementById('getUserButton').addEventListener('click', function() {
    const userName = document.getElementById('userNameInput').value;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.name.toLowerCase() === userName.toLowerCase());
            const userCity = document.getElementById('userCity');
            if (user) {
                userCity.textContent = user.address.city;
            } else {
                userCity.textContent = 'User not found';
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
});