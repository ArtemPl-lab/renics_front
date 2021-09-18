import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Preloader } from '../components/ui';
const preloaderStyles = `

`;
class HtmlDocument extends Document {
    render() {
      return (
        <Html>
          <Head />
          <body>
            <Preloader />
            <Main />
            <NextScript />
          </body>
        </Html> 
      )
    }
  }
  
  export default HtmlDocument