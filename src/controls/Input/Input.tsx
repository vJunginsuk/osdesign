import classNames from 'classnames';
import { textFieldProps } from '../../interfaces/props.interface';

const Input = (props: textFieldProps) => {
  const {
    label,
    value,
    onChange,
    disabled,
    placeholder,
    className,
    classNameWrap,
    size,
    row,
  } = props;
  const textFieldClass = classNames(
    classNameWrap,
    'os-input',
    { [`os-input-${size}`]: size },
    row && 'os-input-row',
  );
  const inputClass = classNames(className, 'os-input-text');
  return (
    <div className={textFieldClass}>
      {label && <p className="os-input-label">{label}</p>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
};

export default Input;
