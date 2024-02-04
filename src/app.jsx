import { useEffect, useState } from "react";
import "./app.css";
import axios from "axios";
import ModalFrom from "./components/ModalFrom";
import { EMPTY_FROM_VALUES } from "./shared/constans";
import UserList from "./components/UserList";
import HeaderUser from "./components/HeaderUser";
import Swal from "sweetalert2";

// const BASE_URL = "https://users-crud.academlo.tech/";
const BASE_URL = "https://user-crud-ix0s.onrender.com";
export function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserUpdating, setIsUserUpdating] = useState(null);
  //   get all users
  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };
  const createUser = (newUser, reset) => {
    axios
      .post(`${BASE_URL}/users`, newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FROM_VALUES);
        alert();
      })
      .catch((err) => console.log(err));
  };
  const deleteUser = (idUser) => {
    Swal.fire({
      title: "Eliminar Usuario",
      html: `<p>Esta seguro de eliminar al usuario <b></b></p>`,
      icon: "error",

      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      denyButtonColor: "#ff0000",
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      } else {
        axios
          .delete(BASE_URL + `/users/${idUser}/`)
          .then(() => {
            getAllUsers();
            Swal.fire({
              title: " Usuario Eliminado ",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const updateUser = (userUpdate, reset) => {
    axios
      .put(BASE_URL + `/users/${isUserUpdating.id}/`, userUpdate)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FROM_VALUES);
        setIsUserUpdating(null);
        Swal.fire("Actualizado!", "", "success");
      })
      .catch((err) => console.log(err));
  };
  const handleClickUpdateUser = (user) => {
    Swal.fire({
      title: "Advertencia",
      text: "quieres editar  el usuario ?",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((response) => {
      if (response.isConfirmed) {
        getAllUsers();
        setIsShowModal(true);
        setIsUserUpdating(user);
      } else if (response.isDenied) {
        setIsShowModal(false);
      }
    });
  };

  const handleClickOpenModal = () => {
    setIsShowModal(true);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const alert = () => {
    Swal.fire({
      title: "Creado",
      text: "Usuario creado con exito",
      icon: "success",
    });
  };

  return (
    <section className=" p-2">
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
