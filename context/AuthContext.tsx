"use client"
import { createContext, useState, useContext, useEffect, ReactNode } from 'react'
// import { auth } from '@/lib/Firebase'
import Login from '../app/login/page'

const AuthContext = createContext({
  user: undefined,
})

export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children} ) {
  const [user, setUser] = useState(true)

  // useEffect(() => {
  //   // // ログイン状態を監視し、変化があったら発動
  //   // const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
  //   //   console.log('ログイン状態の変化を検知')
  //   //   if (firebaseUser) {
  //   //     const userInfo = await userUseCase.getUserInfo(firebaseUser.uid)
  //   //     setUser(userInfo)
  //   //   } else {
  //   //     // ログインしていない場合、ユーザー情報を空にする
  //   //     setUser(null)
  //   //   }
  //   // })
  //   // // このコンポーネントが不要になったら監視を終了する
  //   // return unsubscribe
  // }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {user ? children : <Login /> }
    </AuthContext.Provider>
  )
}
