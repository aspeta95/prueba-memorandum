import React from 'react'

const Error = ({ error }) => {
  return (
    <>
    {error && <p>Oops, something went wrong...</p>}
    </>
  )
}

export default Error