import React, { useEffect, useState } from 'react'
import './indianbank.css'

const Indianbank = () => {
  const [ifse, setIfse] = useState('')
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')


  useEffect(() => {
    if (query) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`)
      .then((response) => response.json())
      .then((Data) => {
        setIfse(Data)
        console.log(Data);


      })
      .catch((error) => console.error('Error fetching data:', error));
    }
  }, [query])

  const formclick = (e) => {
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className='mainbank'>
      <form onSubmit={formclick}>
        <input type="text" className='banksearch' value={search} placeholder='Enter Your IFSE Code' onChange={(e) => setSearch(e.target.value)} />
      </form>


<div className="div">
        {ifse ? (
          <div className="info">
            <ul>
              {Object.entries(ifse).map(([key, value]) => (
                <div className="fetch">
                <li key={key}>
                  <strong>{key}:</strong> {value !== null ? value : 'N/A'}
                </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          query && <div className="loading">Loading........</div>
        )}
      </div>
    </div>
  )
}

export default Indianbank
