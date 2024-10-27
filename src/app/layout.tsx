import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProp = Readonly<{
  children?: ReactNode
}>

function RootLayout(prop: RootLayoutProp) {
  return (
    <html lang='en'>
      <body>
        {prop.children}
      </body>
    </html>
  )
}

export default RootLayout
export { metadata }