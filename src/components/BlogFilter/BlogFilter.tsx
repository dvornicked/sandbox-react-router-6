import { ChangeEvent, FormEvent, useState } from 'react'
import { IBlogFilter } from './BlogFilter.props'

export const BlogFilter = ({
  setSearchParams,
  postQuery,
  latest,
}: IBlogFilter) => {
  const [search, setSearch] = useState(postQuery)
  const [checked, setChecked] = useState(latest)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    interface ISearchParams {
      query?: string
      latest?: boolean
    }
    const query = e.currentTarget.search.value
    const isLatest = e.currentTarget.latest.checked
    const searchParams: ISearchParams = {}
    if (query.length) searchParams.query = query
    if (isLatest) searchParams.latest = true
    setSearchParams(searchParams)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        name='search'
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <label htmlFor='latest'>
        new
        <input
          type='checkbox'
          name='latest'
          checked={checked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChecked(e.target.checked)
          }
        />
      </label>
      <input type='submit' name='Search' />
    </form>
  )
}
