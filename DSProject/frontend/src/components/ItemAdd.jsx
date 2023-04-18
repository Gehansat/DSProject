import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



// const validationSchema = Yup.object({
//     name: Yup.string().required("Required Name"),
    
//   });

const validationSchema = Yup.object({
  name: Yup.string().required('Required Name'),
 
});

export default function ItemAdd() {
    const [itemCode, setItemCode] = useState('');
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [cost, setCost] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [supplier, setSupplier] = useState('');
    const [manCountry, setManCountry] = useState('');

  function AddItem(event) {
    event.preventDefault();
    console.log(itemCode, itemName, quantity, cost, sellingPrice, supplier, manCountry);
    // Add code here to send the form data to the server

    const response = axios.post("http://localhost:8070/StockItems/add", { 
    itemCode: itemCode,
    itemName: itemName,
    quantity: quantity,
    cost: cost,
    sellingPrice: sellingPrice,
    supplier: supplier,
    manCountry: manCountry})       
    
    .then((response) => {
      toast.success("Successfully added");
    }
    ).catch((error) => {
      toast.error("Error");
    })


  }

  return (
    <>
      <form validationSchema={validationSchema} onSubmit={AddItem}>
        <FloatingLabel controlId="itemCode" label="Item Code" className="mb-3">
          <Form.Control type="text" placeholder="Enter item code" name="name" onChange={(event) => setItemCode(event.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="itemName" label="Item Name" className="mb-3">
          <Form.Control type="text" placeholder="Enter item name" onChange={(event) => setItemName(event.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
          <Form.Control type="number" placeholder="Enter quantity" onChange={(event) => setQuantity(event.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="cost" label="Cost" className="mb-3">
          <Form.Control type="number" placeholder="Enter cost" onChange={(event) => setCost(event.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="sellingPrice" label="Selling Price" className="mb-3">
          <Form.Control type="number" placeholder="Enter selling price" onChange={(event) => setSellingPrice(event.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="supplier" label="Supplier" className="mb-3">
          <Form.Control type="text" placeholder="Enter supplier" onChange={(event) => setSupplier(event.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="manCountry" label="Manufacturing Country" className="mb-3">
          <Form.Control type="text" placeholder="Enter manufacturing country" onChange={(event) => setManCountry(event.target.value)}/>
        </FloatingLabel>

        <Button type="submit" variant="outline-info">
          Submit
        </Button>{' '}
      </form>
    </>
  );
}
