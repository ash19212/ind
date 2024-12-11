document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const clearButton = document.getElementById("clearButton");

    // Функция для загрузки данных из JSON файла
    async function loadData() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            console.log(data); // Вывод данных в консоль для проверки
            return data;
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    }

    loadData(); // Вызов функции загрузки данных

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем отправку формы

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        let valid = true;

        // Валидация имени пользователя
        if (username.length < 3) {
            document.getElementById("usernameError").textContent = "Имя пользователя должно содержать не менее 3 символов.";
            valid = false;
        } else {
            document.getElementById("usernameError").textContent = "";
        }

        // Валидация email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Введите корректный email.";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Если все поля валидны
        if (valid) {
            alert("Форма успешно отправлена!");
            form.reset(); // Очистка формы
        }
    });

    // Очистка формы
    clearButton.addEventListener("click", () => {
        form.reset();
        document.getElementById("usernameError").textContent = "";
        document.getElementById("emailError").textContent = "";
    });
});
