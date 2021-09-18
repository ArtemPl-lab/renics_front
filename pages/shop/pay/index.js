import styles from './Pay.module.css';

const Pay = props => {
    return(
        <section>
            <div className={`container ${styles.wrapper}`}>
                <h1>
                    Оплата
                </h1>
                <p>
                    Оплата банковскими картами осуществляется через ООО"Системы Обслуживания Бизнеса".
                    <br />
                    К оплате принимаются карты VISA, MasterCard, МИР.
                    <br />
                    Кроме оплаты банковскими картами, доступна оплата через мобильные кошельки Apple Pay или Google Pay.
                    <br />
                    <br />
                    Услуга оплаты через интернет осуществляется в соответствии с Правилами международных платежных систем Visa, MasterCard и Платежной системы МИР на принципах соблюдения конфиденциальности и безопасности совершения платежа, для чего используются самые современные методы проверки, шифрования и передачи данных по закрытым каналам связи. Ввод данных банковской карты осуществляется на защищенной платежной странице ООО"Системы Обслуживания Бизнеса".
                    <br />
                    На странице для ввода данных банковской карты потребуется ввести данные банковской карты: номер карты, имя владельца карты, срок действия карты, трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard, Код Дополнительной Идентификации для МИР). Все необходимые данные пропечатаны на самой карте. Трёхзначный код безопасности — это три цифры, находящиеся на обратной стороне карты.
                    <br />
                    Далее вы будете перенаправлены на страницу Вашего банка для ввода кода безопасности, который придет к Вам в СМС. Если код безопасности к Вам не пришел, то следует обратиться в банк выдавший Вам карту.
                </p>
                <h2>
                    Случаи отказа в совершении платежа:
                </h2>
                <ul>
                    <li>
                        банковская карта не предназначена для совершения платежей через интернет, о чем можно узнать, обратившись в Ваш Банк;
                    </li>
                    <li>
                        недостаточно средств для оплаты на банковской карте. Подробнее о наличии средств на банковской карте Вы можете узнать, обратившись в банк, выпустивший банковскую карту;
                    </li>
                    <li>
                        данные банковской карты введены неверно;
                    </li>
                    <li>
                        истек срок действия банковской карты. Срок действия карты, как правило, указан на лицевой стороне карты (это месяц и год, до которого действительна карта). Подробнее о сроке действия карты Вы можете узнать, обратившись в банк, выпустивший банковскую карту;
                    </li>
                </ul>
                <h2>Служба поддержки</h2>
                <p>
                    По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с работой сайта, Вы можете обращаться по следующим телефону: +7 (905) 567-55-32.
                </p>
                <h2>
                    Обработка предоставленной информации
                </h2>
                <p>
                    Предоставляемая вами персональная информация (имя, адрес, телефон, e-mail, номер банковской карты) является конфиденциальной и не подлежит разглашению. Данные вашей кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем Web-сервере.
                </p>
            </div>
        </section>
    );
}

export default Pay;