import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputFieldsBase from './InputFieldsBase';

class InputText extends Component{
	static propTypes = {
		value: PropTypes.string,
		hide: PropTypes.bool,
		isPassword: PropTypes.bool,
		maxLength: PropTypes.number,
		...InputFieldsBase.getPropTypes()
	}

	static defaultProps = {
		...InputFieldsBase.getDefaultProps()
	}

	render(){
		const {
			inputId,
			onChange,
			value, 
			disabled,
			isPassword,
			maxLength,
		} = this.props

		return InputFieldsBase.renderInputField((
			<input 
				type={isPassword ? 'password' : 'text'}
				disabled={disabled}
				maxLength={maxLength}
				name={inputId}
				id={inputId}
				onChange={(e) => { onChange(e.target.value); }}
				value={value || ''}
			/>
		), this.props, true)
	}
}

export default InputText;