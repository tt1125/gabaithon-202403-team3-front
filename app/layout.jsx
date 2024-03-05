export const metadata = {
  title: '子育て掲示板',
  description: '子育てってほんとに大変！',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
