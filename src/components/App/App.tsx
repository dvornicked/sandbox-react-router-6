import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, BlogPage, PostPage, AboutPage, NotFoundPage } from '../Pages'
import { Layout } from '../Layout/Layout'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:id' element={<PostPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
