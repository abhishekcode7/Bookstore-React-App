import { Button, Stack } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import storeItems from "../assets/bookData.json"
import { formatCurrency } from "../util/formatCurrency"
type CartItemProps = {
  id: string
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const cartContext = useCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.url}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => cartContext.removeItemCount(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}