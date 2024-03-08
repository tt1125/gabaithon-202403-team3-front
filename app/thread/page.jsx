"use client"
import { getAuth} from "firebase/auth";

import { Button, CircularProgress } from "@mui/material";

import { useRouter } from "next/navigation";
import Thread from "../../components/Thread"

import { useEffect, useRef, useState } from "react";

export default function thread() {
    const auth = getAuth();
    const user = auth.currentUser;
    const userData = user.providerData
    const name = userData[0].displayName

    const [threads, setThreads] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const observerTarget = useRef(null);

    const router = useRouter();
    const linkToHome = () => {
      router.push("/")
    };
    const linkToReply = () => {
        router.push("/thread/reply")
      };

      const createNewThread = () => {
        let threadName = prompt("タイトルを入力");  //name ユーザーの名前
       


      }

    const loadThread = async (page) => {

        const URL = `http://localhost:8000/api/v1/posts`;

        const response = await fetch(URL);
        const threadsData = await response.json();
        console.log("レスポンスデータです",threadsData)
        const count = threadsData.length;
        setHasMore(count > 0);
        setThreads([...threads, ...threadsData]);
        threadsData.map((thread)=>console.log(thread))
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    if (hasMore) {
                        setPage(p => p + 1);
                    }
                }
            },
            { threshold: 1.0 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }
        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [hasMore, observerTarget]);

    useEffect(() => {
        if (page > 0) {
            loadThread(page);
        }
    }, [page]);

    return (
        <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "60%", marginTop: "50px", textAlign: "center", backgroundColor: "white", padding: "30px 10px 80px 10px" }}>
                <p style={{ fontSize: "30px", margin: "20px 0" }}>掲示板一覧</p>
                {threads.map((thread) => (
                        <Thread thread={thread}  />
                    
                ))}
                <div ref={observerTarget}>
                    {hasMore &&
                        <CircularProgress key={0} className="progress is-success is-radiusless" sx={{marginTop:"50px"}}/>}
                </div>
            </div>
            <div style={{ padding: "20px", position: "fixed", top: "90vh", width: "100%", display: "flex", justifyContent: "center", backgroundColor: "#F8F2E2" }}>
                <div style={{ width: "30%", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={linkToHome} variant="text" color="warning" sx={{ fontWeight: "bolder" }}>ホームへ戻る</Button>
                    <Button onClick={createNewThread} variant="contained" color="warning">新規作成</Button>
                </div>
            </div>
            
        </main>
    )
}