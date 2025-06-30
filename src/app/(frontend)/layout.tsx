import React from 'react'
import '@/styles/globals.css'

export const metadata = {
  description: 'Описание главной страницы',
  title: 'Главная страница',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ru">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
