import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Description, DetailContainer, DetailImg, DetailTitle, InfoPart } from './Detail.style' 
import img from '../../assets/book.jpg'

const Detail = () => {
 
    const {state} = useLocation() 
    const {id} = useParams() 
    return ( 
    <DetailContainer>  
      <DetailTitle>{state.volumeInfo.title}</DetailTitle> 
      <DetailImg> 
        <img src={state.volumeInfo.imageLinks?.smallThumbnail || img} alt={state.volumeInfo.title} /></DetailImg> 
      <Description>{state.volumeInfo.description}</Description> 
      <InfoPart> 
        <p>{state.volumeInfo.authors}</p>
        <p>{state.volumeInfo.publishDate}</p>
        <p>{state.volumeInfo.language}</p>
      </InfoPart>

    </DetailContainer>
  )
}

export default Detail