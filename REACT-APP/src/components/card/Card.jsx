import {formatDate} from '../form/GetDate.js'

const Card = ({ fullName, birthDate, comments, users, setUsers }) => {
  const removeUser = (e) => {
    const userRemoved = users.filter(
      ({ fullName }) => fullName !== e.target.value
    );
    setUsers(userRemoved);
  };

  const { birthDateFormat, age } = formatDate(birthDate);
  return (
    <div className="text-black bg-gray-800 p-4 rounded-md">
      <button
        onClick={removeUser}
        value={fullName}
        className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-600"
      >
        X
      </button>
      <h1 className="text-xl text-gray-300 font-bold capitalize">{fullName}</h1>
      <p className="text-gray-400 text-sm">{birthDateFormat}, Edad:{age } años</p>
      <p className="text-gray-400 text-sm">Comentarioss: {comments}</p>
    </div>
  );
};
export default Card;
