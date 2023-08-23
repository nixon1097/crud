const HeaderUser = ({ handleClickOpenModal }) => {
  return (
    <div className="flex gap-4 flex-row justify-between p-1 pl-2 items-center shadow-md shadow-black/30 ">
      <h1 className="font-lato text-4xl pl-2 text-justify  left-9">Users</h1>
      <button
        onClick={handleClickOpenModal}
        className="bg-blue-500 text-white rounded-sm p-2 py-1 text-center justify-center items-center flex hover:bg-blue-800/80  "
      >
        + crear usuario
      </button>
    </div>
  );
};
export default HeaderUser;
