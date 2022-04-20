import { useNavigate } from 'react-router-dom'

import './Item.css'

function Item({ item }) {
  const navigate = useNavigate()
  function goRead() {
    navigate(`/detail/${item.id}`)
  }
  return (
    <tr onClick={goRead}>
      <td className='rarity'>{item.rarity}</td>
      <td className='name'>{item.name}</td>
      <td className='idolType'>{item.idolType}</td>
      <td className='attribute'>{item.centerEffect.attribute}</td>    
      <td className='effectId'>{item.skill.effectId}</td>
      <td className='interval'>{item.skill.interval}</td>
    </tr>
  )
}

export default Item