import { useEffect, useState } from "react";
import "./app.css";
import axios from "axios";
import ModalFrom from "./components/ModalFrom";
import { EMPTY_FROM_VALUES } from "./shared/constans";
import UserList from "./components/UserList";
import HeaderUser from "./components/HeaderUser";

const BASE_URL = "https://users-crud.academlo.tech/";
export function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserUpdating, setIsUserUpdating] = useState(null);
  //   get all users
  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };
  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FROM_VALUES);
      })
      .catch((err) => console.log(err));
  };
  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };
  const updateUser = (userUpdate, reset) => {
    axios
      .put(BASE_URL + `users/${isUserUpdating.id}/`, userUpdate)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FROM_VALUES);
        setIsUserUpdating(null);
      })
      .catch((err) => console.log(err));
  };
  const handleClickUpdateUser = (user) => {
    getAllUsers();
    setIsShowModal(true);
    setIsUserUpdating(user);
  };

  const handleClickOpenModal = () => {
    setIsShowModal(true);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className="">
      <HeaderUser handleClickOpenModal={handleClickOpenModal} />
      <ModalFrom
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        createUser={createUser}
        isUserUpdating={isUserUpdating}
        setIsUserUpdating={setIsUserUpdating}
        updateUser={updateUser}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdateUser={handleClickUpdateUser}
      />
    </section>
  );
}
