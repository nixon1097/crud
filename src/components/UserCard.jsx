const UserCard = ({ user, deleteUser, handleClickUpdateUser }) => {
  return (
    <article className="  flex flex-col justify-center mt-2  bg-white px-2  border-2 rounded-sm text-start  h-full  max-w-sm">
      <ul className=" flex flex-col gap-2  text-lg font-lato text-black/70  justify-between items-start  hover:justify-betwee ">
        <li className="flex flex-grow w-full  text-center text-3xl font-lora pt-2  border-b-2 border-black/10">{`${user.first_name} ${user.last_name}`}</li>
        <li className="flex-col flex">
          <span className="font-bold w-full text-sm text-slate-200">Email</span>
          {user.email}
        </li>
        <li className="flex-col flex  w-full  justify-center items-center border-b-2 border-black/5 ">
          <span className="font-bold text-sm text-slate-200 ">
            <i class="bx bx-gift text-black "></i> Birthday
          </span>
          {user.birthday}
        </li>
      </ul>
      <div className=" flex   items-end justify-end text-end gap-3 p-2 ite">
        <button
          onClick={() => deleteUser(user.id)}
          className="flex-row bg-red-600 p-[4px] h-[30px] w-[28px]  items-center justify-center rounded-lg text-white border-2 border-red-700 hover:bg-red-500 shadow-sm shadow-red-700  "
        >
          <i className="bx bx-trash items-center justify-center flex "></i>
        </button>
        <button
          className="flex-row bg-slate-300 p-[4px]  h-[30px] w-[28px] items-center justify-center rounded-lg text-white border-2 border-slate-400 hover:bg-slate-200 shadow-m shadow-slate-700 "
          onClick={() => handleClickUpdateUser(user)}
        >
          <i className="bx bx-edit-alt items-center justify-center flex "></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
