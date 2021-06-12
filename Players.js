import Header from './Header'
import { Table } from 'react-bootstrap'
import bbm from './images/bbm.jpeg'
import bravo from './images/bravo.jpeg'
import dhoni from './images/dhoni.jpeg'
import h from './images/h.jpeg'
import hardik from './images/hardik.jpeg'
import malinga from './images/malinga.jpeg'
import mathus from './images/mathus.jpeg'
import morgon from './images/morgon.jpeg'
import pant from './images/pant.jpeg'
import pollard from './images/pollard.jpeg'
import rahul from './images/rahul.jpeg'
import raina from './images/raina.jpeg'
import watson from './images/watson.jpeg'
import virat from './images/virat.jpeg'
import raudu from './images/raudu.jpeg'
import { useHistory } from 'react-router-dom';
function Players() {
  const history = useHistory();
  function buy() {


    history.push('/Team')
  }

  return (
    <>
      <Header />
      <div>
        <div className="col-sm-10 offset-sm-1">

          <h2>PLAYERS List</h2>
          <br />

          <Table striped bordered hover variant="">
            <thead>
              <tr>
                <th>No.</th>
                <th> Name</th>
                <th> Image</th>
                <th>Price</th>
                <th>Type</th>
                <th>Country</th>
                <th>Buy</th>

              </tr>
            </thead>
            <tbody>

              <tr>
                <td>1</td>
                <td>Jasprit Singh Bumrah</td>
                <td><img style={{ width: 100 }} src={bbm} /></td>
                <td>1cr</td>
                <td>Bowler</td>
                <td>India</td>
                <td ><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dwayne Bravo</td>
                <td><img style={{ width: 100 }} src={bravo} /></td>
                <td>1.5cr</td>
                <td>All Rounder</td>
                <td>West Indies</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>


              </tr>
              <tr>
                <td>3</td>
                <td>Ms Dhoni</td>
                <td><img style={{ width: 100 }} src={dhoni} /></td>
                <td>2cr</td>
                <td>Batsman, Keeper</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>


              </tr>
              <tr>
                <td>4</td>
                <td>Steve Smith</td>
                <td><img style={{ width: 100 }} src={h} /></td>
                <td>1.5cr</td>
                <td>Batsman</td>
                <td>Australia</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>5</td>
                <td>Hardik Pandya</td>
                <td><img style={{ width: 100 }} src={hardik} /></td>
                <td>2cr</td>
                <td>All Rounder</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>6</td>
                <td>Lasith Malinga</td>
                <td><img style={{ width: 100 }} src={malinga} /></td>
                <td>80lac</td>
                <td>Bowler</td>
                <td>Sri Lanka</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>7</td>
                <td>Angelo Mathews</td>
                <td><img style={{ width: 100 }} src={mathus} /></td>
                <td>1cr</td>
                <td>All Rounder</td>
                <td>Sri Lanka</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>8</td>
                <td>Eoin Morgan</td>
                <td><img style={{ width: 100 }} src={morgon} /></td>
                <td>70 lac</td>
                <td>Batsman</td>
                <td>England</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>9</td>
                <td>Rishabh Pant</td>
                <td><img style={{ width: 100 }} src={pant} /></td>
                <td>3cr</td>
                <td>Batsman</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>10</td>
                <td>Kieron Pollard</td>
                <td><img style={{ width: 100 }} src={pollard} /></td>
                <td>2cr</td>
                <td>All Rounder</td>
                <td>West Indies</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>11</td>
                <td>KL Rahul</td>
                <td><img style={{ width: 100 }} src={rahul} /></td>
                <td>3cr</td>
                <td>Batsman</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>12</td>
                <td>Suresh Raina</td>
                <td><img style={{ width: 100 }} src={raina} /></td>
                <td>1.5cr</td>
                <td>Batsman</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>13</td>
                <td>Shane Watson</td>
                <td><img style={{ width: 100 }} src={watson} /></td>
                <td>1cr</td>
                <td>Batsman</td>
                <td>Australia</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>14</td>
                <td>Virat Kohli</td>
                <td><img style={{ width: 100 }} src={virat} /></td>
                <td>4cr</td>
                <td>Batsman</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
              <tr>
                <td>15</td>
                <td>Ambati Rayudu</td>
                <td><img style={{ width: 100 }} src={raudu} /></td>
                <td>1cr</td>
                <td>Batsman</td>
                <td>India</td>
                <td><span onClick={() => { history.push('/Team') }} className="Buy" >Buy</span></td>

              </tr>
            </tbody>

          </Table>
        </div>
      </div>
    </>
  )
}
export default Players;    