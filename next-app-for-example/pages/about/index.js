import {Router} from "next/router";
import {MainLayout} from "../../component/MainLayout";
import {router} from "next/client";


export default function About() {
    const clickLink = () => {
    }
    return (
        <MainLayout>
        <h1>About</h1>
        {/*<button onClick={clickLink}>Go back to home</button>*/}
        <button onClick={() => router.push('/')}>Go back to home inline</button>
    </MainLayout>
    )
}