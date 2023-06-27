import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavBar() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        age: 0
    })

    const { firstname, lastname, age } = user

    const onInputChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault()
        console.log(user);
        await axios.post("http://localhost:8080/users", [user])
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register new user</h2>
                    <form onSubmit={event => onSubmit(event)}>
                        <div className="mb-3">
                            <label ntmlfor="Name" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your First Name ..."
                                name="firstname"
                                value={firstname}
                                onChange={event => onInputChange(event)}
                            />
                        </div>
                        <div className="mb-3">
                            <label ntmlfor="Name" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Surname ..."
                                name="lastname"
                                value={lastname}
                                onChange={event => onInputChange(event)}
                            />
                        </div>
                        <div className="mb-3">
                            <label ntmlfor="Name" className="form-label">Full Age</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your age ..."
                                name="age"
                                value={age}
                                onChange={event => onInputChange(event)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">>Submit</button>
                        <Button variant="outline-danger mx-2" href="/">Go back</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
