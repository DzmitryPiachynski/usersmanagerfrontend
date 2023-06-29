import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

function Home() {

    const [users, setUsers] = useState([{
        firstname: "",
        lastname: "",
        birthday: "",
    }])
    useEffect(() => {
        loadUsers()
    },[])

    const {id} = useParams();

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

    const deleteUser = async (id) =>{
        const result = await axios.delete(`http://localhost:8080/users/${id}`)
        loadUsers()
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
                        <th scope="col">Date of Birth</th>
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
                                <td>{user.birthday}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                          to={`/edituser/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(user.id)}>
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