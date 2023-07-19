import '../public/css/style.css';
import '../public/css/custom.css';
import  '../public/css/vendors/wow-animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import HeaderComponent from '@/components/header/HeaderComponent';
import MainLayoutComponent from '@/components/layout/MainLayoutComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import { SessionProvider } from "next-auth/react"
let persistor= persistStore(store);
export default function App({ Component, pageProps:{session,...pageProps} }) {
  
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          
          <MainLayoutComponent>
            <Component {...pageProps} />
          </MainLayoutComponent>
          

        </PersistGate>

      </Provider>
    </SessionProvider>
    
  )
  
  
}
