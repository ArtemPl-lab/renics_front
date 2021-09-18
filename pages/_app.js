import RootStore from '../stores/RootStore';
import NextApp from 'next/app';
import Head from 'next/head'
import App from 'next/app'
import { Header, Footer } from '../components/common';
import { NextIntlProvider } from 'next-intl';
import { ModalProvider } from '../components/ui/Modal';
import { StoreProvider } from '../stores';
import { withRouter } from 'next/router';
import '../styles/preloader.css';
import '../styles/reset.css'
import '../styles/globals.css'
import '../styles/slick.css';
import '../styles/editor.css'
import ClientRoutes from '../clientRoutes/index';

class Application extends App {
  constructor(props){
    super(props);
    this.props = props;
    this.store = new RootStore({
      router: props.router
    });
  }
  render() {
    const {Component, messages, pageProps, router} = this.props;
    this.store.updateContext({
      router
    });
    return (
      <NextIntlProvider messages={{...messages, ...pageProps.messages}}>
        <StoreProvider value={this.store}>
          <ModalProvider>
            <Head>
              <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ClientRoutes />
          </ModalProvider>
        </StoreProvider>
      </NextIntlProvider>
    )
  }
}
Application.getInitialProps = async function getInitialProps(context) {
  return {	
    ...(await NextApp.getInitialProps(context)),	
    messages: require(`/public/languages/${context.router.locale}.json`)
  };	
};
export default withRouter(Application);
