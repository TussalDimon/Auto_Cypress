describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/') // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажали Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем что после авторизации видим текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользовалелю
     })
    
     
    it('Восстановления пароля', function () {
        cy.visit('https://login.qa.studio/') // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажали забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#restoreEmailButton').click(); // нажали Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем что после авторизации видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользовалелю
    
    })
    

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/') // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем что после авторизации видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользовалелю
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/') // зашли на сайт
        cy.get('#mail').type('dmitry@ishkov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем что после авторизации видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользовалелю
    })

    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/') // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем что после авторизации видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользовалелю
    })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/') // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин не соотвествуя порядку строчных и прописных букв
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем что после авторизации видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользовалелю
    })
 
       
 })