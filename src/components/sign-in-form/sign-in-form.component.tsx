import React, { useEffect, useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { selectorCurrentUser } from "../../store/user/user.selector";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectorCurrentUser);
  const navigate = useNavigate();
  const { email, password } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.USER_DELETED:
          alert("no user associated with this email");
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("incorrect password for email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPE_CLASS.inverted}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASS.google}
            onClick={SignInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
