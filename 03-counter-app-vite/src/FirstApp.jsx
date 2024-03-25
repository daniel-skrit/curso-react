
import PropTypes from 'prop-types' 
// const newMessage = "Solid Snake";
// const newNumbers = [1,2,3,4,5,6,7,8,9];
// const MessageObjext = {
//   titulo: "Hola",
//   mensaje: "Mensaje"
// };
// export default function FirstApp() {
//   return (
//     <>
//       <h1>{newMessage}</h1>
//       <h2>Numbers: </h2>
//       <li>{newNumbers}</li>
//       <code>{JSON.stringify(MessageObjext)}</code>
//     </>
//   );
// }


// const getResult = (a,b) => {
//   return a + b;
// }

// export default function FirstApp() {
//   return (
//     <>
//       <h1>{getResult(-48,15)}</h1>
//     </>
//   );
// }

export default function FirstApp({title , subtitle, name }) {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle }</p>
      <p>{ name }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string
}

FirstApp.defaultProps ={
  subtitle: "No hay subtitulo",
  name: "Goku"
}