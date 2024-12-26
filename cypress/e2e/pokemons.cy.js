describe('Покемоны', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Посещаем сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Вводим валидный логин
         cy.get('#password').type('USER_PASSWORD)'); // Вводим валиный пароль
         cy.get('.auth__button').click(); // нажимаем кнопку входа
         cy.get('.header__container > .header__id').click(); // Нажимаем на свой профиль
         cy.get('[href="/shop"]').click(); // Нажимаем на смену аватара
         cy.get('.available > button').first().click({ force: true }); // Выбираем любого доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // Ввод номера карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25'); // Ввод срока карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввод CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('evgeniya palicheva'); // Ввод имени владельца карты
         cy.get('.pay-btn').click(); // Нажимаем оплатить
         cy.get('#cardnumber').type('56456'); // Вводим валидный код из пуша
         cy.get('.payment__submit-button').click(); // Нажимаем отправить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверка текста об успешной покупке
         cy.get('.payment__font-for-success').should('be.visible'); // Текст виден пользователю
        })
   
 })