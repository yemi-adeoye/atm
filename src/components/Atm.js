import Select from './Select';
import GenericInput from './GenericInput';
import Button from './Button';

const Atm = ({
  onSelectChange,
  onTextChangeHandler,
  error,
  onButtonClickHandler,
  value,
}) => {
  return (
    <div className='atm'>
      <Select onChange={onSelectChange} />
      <GenericInput
        type='number'
        error={error}
        label='Enter Amount'
        onChangeHandler={onTextChangeHandler}
      />
      <Button onClickHandler={onButtonClickHandler} value={value} />
    </div>
  );
};

export default Atm;
