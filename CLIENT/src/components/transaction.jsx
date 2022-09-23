import Table from 'react-bootstrap/Table';
import '../assets/styles/style.css'
import DropdownTransaction from './dropdown';

const style = {
  approved: {
    color: 'green'
  },
  inactive: {
    color: 'red'
  },
  pending: {
    color: "orange"
  }
}

function Transaction() {
  return (
            <>
              <h3 style={{ color: 'white' }} className="ps-5 pt-2 ms-5 mb-5">Incoming Transactions</h3>
              <Table striped bordered hover variant="dark" className='tblTransaction m-auto'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Users</th>
                  <th>Bukti Transfer</th>
                  <th>Remaining Active</th>
                  <th>Status User</th>
                  <th>Status Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Radif Ganteng</td>
                  <td>bca.jpg</td>
                  <td>26 / Hari</td>
                  <td style={style.approved}>Active</td>
                  <td style={style.approved}>Approved</td>
                  <td><DropdownTransaction /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Haris Rahman</td>
                  <td>bni.jpg</td>
                  <td>26 / Hari</td>
                  <td style={style.approved}>Active</td>
                  <td style={style.approved}>Approved</td>
                  <td><DropdownTransaction /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Amin Subagiyo</td>
                  <td>permata.jpg</td>
                  <td>0 / Hari</td>
                  <td style={style.inactive}>Not Active</td>
                  <td style={style.inactive}>Cancel</td>
                  <td><DropdownTransaction /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Haris Astina</td>
                  <td>permata.jpg</td>
                  <td>0 / Hari</td>
                  <td style={style.inactive}>Not Active</td>
                  <td style={style.pending}>Pending</td>
                  <td><DropdownTransaction /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Aziz Oni On</td>
                  <td>bi.jpg</td>
                  <td>0 / Hari</td>
                  <td style={style.inactive}>Not Active</td>
                  <td style={style.pending}>Pending</td>
                  <td><DropdownTransaction /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Sugeng No Pants</td>
                  <td>bni.jpg</td>
                  <td>0 / Hari</td>
                  <td style={style.inactive}>Not Active</td>
                  <td style={style.pending}>Pending</td>
                  <td><DropdownTransaction /></td>
                </tr>
              </tbody>
            </Table>
          </>
  );
}

export default Transaction;