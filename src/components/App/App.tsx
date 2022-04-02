import styles from './App.module.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BlogPage, HomePage, AboutPage, NotFoundPage } from '../Pages'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
