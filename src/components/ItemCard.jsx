import React, { useContext } from 'react'
import { FiltersContext } from '../context/filters';

const ItemCard = ({ items, onSelectItem }) => {
    const { filters } = useContext(FiltersContext)

  return (<>
    {items &&
        items.slice(filters.firstIndex, filters.lastIndex).map((entry) => {
          return (
            <div
              key={entry.id}
              className="hover:opacity-60 hover:border-white hover:border-1 hover:cursor-pointer"
              onClick={() => onSelectItem(entry)}
            >
              <img
                src={entry.images["Poster Art"].url}
                alt={entry.description}
              />

              <p>
                <b>{entry.title}</b>
              </p>
            </div>
          );
        })}
  </>
  )
}

export default ItemCard