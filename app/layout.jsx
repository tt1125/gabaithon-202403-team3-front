import Header from '../components/Header'
import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext'

export const metadata = {
  title: 'Lulla',
  description: '子育てってほんとに大変！',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en" >
      <body style={{ backgroundColor: `#F8F2E2` }}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>

  )
}
