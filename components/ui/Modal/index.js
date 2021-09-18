import { useRouter, withRouter } from 'next/router';
import React, { createContext, useContext, useState } from 'react';
import styles from './Modal.module.css';

const modalContext = createContext();

 export class Modal extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    componentDidMount(){
        const [_, setModal] = this.context;
        setModal(prev => ({
            ...prev,
            options: {
                ...prev.options,
                show: true,
                width: this.props.width,
                height: this.props.height
            },
            children: this.props.children
        }));
    }
    componentWillUnmount(){
        const [_, setModal] = this.context;
        setModal(prev => ({
            ...prev,
            options: {
                ...prev.options,
                show: false
            }
        }));
    }
    render(){
        return <></>;
    }
}
Modal.contextType = modalContext;

export const ModalProvider = ({ children }) => {
    const state = useState({
        options: {
            show: false,
            width: "auto",
            height: "auto"
        },
        children: null
    });
    return(
        <modalContext.Provider value={state}>
            {children}
            <ModalWrapper />
        </modalContext.Provider>
    );
}

const ModalWrapper = () => {
    const [modal, setModal] = useContext(modalContext);
    const router = useRouter();
    const hide = () => {
        setModal(prev => ({
            ...prev,
            options: {
                ...prev.options,
                show: false
            }
        }));
        router.replace(router.route)
    }
    return(
        <>
            <div 
                className={`
                    ${styles.background} 
                    ${modal.options.show ? styles.active : ''}
                `} 
                onClick={hide} 
            />
            <div className={`
                    ${styles.modal}
                    ${modal.options.show ? styles.show : styles.hidden}
                `}
                style={{
                    width: modal.options.width,
                    height: modal.options.height
                }}
            >
                {modal.children}
            </div>
        </>
    );
}