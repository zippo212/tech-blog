import Header from '../../components/Header'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {/* banner */}
        <Header/>
        {children}
      </body>
    </html>
  )
}
