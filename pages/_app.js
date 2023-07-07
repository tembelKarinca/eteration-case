import '@/node_modules/normalize.css/normalize.css'
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '@/components/Layout'
import { CartProvider } from '@/components/CartProvider'


function App({ Component, ...pageProps }) {

  return (

    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>


  )
}
export default App
