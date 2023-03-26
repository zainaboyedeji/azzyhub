import React, { useState, useEffect } from 'react';
import InputField from "../../../ui/InputField/inputField";
import "./SubscribeModal.scss";

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const handleSubmit = (e) => {
        console.log('clicked')
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
        console.log('submitted')
    }

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="mc__title">
                {status === "success"
                    ? "Success!"
                    : "Join our email list for future updates."
                }
            </h3>

            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <p>SUBSCRIBE and get 10% off your first order</p>
            <p>Be the first to know about sales, promotions and free products.</p>
            <div className="mc__field-container">
                <InputField
                    label="First Name"
                    onChangeHandler={setFirstName}
                    type="text"
                    value={firstName}
                    placeholder="Jane"
                    isRequired
                />
                <InputField
                    label="Last Name"
                    onChangeHandler={setLastName}
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    isRequired
                />
                <InputField
                    label="Email"
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    isRequired
                />
            </div>
            <InputField
                label="subscribe"
                type="submit"
                formValues={[email, firstName, lastName]}
            />
        </form>

    );
};

export default CustomForm;

