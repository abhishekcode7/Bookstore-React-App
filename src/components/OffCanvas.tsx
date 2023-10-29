import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Offcanvas, Stack } from "react-bootstrap"
import { formatCurrency } from "../util/formatCurrency";
import { useCart } from '../context/CartContext';
import { CartItem } from "./CartItem"
import storeItems from "../assets/bookData.json"

interface offCanvasProps {
  handleClose:Function,
  show:Boolean
}
const OffCanvas = (props:offCanvasProps) => {

  const cartContext = useCart()
  return (
    <>
    <Offcanvas show={props.show} onHide={props.handleClose} placement='end'>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartContext.cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartContext.cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvas