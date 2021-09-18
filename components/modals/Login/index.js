import { withRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Input, Button } from '../../ui';
import styles from './Login.module.css';
import { Modal } from '../../ui/Modal';
import React from 'react';
import { storeContext } from '../../../stores';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            username: '',
            password: ''
        }
        this.hide = this.hide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    hide(){
        this.props.router.replace(this.props.router.route)
    }
    handleChange(e){
        this.setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    onSubmit(){
        this.context.account.login(this.state);
        this.hide();
    }
    render(){
        return(
            <Modal>
                <div className={styles.header}>
                    <div className={styles.title}>Вход</div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.close} onClick={this.hide}>
                        <path d="M18 6.5L6 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6.5L18 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <Input  placeholder="Логин"  className={styles.input} name="username" onChange={this.handleChange} />
                <Input  placeholder="Пароль"  className={styles.input} name="password" onChange={this.handleChange}/>
                <Link href="#reset-password" passHref shallow={true}>
                    <a className={styles.reset_password}>
                        Забыли пароль?
                    </a>
                </Link>
                <div className={styles.socials}>
                    <div className={styles.social}>
                        <Image src="/images/google-auth.svg" width={30} height={30}/>
                    </div>
                    <div className={styles.social}>
                        <Image src="/images/vk-auth.svg" width={30} height={30}/>
                    </div>
                    <div className={styles.social}>
                        <Image src="/images/insta-auth.svg" width={30} height={30}/>
                    </div>
                    <div className={styles.social}>
                        <Image src="/images/facebook-auth.svg" width={30} height={30}/>
                    </div>
                </div>
                <Button className={styles.login} onClick={this.onSubmit}>
                    Войти
                </Button>
                <Link href="#register" passHref shallow={true}>
                    <a className={styles.register}>
                        Регистрация
                    </a>
                </Link>
            </Modal>
        )
    }
}
Login.contextType = storeContext;

export default withRouter(Login);