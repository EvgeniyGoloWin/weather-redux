import {useState,useEffect} from "react";
import Head from "next/head";
import {MainLayout} from "../component/MainLayout";
import Post from "./post";

export default function Posts() {

        const [posts,setPosts] = useState([])

        useEffect(()=> {
            async function load() {
               const response = await fetch('http://localhost:4000/posts')
                const json = await response.json()
                setPosts(json)
            }
            load()
        },[])

    return (
        <>
            {/*<Post/>*/}
            <Head>
                <title>Posts Page</title>
            </Head>
            <h1>Posts</h1>
            <pre>
                {JSON.stringify(posts,null,2)}
            </pre>
        </>
    )

}