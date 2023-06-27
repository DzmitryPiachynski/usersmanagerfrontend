import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from "react"
import axios from "axios"

function Home() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
        console.log(users);
    },[])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

    return (
        <div className="container">
            <div className="py-4">
                <Table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr  key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className="btn btn-outline-info mx-2">
                                        View
                                    </button>
                                    <button className="btn btn-primary mx-2">
                                        Edit
                                    </button>
                                    <button className="btn btn-danger mx-2">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Home;