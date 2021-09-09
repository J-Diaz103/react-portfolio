import React, { useState } from "react";

import { validateEmail } from '../../utils/helpers';

const Contact = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };
    return (
        <div>
            <div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
                <div class="card-header">Contact Me</div>
                <div class="card-body">
                    <p class="card-text">To get in touch with me send me a message and your Information and I'll be sure to get back to you ass soon as possible!</p>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Name"
                                defaultValue={name}
                                onBlur={handleChange}
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                defaultValue={email}
                                onBlur={handleChange}
                            />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Message</label>
                            <textarea
                                class="form-control"
                                id="exampleTextarea"
                                rows="3"
                                defaultValue={message}
                                onBlur={handleChange}
                            />
                        </div>
                        {errorMessage && (
                            <div>
                                <p >{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit" class="btn btn-outline-warning">Submit</button>


                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;
