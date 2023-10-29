import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export type Book = {
  name: string,
  genre: string,
  author_name: string,
}

interface bookProps {
  book: Book,
}

const Book:FC<bookProps> = ({ book }): JSX.Element => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1601640365825-66327247a242?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Book