import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RouteLayout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <Outlet />
        {children}
    </div>
  )
}
