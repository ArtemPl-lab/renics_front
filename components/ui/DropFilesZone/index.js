import { useEffect, useRef, useState } from 'react';
import styles from './DropFilesZone.module.css';

const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
}


export const DropFilesZone = props => {
    const [highlight, setHighlight] = useState(false);
    const dropRef = useRef(null);
    // handle drop
    const handleDrop = (e) => {
        let dt = e.dataTransfer;
        let files = dt.files;
        handleFiles(files);
    }
    const handleFiles = (files) => {
        ([...files]).forEach(props.onChange)
    }
    useEffect(()=>{
        if(dropRef.current){

            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropRef.current.addEventListener(eventName, preventDefaults, false);
            });
            ['dragenter', 'dragover'].forEach(eventName => {
                dropRef.current.addEventListener(eventName, ()=>setHighlight(true), false);
            });
            ['dragleave', 'drop'].forEach(eventName => {
                dropRef.current.addEventListener(eventName, ()=>setHighlight(false), false);
            });
            dropRef.current.addEventListener('drop', handleDrop, false);
        }
    }, [dropRef]);
    return(
        <div className={`${styles.wrapper} ${highlight ? styles.highlight : ''}`} ref={dropRef}>
            <div class={styles.content}>
                <div class={styles.title}>
                    {props.title || 'Перетащите файл сюда'}
                </div>
                <div class={styles.file_input}>
                    <label for="drop-zone__file" class={styles.btn}>Выбрать файл</label>
                    <div class={`${styles.info} ${props.filename && styles.active}`}>{props.filename || 'Файл не выбран'}</div>
                    <input type="file" class={styles.file} id="drop-zone__file"/>
                </div>
                <div class={styles.desc}>
                    Архив в формате .zip, в архиве не больше 30мб данных (в не сжатом виде) и не больше 1000 файлов.
                </div>
            </div>
        </div>
    );
}