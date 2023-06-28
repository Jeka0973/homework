import {useParams} from 'react-router-dom'
import Card from './Card'

function Cards() {
  const {id} = useParams()
  console.log(`id is ${id}`)
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default Cards
