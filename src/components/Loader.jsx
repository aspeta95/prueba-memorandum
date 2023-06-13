import React from 'react'

const Loader = ({ isLoading }) => {
  return (<>
    {isLoading && <p>Loading...</p>}
  </>
  )
}

export default Loader