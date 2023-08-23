import UserCard from "./UserCard";

const UserList = ({ users, deleteUser, handleClickUpdateUser }) => {
  return (
    <section className="grid grid-cols-1 justify-center sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 px-4 py-2 w-full h-full">
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
