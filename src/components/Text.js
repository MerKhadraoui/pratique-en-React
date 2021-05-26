function PatientCard(props) {
  return (
    <div>
      <h1 className="title"> PATIENT ALERT CARD</h1>
      <ul className="table">
        <li>name: {props.name} </li>
        <li>Insurance Number: {props.number} </li>
      </ul>
    </div>
  );
}
export default PatientCard;
