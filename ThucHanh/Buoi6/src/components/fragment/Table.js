import React from "react";
import Columns from "./Columns";
import Columns2 from "./Columns2";
import './Table.css';

const Table = (props) => {
    //Use fragment
    const user1 = {
        username: 'quanghai',
        fullName: 'Nguyen Quang Hai'
    }

    const user2 = {
        username: 'tuananh',
        fullName: 'Nguyen Tuan Anh'
    }

    return (
        // <>
        //     <div className="row1">
        //         Demo fragment
        //     </div>
        //     <div>
        //         why use fragment in ractjs?
        //     </div>
        // </>

        // <React.Fragment>
        //     <div className="row1">
        //         Demo fragment
        //     </div>
        //     <div>
        //         why use fragment in ractjs?
        //     </div>
        // </React.Fragment>

        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Full Name</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>congphuong</td>
                    <td>Nguyen Cong Phuong</td>
                </tr> */}
                <tr>
                    <Columns user={user1}/>
                    <Columns2 />
                </tr>
                {/* <tr>
                    <td>tuananh</td>
                    <td>Nguyen Tuan Anh</td>
                </tr> */}
                <tr>
                    <Columns user={user2} />
                </tr>
            </tbody>
        </table>
    )

}

export default Table;