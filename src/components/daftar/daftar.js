import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import InputWithLabel from '../GlobalFunction/inputWithLabel';
import PropTypes from 'prop-types';
const Daftar = props => {
  const {
    open,
    close,
    handleRegisterUser,
    register,
    handleChangeUser,
    loading,
    typePassword,
    onClickPassIcon,
    passwordIcon,
    typeConfirmPassword,
    onClickConfirmPassIcon,
    confirmPasswordIcon,
    errorInformation,
  } = props;
  return (
    <Modal open={open} onClose={close} size="tiny">
      <Modal.Header>Register </Modal.Header>
      <Modal.Content>
        <p>Please fill the data correctly, for the authentication user</p>
        <Form>
          <InputWithLabel
            inline={false}
            type="text"
            name="name"
            value={register.name}
            placeholder="Name"
            handleChange={handleChangeUser}
            validate={errorInformation}
          />
          <InputWithLabel
            inline={false}
            type="text"
            name="username"
            value={register.username}
            placeholder="Username"
            handleChange={handleChangeUser}
            validate={errorInformation}
          />
          <InputWithLabel
            inline={false}
            type="text"
            name="email"
            value={register.email}
            placeholder="Email"
            handleChange={handleChangeUser}
            validate={errorInformation}
          />
          <InputWithLabel
            inline={false}
            type={typePassword}
            name="password"
            value={register.password}
            placeholder="Password"
            handleChange={handleChangeUser}
            validate={errorInformation}
            action={
              <Button
                name="password"
                icon={passwordIcon}
                onClick={onClickPassIcon}
                tabIndex={1}
                type="button"
              />
            }
          />
          <InputWithLabel
            inline={false}
            type={typeConfirmPassword}
            name="confirmPassword"
            value={register.confirmPassword}
            placeholder="Confirm Password"
            handleChange={handleChangeUser}
            validate={errorInformation}
            action={
              <Button
                name="confirmPassword"
                icon={confirmPasswordIcon}
                onClick={onClickConfirmPassIcon}
                tabIndex={1}
                type="button"
              />
            }
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          icon="cancel"
          labelPosition="right"
          content="Cancel"
          onClick={close}
        />
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Register"
          onClick={handleRegisterUser}
          loading={loading}
        />
      </Modal.Actions>
    </Modal>
  );
};

Daftar.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  handleRegisterUser: PropTypes.func,
  register: PropTypes.object,
  handleChangeUser: PropTypes.func,
  loading: PropTypes.bool,
  typePassword: PropTypes.string,
  onClickPassIcon: PropTypes.func,
  passwordIcon: PropTypes.string,
  typeConfirmPassword: PropTypes.string,
  onClickConfirmPassIcon: PropTypes.func,
  confirmPasswordIcon: PropTypes.string,
  errorInformation: PropTypes.object,
};

export default Daftar;
