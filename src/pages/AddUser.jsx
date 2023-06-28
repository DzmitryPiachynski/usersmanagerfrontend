import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import 'react-datepicker/dist/react-datepicker.css'

function NavBar() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        birthday: "",
    })

    const { firstname, lastname, birthday } = user

    const onInputChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:8080/users", [user])
            .then(() => navigate("/"))
            .catch(err => {
                console.warn(err)
                alert('Cant get collections')
            })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register new user</h2>
                    <form onSubmit={event => onSubmit(event)}>
                        <div className="mb-3">
                            <label ntmlfor="Firstname" className="form-label">First Name</label>
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
                            <label ntmlfor="Lastname" className="form-label">Last Name</label>
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
                            <label ntmlfor="Birthday" className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="birthday"
                                value={birthday}
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
