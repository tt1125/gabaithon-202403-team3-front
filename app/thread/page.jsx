"use client"

import { Button } from "@mui/material";
import Thread from "../../components/thread";
import { useEffect, useRef, useState } from "react";

export default function thread() {

    const [threads, setThreads] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const observerTarget = useRef(null);

    const loadThread = async (page) => {
        const URL = `https://gorest.co.in/public/v2/users?&page=${page}`;

        // fetch(URL)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setThreads([...threads, ...data]);
        // })

        const response = await fetch(URL);
        const threadsData = await response.json();
        console.log(threadsData)
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
                        <progress key={0} className="progress is-success is-radiusless" />}
                </div>
            </div>
            <div style={{ padding: "20px", position: "fixed", top: "90vh", width: "100%", display: "flex", justifyContent: "center", backgroundColor: "#F8F2E2" }}>
                <div style={{ width: "30%", display: "flex", justifyContent: "space-between" }}>
                    <Button variant="text" color="warning" sx={{ fontWeight: "bolder" }}>ホームへ戻る</Button>
                    <Button variant="contained" color="warning">新規作成</Button>
                </div>
            </div>
        </main>
    )
}