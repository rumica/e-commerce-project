import React from 'react'

const Basket = ({ onAdd, onRemove, basketItems }) => {

  const totalPrice = basketItems.reduce((acc, item) => {
      return acc + item.price * item.qty
  }, 0)

  return (
    <div>
        {basketItems.length === 0 && <div>There is no product in the basket</div>}

        {basketItems.map((item) => (
            <>
                <div key={item.id}>
                    <div>{item.title}</div>
                </div>
                <button onClick={() => onAdd(item)}>+</button>
                <button onClick={() => onRemove(item)}>-</button>

                <div>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </>
        ))}

        <div>
            {totalPrice.toFixed(2)}
        </div>

    </div>
  )
}

export default Basket