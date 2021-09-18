import styles from '../styles/errors.module.css';
function Error({ statusCode }) {
  switch(statusCode){
    case 401:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>401</p>
            <p className={styles.text2}>Требуется авторизация</p>
            <p className={styles.text3}>Для просмотра этой страницы требуется авторизация</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 403:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>403</p>
            <p className={styles.text2}>Доступ запрещён</p>
            <p className={styles.text3}>Сервер понял запрос, но он отказывается его выполнять из-за ограничений в доступе</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 404:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>404</p>
            <p className={styles.text2}>Такой страницы у нас нет</p>
            <p className={styles.text3}>Похоже вы допустили опечатку, набирая адрес, или воспользовались неисправной ссылкой</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 405:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>405</p>
            <p className={styles.text2}>Метод не разрешен</p>
            <p className={styles.text3}>Указанный вами метод нельзя применить к текущему ресурсу</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 408:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>408</p>
            <p className={styles.text2}>Время ожидание истекло</p>
            <p className={styles.text3}>Время ожидания сервером передачи истекло. Вы можете попробовать повторить этот запрос</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 500:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>500</p>
            <p className={styles.text2}>Внутренняя ошибка сервера</p>
            <p className={styles.text3}>На нашем сервере произошла критическая ошибка. Мы уже работаем над её исправлением</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 502:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>502</p>
            <p className={styles.text2}>Проблемы со шлюзом</p>
            <p className={styles.text3}>Сервер, выступая в роли шлюза или прокси-сервера, получил недействительное ответное сообщение</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
    case 503:
      return (
        <div className={styles.wrapper}>
          <div className={`${styles.text} container`}>
            <p className={styles.text1}>503</p>
            <p className={styles.text2}>Наши сервера перегружены</p>
            <p className={styles.text3}>Сервер временно не имеет возможности обрабатывать запросы по техническим причинам</p>
            <img className={styles.line} src='/images/404-line.svg' />
          </div>
        </div>
      )
  }

}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error