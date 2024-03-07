import Header from '../components/Header'
import '../styles/globals.css'
<<<<<<< HEAD
import backgroundColor from '../styles/globals'
=======

>>>>>>> 5ecbd54c0e787f816c5610572cc88a0bfa55e16c
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
