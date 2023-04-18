import Navbar from "./NavScrollExample";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function ViewItem({ data, onDelete, onUpdate }){
    
    return(
        // <div>
        //     <Navbar />
        //     return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item Code</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th>Selling Price</th>
          <th>Supplier</th>
          <th>Manufacturing Country</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.itemCode}</td>
            <td>{item.itemName}</td>
            <td>{item.quantity}</td>
            <td>{item.cost}</td>
            <td>{item.sellingPrice}</td>
            <td>{item.supplier}</td>
            <td>{item.manCountry}</td>
            <td>
              {/* <Button variant="outline-primary" onClick={() => onUpdate(item)}>
                Update
              </Button>{' '}
              <Button variant="outline-danger" onClick={() => onDelete(item.id)}>
                Delete
              </Button>{' '} */}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

    //     </div>
    // );
}