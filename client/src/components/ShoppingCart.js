import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CartItem from './CartItem';


const ShoppingCart = (props) => {
  const items = props.items;
  const sumToPay = props.items?.reduce((sum,item) => sum + item.amount * item.price,0)

  const handleClose = () => {
    props.onClose();
  };

  const onPurchase = async () =>{
    const itemsToSave =  items?.map(item => ({id: item.id, amount: item.amount}));
    await fetch('http://localhost:4200/add-cart', {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    mode: 'cors',
    body:JSON.stringify({
      items: itemsToSave
    })})
    .catch(() => alert('אופס משהו השתבש'));
    props.clearCart();
    handleClose();
  }

  const ItemsList = () =>(
    <div>
    {
      items.map(product => 
        <CartItem 
        key={product.id} 
        product={product}
        addItemAmount={props.addItemAmount}
        />)
      }
      <h2>סה"כ לתשלום : {sumToPay}</h2>
      <Button onClick={onPurchase}>יאללה לרכוש</Button>
    </div>
  )

  return (
    <>
  <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          עגלת הקניות שלי
        </DialogTitle>
        <DialogContent>
          {
          items.length
          ?
          <ItemsList/>
          :
          <h2>העגלה ריקה</h2>
         }      
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
 
        </>
  );
  }

  export default ShoppingCart;