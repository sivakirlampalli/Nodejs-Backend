'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import './styles.css'

export default function HomePage() {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/users/me')
        const data = await res.json()
        if (res.ok && data?.user?.email) {
          setUserEmail(data.user.email)
        }
      } catch (err) {
        console.error('Error fetching user:', err)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!userEmail && <h1>Welcome to your new project.</h1>}
        {userEmail && <h1>Welcome back, {userEmail}</h1>}

        <div className="links">
          <a
            className="admin"
            href="/admin" // static path to admin panel
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="docs"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>

      <div className="footer">
        <p>Update this page by editing</p>
        <a
          className="codeLink"
          href="vscode://file/src/app/(frontend)/page.tsx"
        >
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
