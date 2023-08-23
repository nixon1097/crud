const UserCard = ({ user, deleteUser, handleClickUpdateUser }) => {
  return (
    <article className="  flex flex-col justify-center  px-2  border-2 rounded-sm text-start :w-[381px] ">
      <ul className=" flex flex-col gap-1  text-lg font-lato text-black/70 text-justify justify-between items-start  hover:justify-betwee ">
        <li className="flex flex-row  text-center text-2xl font-lora pt-2  border-b-2 border-[#8fff8b44]  ">{`${user.first_name} ${user.last_name}`}</li>
        <li className="flex-col flex">
          <span className="font-light text-sm text-teal-50/6">Email</span>{" "}
          {user.email}
        </li>
        <li className="flex-col flex border-b-2 border-[#8fff8b44] ">
          <span className="font-light text-sm text-teal-50/60">Birthday</span>{" "}
          {user.birthday}
        </li>
      </ul>
      <div className=" flex  items-end justify-end text-end gap-2 p-2">
        <button onClick={() => deleteUser(user.id)} className="flex-row">
          delete
        </button>
        <button onClick={() => handleClickUpdateUser(user)}>save</button>
      </div>
    </article>
  );
};
69;

export default UserCard;
