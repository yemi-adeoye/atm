import Text from './Text';
const Balance = ({ text, balance }) => {
  return (
    <div className='balance'>
      <Text text={text} />
      <br />
      <Text text={`$ ${balance}`} />
    </div>
  );
};

export default Balance;
