import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Next.js + TypeScriptのサンプルサイト' }: Props) => (
  <div>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>© 2021 Next.js + TypeScript Sample</span>
    </footer>
  </div>
)

export default Layout
