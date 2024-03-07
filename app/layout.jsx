import Header from '../components/Header'
import '../styles/globals.css'
import backgroundColor from '../styles/globals'

export const metadata = {
  title: 'Lulla',
  description: '子育てってほんとに大変！',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en" >
        <body style={{backgroundColor : `#F8F2E2`}}>
        <Header/>
        {children}
        </body>
      </html>
  )
}
