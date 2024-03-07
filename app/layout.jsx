import Header from '../components/Header'
import backgroundColor from '../styles/globals'
export const metadata = {
  title: '子育て掲示板',
  description: '子育てってほんとに大変！',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en" >
        <body style={{backgroundColor : backgroundColor}}>
        <Header/>
        {children}
        </body>
      </html>
  )
}
