import './form-input.scss';
import EyeIcon from "../eye-icon/EyeIcon"
import { useState } from 'react';

import { HTMLInputTypeAttribute } from 'react';
import { ChangeEventHandler } from 'react';

export type FormProps = {
	name: string;
	handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	label?: string;
	id?: HTMLInputTypeAttribute;
	type: HTMLInputTypeAttribute;
	value: string | ReadonlyArray<string> | number;
	eyeicon?: boolean;
	required: boolean;
	placeholder?: string;
	disabled?: true;
	text?: string;
};

function FormInput(props: FormProps) {
	const { name, label, eyeicon, type, handleChange, placeholder, ...otherProps } = props;
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
			{label && <label htmlFor={name}>{label}</label>}

			{otherProps.id !== 'message' ? (
				<input
					placeholder={placeholder || ""}
					onChange={handleChange}
					type={visibility.type}
					name={name}
					{...otherProps}
				
				/>
			) : (
				<textarea
				placeholder={placeholder || ""}
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

			{otherProps.text && <span className='absolute translate-y-1/2 right-[1.7rem] text-gray-400'>{otherProps.text}</span>}

		

		</div>
	);
}
export default FormInput;