"use client"

import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../lib/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CircularProgress } from '@mui/material'


// コンテキストを作成
const AuthContext = React.createContext(undefined)
// const router = useRouter()
export function useAuth() {
  // useContextで作成したコンテキストを呼び出す
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 第2引数に[]を指定して、初回レンダリングのみ関数を実行させる
  useEffect(() => {
    // onAuthStateChangedでログインの状態を監視する
    const unsubscribe = onAuthStateChanged(auth, async user => {
      // ユーザー情報をcurrentUserに格納する
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser
  }

  // ローディング中は何も表示しないか、ローディング表示をする
  if (loading) {
    return <div style={{width:"full", height:"90vh" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <CircularProgress/>
    </div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {/* ユーザーがログインしていない場合、ログインページにリダイレクト */}
      {!currentUser ? (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        // ログインしている場合、childrenを表示
        children
      )}

    </AuthContext.Provider>
  )
}
