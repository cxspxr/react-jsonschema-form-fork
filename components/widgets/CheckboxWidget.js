import React from 'react';
import PropTypes from 'prop-types';
import DescriptionField from '../fields/DescriptionField';

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onBlur,
    onFocus,
    onChange,
  } = props;
  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      {schema.description && (
        <DescriptionField description={schema.description} />
      )}
      <label>
        <input
          type="checkbox"
          id={id}
          checked={typeof value === 'undefined' ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus} // eslint-disable-line
          onChange={event => onChange(event.target.checked)}
          onBlur={onBlur && (event => onBlur(id, event.target.checked))}
          onFocus={onFocus && (event => onFocus(id, event.target.checked))}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

CheckboxWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  autofocus: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default CheckboxWidget;
