import { useRouter } from 'next/router';
import { useState } from 'react';
import api from '../../../api';
import { Article } from '../../../api/models';
import { PopularArticles } from '../../../components/blog';
import { Editor, DropFilesZone, Button } from '../../../components/ui'; 
import styles from '../blog.module.css';

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
const CreatePost = props => {
    const router = useRouter();
    const [state, setState] = useState({
      thumbnail: null,
      title: {
        "ru": 'Заголовок твоей статьи',
      },
      content: {
        "ru": '<h2>Лучший портал для электроники =))</h2><p>👉Тыкай сюда и пиши👈</p>',
      }
    });
    const handleChange = (key, value) => {
      setState(prev => ({
        ...prev,
        [key]: value
      }));
    }
    const handleI18nChange = (key, value) => {
      setState(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          [router.locale]: value
        }
      }));
    }
    const handleSubmit = async () => {
      if(!state.thumbnail){
        alert('Добавьте изображение!');
        return;
      }
      if(!state.title){
        alert('Добавьте заголовок');
        return;
      }
      if(!state.content){
        alert('Добавьте содержимое статьи');
        return;
      }
      console.log("goot");
      const thumbnailPath = await api.uploadMedia(state.thumbnail);
      const res = await Article.create({
        ...state,
        thumbnail: thumbnailPath,
        date: new Date().toString()
      });
      if(res.ok){
        console.log("Я сделяль статью");
      }
    }
    return(
        <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <DropFilesZone 
                  title="Загрузите миниатюру вашего поста"
                  description="Желательно загружать изображения размером YxZ. В противном случае оно будет обрезано"
                  onChange={(file)=>handleChange('thumbnail', file)}
                  filename={state.thumbnail ? state.thumbnail.name : ''}
                />
                <div className={styles.content_editor}>
                  <h1>
                    <Editor 
                      value={state.title[router.locale] || ' '}
                      inline={true}
                      tagName="h1"
                      toolbar={false}
                      onEditorChange={(val)=>handleI18nChange('title', val)}
                    />
                  </h1>
                  <Editor
                    value={state.content[router.locale] || ' '}
                    inline={true}
                    onEditorChange={(val)=>handleI18nChange('content', val)}
                  />
                </div>
                <Button className={styles.submit} onClick={handleSubmit}>
                  Опубликовать
                </Button>
              </div>
              <div className={styles.popular}>
                <PopularArticles items={POPULAR}/>
              </div>
            </div>
        </div>
    );
}

export default CreatePost;