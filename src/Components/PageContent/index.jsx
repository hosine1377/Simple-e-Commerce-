import React from 'react'
import routes from '../Router'
import { useRoutes } from 'react-router-dom'
function PageContent() {
  const router = useRoutes(routes)
  return <div className="page-content">{router}</div>
}

export default PageContent
