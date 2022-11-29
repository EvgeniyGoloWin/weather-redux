import '../styles/main.css'
import {MainLayout} from "../component/MainLayout";


export default function MyApp({Component,pageProps}) {
    return(
        <MainLayout>
            <Component {...pageProps}/>
        </MainLayout>
    )

}