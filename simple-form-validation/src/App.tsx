import { useRef } from "react";
import * as Yup from "yup";

function App() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validate();
  }

  const validate = () => {
    if (!usernameInputRef.current
          || !emailInputRef.current
          || !passwordInputRef.current
          || !password2InputRef.current) {
      return;
    }

    const usernameValue = usernameInputRef.current.value.trim();
    const emailValue = emailInputRef.current.value.trim();
    const passwordValue = passwordInputRef.current.value.trim();
    const password2Value = password2InputRef.current.value.trim();

    if (usernameValue === '') {
      setErrorFor(usernameInputRef.current, 'Username cannot be blank');
    } else {
      setSuccessFor(usernameInputRef.current);
    }

    if (emailValue === '') {
      setErrorFor(emailInputRef.current, 'Email cannot be blank');
    } else if (!Yup.string().email().isValidSync(emailValue)) {
      setErrorFor(emailInputRef.current, 'Email is not valid');
    } else {
      setSuccessFor(emailInputRef.current);
    }

    if (passwordValue === '') {
      setErrorFor(passwordInputRef.current, 'Password cannot be blank');
    } else {
      setSuccessFor(passwordInputRef.current);
    }

    if (password2Value === '') {
      setErrorFor(password2InputRef.current, 'Confirm password cannot be blank');
    } else if (passwordValue !== password2Value) {
      setErrorFor(password2InputRef.current, 'Passwords does not match');
    } else {
      setSuccessFor(password2InputRef.current);
    }

  };

  const setErrorFor = (input: HTMLInputElement, errorMessage: string) => {
    const formControl = input.parentElement;
    const small = formControl?.querySelector('small');

    if (small) {
      small.innerText = errorMessage;
    }

    if (formControl) {
      formControl.className = 'form-control error';
    }
  }

  const setSuccessFor = (input: HTMLInputElement) => {
    const formControl = input.parentElement;

    if (formControl) {
      formControl.className = 'form-control success';
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <form action="" className="form" id="form" onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="iamacoderguy" id="username" ref={usernameInputRef}/>
          <i className="fa fa-check-circle"></i>
          <i className="fa fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="iamacoderguy@gmail.com" id="email" ref={emailInputRef}/>
          <i className="fa fa-check-circle"></i>
          <i className="fa fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" ref={passwordInputRef}/>
          <i className="fa fa-check-circle"></i>
          <i className="fa fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" id="password2" ref={password2InputRef}/>
          <i className="fa fa-check-circle"></i>
          <i className="fa fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
