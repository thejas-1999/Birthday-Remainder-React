const List = ({ Info }) => {
  const calculateAge = (birthday) => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthday).getFullYear();
    return currentYear - birthYear;
  };
  return (
    <ul>
      {Info.map((person, index) => (
        <li key={index}>
          <div className="flex">
            <img
              src={person.img} // Use the person's image from the data
              alt="img"
            />
            <div className="title">
              <h3 className="name">{person.name}</h3>
              {/* Calculate age based on the birthday */}
              <h5 className="age">{calculateAge(person.birthday)} Years</h5>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
