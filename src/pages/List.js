import { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

// import './List.css'


function List() {
  const [ list, setList ] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'GET',
        url: "https://api.matsurihi.me/mltd/v1/cards"
      })
      setList(data.list)
    })()
  }, [])
      
  return (
    <table className='List'>
      <tbody>
        {list.map(o => {
          return (<Item item={o} key={o.no}/>)
        })}
      </tbody>
    </table>
  )
}

export default List