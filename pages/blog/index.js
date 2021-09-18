import { Article } from "../../api/models";
import { ArticleCard, Banner, PopularArticles } from "../../components/blog";
import styles from './blog.module.css';
const POPULAR = [
    {
      name: 'Топ идей для проектов на arduino',
      comments: 10,
      views: 1000,
    },
    {
      name: 'Расчёт шестерней…',
      comments: 10,
      views: 1000,
    },
    {
      name: 'Что лучше: купить готовый 3d-принтер или собрать самому?',
      comments: 10,
      views: 1000,
    },
    {
      name: 'Какой пластик выбрать для печати корпусов на 3d-принтере?',
      comments: 10,
      views: 1000,
    },
  ]
  
  const ARTICLES = [
    {
      name: 'Какой пластик выбрать для печати корпусов на 3d-принтере?',
      category: 'Категория статьи',
      image: 'article1.png',
      description: `У вас есть 3d принтер?
      Если ответ положительный, возможно вы используете его для печати корпусов электронных изделий.
  
      Основная проблема в таких случаях — это выбрать подходящий пластик. Чтобы он имел высокую прочность, с ним было удобно и комфортно работать, ну и цена была приемлема. 
   
      Сейчас мы разберём основные виды пластика и выделим их плюсы/минусы.`,
      date: '06.05.2021',
      comments: 10,
      views: 1000,
    },
    {
      name: 'Топ идей для проектов на arduino',
      category: 'Категория статьи',
      image: 'article2.png',
      description: `Электроника — это не скучные расчеты. С помощью платы arduino можно делать творческие проекты, которые будут интересны взрослым и детям.  
  
      Сегодня мы расскажем о некоторых проектах на этой плате, а также объясним как они работают. Самые умелые и смелые могут попробовать сделать что-то из нашего списка самостоятельно!`,
      date: '06.05.2021',
      comments: 10,
      views: 1000,
    },
    {
      name: 'Расчёт шестерней…',
      category: 'Категория статьи',
      image: 'article3.png',
      description: `Как загнать новичка в ступор?
  
      Сегодня мы научимся рассчитывать диаметр шестерней.
  
      ВАЖНО!
  
      Есть 2 вида шестерней: прямозубая и косозубая. И считать их диаметр нужно по разным формулам, иначе будут большие неточности в расчётах.`,
      date: '06.05.2021',
      comments: 10,
      views: 1000,
    },
  ]
const Blog = ({ articles }) => {
    console.log(articles);
    return (
        <div className='container'>
            <Banner />
            <div className={styles.wrapper}>
                <ul className={styles.posts}>
                    {articles.map((item, index)=>(
                    <ArticleCard {...item} key={index}/>
                    ))}
                </ul>
                <div className={styles.popular}>
                    <PopularArticles items={POPULAR}/>
                </div>
            </div>
        </div>
    );
}
Blog.getInitialProps = async (ctx) => {
    // const articles = await Article.find();
    const articles = []
    return { articles }
}
export default Blog;