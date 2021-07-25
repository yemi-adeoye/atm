const Select = ({ onChange }) => {
  return (
    <>
      <label htmlFor='slct'>What would you like to do?</label>
      <select name='slct' onChange={onChange}>
        <option selected> Withdraw </option> <option> Deposit </option>
      </select>
    </>
  );
};

export default Select;
