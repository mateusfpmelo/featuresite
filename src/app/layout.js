import "./globals.css"


export const metadata = {
  title: "🚀 Site :)",
  description: "Site desenvolvido por Mateus Melo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
