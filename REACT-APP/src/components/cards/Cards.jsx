import Card from "../card/Card";
const Cards = ({ users,setUsers }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {users &&
        users?.map(({ fullName, birthDate, comments }, i) => {
          return (
            <Card
              key={i}
              fullName={fullName}
              birthDate={birthDate}
              comments={comments}
              users={users}
              setUsers={setUsers}
            />
          );
        })}
    </div>
  );
};
export default Cards;
