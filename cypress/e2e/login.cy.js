import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/'); // Посещаем сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки
        });
    afterEach('Конец теста', function () {
            cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
            cy.get(result_page.close).should('be.visible'); // Есть крестик и виден пользователю
        });
    it('Правильный логин и правильный пароль', function () {
         cy.get(main_page.email).type(data.login); // Вводим валидный логин
         cy.get(main_page.password).type(data.password); // Вводим валиный пароль
         cy.get(main_page.login_button).click(); // Нажать войти
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // После авторизации есть текст
        })

    it('Проверка восстановления пароля', function () {
            cy.get(main_page.fogot_pass_btn).click(); // Кликаем на забыли пароль
            cy.get(recovery_password_page.email).type(data.login); // Вводим любой логин
            cy.get(recovery_password_page.send_button).click(); // Кликаем на отправить код
            cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Есть текст после отправки кода
        })
    
    it('Правильный логин, НЕправильный пароль', function () {
            cy.get(main_page.email).type(data.login); // Вводим валидный логин
            cy.get(main_page.password).type('iLoveqastudio9'); // Вводим НЕвалидный пароль
            cy.get(main_page.login_button).click(); // Нажать войти
            cy.get(result_page.title).contains('Такого логина или пароля нет'); // После авторизации есть текст
        })
        
    it('НЕправильный логин, правильный пароль', function () {
            cy.get(main_page.email).type('palicheva.e@mail.ru'); // Вводим НЕвалидный логин
            cy.get(main_page.password).type(data.password); // Вводим валидный пароль
            cy.get(main_page.login_button).click(); // Нажать войти
            cy.get(result_page.title).contains('Такого логина или пароля нет'); // После авторизации есть текст
        })

    it('Логин без @, правильный пароль', function () {
            cy.get(main_page.email).type('germandolnikov.ru'); // Вводим логин без @
            cy.get(main_page.password).type(data.password); // Вводим валидный пароль
            cy.get(main_page.login_button).click(); // Нажать войти
            cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // После входа есть текст об ошибке
        })
    
    it('Проверка строчных букв в логине', function () {
            cy.get(main_page.email).type('gErMan@dolnikov.ru'); // Вводим валидный логин со строчными буквами
            cy.get(main_page.password).type(data.password); // Вводим валиный пароль
            cy.get(main_page.login_button).click(); // Нажать войти
            cy.get(result_page.title).contains('Авторизация прошла успешно'); // После авторизации есть текст
           })
   
 })
 
  