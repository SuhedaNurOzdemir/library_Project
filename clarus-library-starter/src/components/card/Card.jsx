import React from 'react'
import { CardButton, CardContainer, CardHeader, CardImg } from './Card.style' 
import img from '../../assets/book.jpg'
import { useNavigate } from 'react-router-dom'

const Card = ({item}) => { 
  const navigate = useNavigate()
  return (
    <div> 
      <CardContainer> 
        <CardHeader>{item.volumeInfo.title}</CardHeader> 
        <CardImg src={item.volumeInfo.imageLinks?.smallThumbnail || img}/> 
        <CardButton onClick={() => navigate(`/detail/${item.id}`, {state:item})}>View More</CardButton>
      </CardContainer>
    </div> 
  )
}

export default Card