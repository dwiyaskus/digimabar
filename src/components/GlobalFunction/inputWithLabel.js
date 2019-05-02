import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, TextArea } from 'semantic-ui-react';

const input = (
  placeholder,
  inputStyles,
  handleChange,
  handleClick,
  handleBlur,
  value,
  name,
  type,
  icon,
  iconPosition,
  action,
  transparent,
  disabled,
  fluid,
  labelInput,
  labelPosition,
  objectname,
  size
) => (
  <Input
    placeholder={placeholder}
    style={inputStyles}
    onChange={handleChange}
    onClick={handleClick}
    value={value}
    name={name}
    type={type}
    icon={icon}
    iconPosition={iconPosition}
    action={action}
    transparent={transparent}
    disabled={disabled}
    fluid={fluid}
    label={labelInput}
    labelPosition={labelPosition}
    objectname={objectname}
    size={size}
    onBlur={handleBlur}
  />
);

const select = (
  placeholder,
  inputStyles,
  handleChange,
  value,
  name,
  options,
  loading,
  disabled,
  fluid,
  objectname,
  multiple,
  selectOnBlur
) => (
  <Select
    placeholder={placeholder}
    style={inputStyles}
    options={options}
    onChange={handleChange}
    value={value}
    name={name}
    search
    loading={loading}
    disabled={disabled}
    fluid={fluid}
    objectname={objectname}
    multiple={multiple}
    selectOnBlur={selectOnBlur}
  />
);

const textArea = (
  placeholder,
  inputStyles,
  handleChange,
  value,
  name,
  disabled,
  objectname
) => (
  <TextArea
    placeholder={placeholder}
    style={inputStyles}
    onChange={handleChange}
    value={value}
    name={name}
    disabled={disabled}
    objectname={objectname}
  />
);

const inputWithLabel = props => {
  const {
    label,
    inline,
    required,
    labelStyles,
    inputStyles,
    placeholder,
    handleChange,
    handleClick,
    handleBlur,
    value,
    name,
    type,
    validate,
    options,
    loading,
    icon,
    iconPosition,
    action,
    transparent,
    disabled,
    fluid,
    labelInput,
    labelPosition,
    objectname,
    multiple,
    selectOnBlur,
    size,
  } = props;

  const validation = { error: false, message: '' };

  const textStyles = { color: 'black' };

  const newLabelStyles = { ...labelStyles };

  const newInputStyles = { ...inputStyles };

  if (name && validate) {
    if (validate[name] !== undefined) {
      validation.error = validate[name].error;
      validation.message = validate[name].message;
      if (validation.error) {
        textStyles['color'] = '#9f3a38';
        newLabelStyles['color'] = '#9f3a38';
        newInputStyles['borderColor'] = '#e0b4b4';
        newInputStyles['background'] = '#fff6f6';
        newInputStyles['color'] = '#9f3a38';
      }
    }
  }
  if (inline) {
    textStyles['marginLeft'] = `${labelStyles.width}`;
  }

  return (
    <Form.Field inline={inline} required={required} error={validation.error}>
      <label style={newLabelStyles}>{label}</label>
      {type === 'select'
        ? select(
            placeholder,
            newInputStyles,
            handleChange,
            value,
            name,
            options,
            loading,
            disabled,
            fluid,
            objectname,
            multiple,
            selectOnBlur
          )
        : type === 'textArea'
        ? textArea(
            placeholder,
            newInputStyles,
            handleChange,
            value,
            name,
            disabled,
            objectname
          )
        : input(
            placeholder,
            newInputStyles,
            handleChange,
            handleClick,
            handleBlur,
            value,
            name,
            type,
            icon,
            iconPosition,
            action,
            transparent,
            disabled,
            fluid,
            labelInput,
            labelPosition,
            objectname,
            size
          )}
      {validation.error ? (
        <span style={textStyles}>{validation.message}</span>
      ) : null}
    </Form.Field>
  );
};

inputWithLabel.propTypes = {
  label: PropTypes.string,
  inline: PropTypes.bool,
  required: PropTypes.bool,
  labelStyles: PropTypes.object,
  inputStyles: PropTypes.object,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.object,
  options: PropTypes.array,
  loading: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  action: PropTypes.object,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  labelInput: PropTypes.object,
  labelPosition: PropTypes.string,
  objectname: PropTypes.string,
  multiple: PropTypes.bool,
  selectOnBlur: PropTypes.bool,
  size: PropTypes.string,
};

export default inputWithLabel;
