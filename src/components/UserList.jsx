import UserCard from "./UserCard";

const UserList = ({ users, deleteUser, handleClickUpdateUser }) => {
  return (
    <section className="flex flex-col gap-2 px-4 py-2">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickUpdateUser={handleClickUpdateUser}
        />
      ))}
    </section>
  );
};

export default UserList;
