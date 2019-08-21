import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';

const modalAlert = props => (
  <Modal
    dimmer="blurring"
    inverted
    open={props.openModal}
    onClose={props.handleClose}
    size="mini"
    closeOnDimmerClick={false}
  >
    <Modal.Header>{props.header}</Modal.Header>
    <Modal.Content>
      <h5>{props.content}</h5>
    </Modal.Content>
    <Modal.Actions>
      <Button positive onClick={props.handleClose}>
        {props.nameButton ? props.nameButton : 'OK'}
      </Button>
    </Modal.Actions>
  </Modal>
);

modalAlert.propTypes = {
  openModal: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  nameButton: PropTypes.string,
  isArrayContentAlert: PropTypes.bool,
};

export default modalAlert;
