
import './App.css';
import dummyData from './Api'
function App() {
  return (
    <div className="App">
      <table className='table' >
        <tr >
          <th>Invoice Number</th>
          <th>Company Name</th>
          <th>Invoice Date</th>
          <th>Total Bill</th>
        </tr>
        {
          dummyData.map((data) => <>
            <tr>
              <td key={data.InvoiceNumber}>{data.InvoiceNumber}</td>
              <td key={data.InvoiceNumber}>{data.CompanyName}</td>
              <td key={data.InvoiceNumber}>{data.InvoiceDate}</td>
              <td key={data.InvoiceNumber}> {data.TotalBill}</td>
            </tr>
          </>
          )
        }

      </table>
    </div >
  );
}

export default App;
