import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { EMPTY_FROM_VALUES } from "../shared/constans";
import { validationInput } from "../services/users";

const ModalFrom = ({
  isShowModal,
  setIsShowModal,
  createUser,
  isUserUpdating,
  setIsUserUpdating,
  updateUser,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    isUserUpdating ? updateUser(data, reset) : createUser(data, reset);
  };
  const handleClickCloseModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FROM_VALUES);
    setIsUserUpdating(null);
  };
  useEffect(() => {
    isUserUpdating && reset(isUserUpdating);
  }, [isUserUpdating]);

  return (
    <section
      className={`fixed  font-nunitosans left-0 right-0 top-0 bottom-0  flex items-center justify-center 
      transition-[opacity_transform] duration-200 ${
        isShowModal
          ? "visible opacity-100 scale-125"
          : "invisible opacity-0 scale-0"
      } `}
    >
      <div className="flex gap-6 mt-2 border-2 border-blue-500/30 rounded-xl ">
        <form
          onSubmit={handleSubmit(submit)}
          className=" bg-white shadow-[20px_25px_35px_-10px] shadow-black/50 grid  
          gab-4 p-3  rounded-xl relative items-center justify-center align-center "
        >
          <h2
            className={`text-center px-4 font-lora  ${
              isUserUpdating ? "text-lg " : "text-2xl -"
            }`}
          >
            {" "}
            {isUserUpdating ? "Update information  user" : "New User"}
          </h2>
          <button type="button" onClick={handleClickCloseModal}>
            <i
              class="bx bx-x bx-sm bx-border-circle bg-red-600
                shadow-md shadow-black/30  
                rounded-[2rem] absolute top-[-1%] left-[91%]
                hover:bg-red-800  p-[2px]"
              style="color:#ffffff"
            ></i>
          </button>
          <div className="flex-col flex">
            <label className="px-2 mt-1" htmlFor="first_name">
              Frist Name :
            </label>
            <input
              className="outline-none border-2 p-1 border-blue-500/50 rounded-xl"
              id="first_name"
              type="text"
              {...register("first_name", validationInput.firts_name)}
            />
            {errors.first_name && (
              <p className="text-red-600/80 text-xs">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="flex-col flex">
            <label className="px-2 mt-1" htmlFor="last_name">
              Lasts Names :
            </label>
            <input
              className="outline-none border-2 p-1 border-blue-500/50 rounded-xl "
              id="last_name"
              type="text"
              {...register("last_name", validationInput.last_name)}
            />
            {errors.last_name && (
              <p className="text-red-600/80 text-xs">
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className="flex-col flex">
            <label className="px-2 mt-1" htmlFor="email">
              Email :
            </label>
            <input
              className="outline-none border-2 p-1 border-blue-500/50 rounded-xl"
              id="email"
              type="email"
              {...register("email", validationInput.email)}
            />
            {errors.email && (
              <p className="text-red-600/80 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="flex-col flex">
            <label className="px-2 mt-1" htmlFor="password">
              Password :
            </label>
            <input
              className="outline-none border-2 p-1 border-blue-500/50 rounded-xl"
              id="password"
              type="password"
              {...register("password", validationInput.password)}
            />
            {errors.password && (
              <p className="text-red-600/80 text-xs">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex-col flex">
            <label className="px-2 mt-1" htmlFor="birthday">
              Brithday:
            </label>
            <input
              className="outline-none border-2 p-1 border-blue-500/50 rounded-xl"
              id="birthday"
              type="date"
              {...register("birthday")}
            />
          </div>
          <div className="flex-col flex">
            <labe className="px-2 mt-1" htmlFor="image_url">
              Porfile Photo :
            </labe>
            <input
              className="outline-none border-2 p-1 border-blue-500/50 rounded-xl"
              id="image_url "
              type="text"
              {...register("image_url")}
            />
          </div>

          <button
            className={`h-[25px] px-4 mt-4 mb-0  bg-blue-500 text-white  shadow-sm shadow-black rounded-full flex justify-center items-center text-center hover:bg-blue-700 ${
              isUserUpdating ? "mx-[40%] text-md mt-3" : "mx-[30%] text-lg"
            }`}
          >
            {isUserUpdating ? "Save" : "Create "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalFrom;
