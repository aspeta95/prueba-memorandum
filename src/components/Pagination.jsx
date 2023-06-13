import React, { useContext} from 'react'
import { FiltersContext } from '../context/filters'

const Pagination = ({onChangePrevPage, onChangeNextPage}) => {
    const {filters} = useContext(FiltersContext)

  return (
    <section className="max-w-5xl mx-auto flex justify-center items-center">
        <button
          className="bg-gray-300 rounded-xl py-2 px-4"
          onClick={() => onChangePrevPage()}
        >
          -
        </button>
        | {filters.page} |
        <button
          className="bg-gray-300 rounded-xl py-2 px-4"
          onClick={() => onChangeNextPage()}
        >
          +
        </button>
      </section>
  )
}

export default Pagination