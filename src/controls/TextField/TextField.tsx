import classNames from 'classnames';
import { textFieldProps } from '../../interfaces/props.interface';

const TextField = (props: textFieldProps) => {
  const { label, value, onChange, disabled, placeholder, className } = props;
  const textFieldClass = classNames(className, 'os-input');
  return (
    <div className={textFieldClass}>
      <p className="os-input-label">{label}</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
