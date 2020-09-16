function getPasswordFromUser(success, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") success();
    else fail();
}

let user = {
    name: 'Andrew',

    loginSuccess() {
    alert(`${this.name}  logged in`);
    },

    loginFail() {
    alert(`${this.name} failed to log in`);
    },

};

getPasswordFromUser(user.loginSuccess.bind(user),user.loginFail.bind(user));

/*Когда мы выполняли функцию getPasswordFromUser(), значения шли из глобального окружения, а не
из внутренего там где 'user', потому что getPasswordFromUser() глобальная функция и у нее свое
поле видимости.

А this выполнялся внутри локальной функции но не был виден так как относиться к локальному окружению. 
Но когда мы указали точное значение this внутри функции getPasswordFromUser(),
используя bind(), функция стала показывать данные из локального поля видимости.*/

