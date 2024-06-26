import './form-input.scss';
import EyeIcon from "../eye-icon/EyeIcon"
import { useState } from 'react';

import { HTMLInputTypeAttribute } from 'react';
import { ChangeEventHandler } from 'react';

export type FormProps = {
	name: string;
	handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	label?: boolean;
	id?: HTMLInputTypeAttribute;
	type: HTMLInputTypeAttribute;
	value: string | ReadonlyArray<string> | number;
	eyeicon?: boolean;
	required: boolean;
};

function FormInput(props: FormProps) {
	const { name, label, eyeicon, type, handleChange, ...otherProps } = props;
	const [visibility, setVisibility] = useState({
		type: type,
		isShown: false,
	});

	const tooglePassword = () => {
		const inputType = !visibility.isShown ? 'text' : 'password';
		setVisibility({
			type: inputType,
			isShown: !visibility.isShown,
		});
	};


	return (
		<div className="form__input">
			{label && <label htmlFor={name}>{name}</label>}

			{otherProps.id !== 'message' ? (
				<input
					placeholder={label ? '' : name}
					onChange={handleChange}
					type={visibility.type}
					name={name}
					{...otherProps}
				/>
			) : (
				<textarea
					placeholder={label ? '' : name}
					onChange={handleChange}
					name={name}
					{...otherProps}
				/>
			)}

			{eyeicon && (
				<EyeIcon
					visibility={visibility.isShown}
					handleClick={tooglePassword}
				/>
			)}
		</div>
	);
}
export default FormInput;