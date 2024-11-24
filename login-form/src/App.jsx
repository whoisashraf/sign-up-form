import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordMatch = password === confirmPassword;
  const isValidEmail = validator.isEmail(email);
  const isValidPassword = validator.isAlphanumeric(password);
  const isValidLength = [name, surname, email, username, password].every(
    (field) => field.length >= 5,
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPassword && isValidEmail && isPasswordMatch === true) {
      console.log(name, surname, email, username, password, confirmPassword);
      alert("Successfully created user! ");
      setName("");
      setSurname("");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <div className="card p-5">
              <form onSubmit={handleSubmit}>
                <h2 className="is-size-2 mb-2 has-text-centered">Sign Up</h2>

                <div className="field is-horizontal">
                  <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={surname}
                        onChange={(e) => {
                          setSurname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="John12345"
                      required
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {!isValidPassword && (
                      <p className="help is-danger mb-2">
                        Password must contain both numbers and letters!
                      </p>
                    )}
                  </div>
                </div>

                {isValidPassword && (
                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                      {!isPasswordMatch && (
                        <p className="help is-danger">
                          Passwords do not match!
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control ">
                    <input
                      className="input"
                      type="email"
                      placeholder="johndoe@gmail.com"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    {!isValidEmail && (
                      <p className="help is-danger mb-2">
                        Enter a valid email address!
                      </p>
                    )}
                  </div>
                </div>

                {!isValidLength && (
                  <p className="help is-danger mb-2">
                    All fields must be at least 5 characters long.
                  </p>
                )}

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-fullwidth is-rounded btn-grad"
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <p className="has-text-centered my-5">
                  Or login with the below
                </p>

                <div className="columns has-text-centered is-gapless">
                  <div className="column">
                    <span className="icon has-text-link is-large">
                      <i className="fa fa-2x fa-facebook-official"></i>
                    </span>
                  </div>
                  <div className="column">
                    <span className="icon has-text-info is-large">
                      <i className=" fa fa-2x fa-twitter"></i>
                    </span>
                  </div>
                  <div className="column">
                    <span className="icon has-text-danger is-large">
                      <i className="fa fa-2x fa-instagram"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
