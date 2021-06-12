import Header from './Header'
import { Table } from 'react-bootstrap'

function Team() {
    return (
        <>
            <Header />
            <div>
                <div className="col-sm-10 offset-sm-1">

                    <h1>IPL  Team</h1>
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
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>

                    </Table>
                </div>
            </div>
        </>
    )
}
export default Team;