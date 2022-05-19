import React from 'react'
import '../../style.css'

const Basket = ({ onAdd, onRemove, basketItems }) => {

  const totalPrice = basketItems.reduce((acc, item) => {
      return acc + item.price * item.qty
  }, 0)

  return (
    <div className='basket-page'>
        {basketItems.length === 0 && <div>There is no product in the basket.</div>}
        <div className='basket-container'>
            <div>
                {basketItems.map((item) => (
                    <div className='basket-detail-container' key={item.id}>
                        <div className='img-title'>
                            <div className='basket-image'><img src={item.image} alt="" /></div>
                            <p>{item.title}</p>
                        </div>
                        <div className='resume'>
                            <div className='total-price'>
                            ${item.price.toFixed(2)}
                            </div>
                            <div className='amount-container'>
                                <button onClick={() => onRemove(item)}>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => onAdd(item)}>+</button>
                            </div>
                            <div className='basket-price'>
                                ${(item.price.toFixed(2) * item.qty).toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='total-price-container'>
                <p>TOTAL</p>
                <h6>
                    ${totalPrice.toFixed(2)}
                </h6>
                <button>BUY NOW</button>
            </div>
        </div> 
    </div>
  )
}

export default Basket