import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'
// import sanitizeHtml from 'sanitize-html'
// import ReplyList from './ReplyList'

import './Detail.css'

function Detail() {
  const { no } = useParams(`/detail/:id`)
  const [ document, setDocument ] = useState({})

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.matsurihi.me/mltd/v1/cards/${no}`
      })
      if (data.success) {
        setDocument(data.document)
      }
    })()
  }, [no])

  return (
    <div className="detail-wrap">
      <div className='image'>
        <div className='name'>{document.name}</div>
        <div className='author'>{document.author}</div>
      </div>
    </div>
  )
}

export default Detail