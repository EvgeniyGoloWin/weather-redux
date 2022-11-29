import {useRouter} from "next/router";
import {MainLayout} from "../../component/MainLayout";

export default function Post() {
    const router = useRouter()
    return <MainLayout>
    <h1>Post {router.query.id}</h1>
    </MainLayout>
}