import { useState, useContext} from 'react'
import { FiltersContext } from '../context/filters';

export function usePagination({items}){
    const { filters, setFilters } = useContext(FiltersContext)

    const handlePrevPage = () => {
        if (filters.page === 1) return;
    
        
        setFilters((prev) => ({
          ...prev,
          lastIndex: prev.lastIndex - prev.itemNumber,
          firstIndex: prev.firstIndex - prev.itemNumber,
          page: prev.page - 1
        }));
      };
      const handleNextPage = () => {
        if (Math.ceil(filters.page * filters.itemNumber) >= items.length) return;
        
        setFilters((prev) => ({
          ...prev,
          lastIndex: (prev.page + 1) * prev.itemNumber,
          firstIndex: prev.firstIndex + prev.itemNumber,
          page: prev.page + 1
        }));
      };

    return {handlePrevPage, handleNextPage, filters, setFilters}
}
