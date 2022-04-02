import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BlogPage, HomePage, AboutPage, NotFoundPage } from '../Pages'
import { Layout } from '..'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
