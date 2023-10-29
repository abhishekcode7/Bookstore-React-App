import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export type typeAuthor = {
  author_name: string,
  books:string[]
}

interface authorProps {
  author: typeAuthor,
}

const Author:FC<authorProps> = ({ author }): JSX.Element => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/450px-Franz_Kafka%2C_1923.jpg"/>
      <Card.Body>
        <Card.Title className='text-center'>{author.author_name}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default Author