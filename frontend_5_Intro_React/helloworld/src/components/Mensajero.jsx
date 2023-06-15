import PropTypes from 'prop-types';
function Mensajero({ sender, message }) {
  return (
    <>
      <h1>Soy el mensajero</h1>
      <p>Remitente: {sender}</p>
      <p className='tomato'>Este es su mensaje: {message}</p>
    </>
  );
}

Mensajero.propTypes = {
  sender: PropTypes.string,
  message: PropTypes.string
};

export default Mensajero;