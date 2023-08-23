 export const validationInput ={
    firts_name:{
        required: {
          value: true,
          message: "Este capmo es requerido ",
        },
        maxLength: {
          value: 25,
          message: "Excedes la cantidad de caracteres, Maximo 25",
        },
        minLength: {
          value: 2,
          message: "Minimo 2 ,caractéres",
        },
      },
      last_name:{
        required: {
          value: true,
          message: "Este capmo es requerido ",
        },
        maxLength: {
          value: 25,
          message: "Excedes la cantidad de caracteres, Maximo 25",
        },
        minLength: {
          value: 2,
          message: "Minimo 2 ,caractéres",
        },
      },
      email:{
        required: {
          value: true,
          message: "Este capmo es requerido ",
        },
        maxLength: {
          value: 150,
          message: "Excedes la cantidad de caracteres, Maximo 150",
        },
        minLength: {
          value: 2,
          message: "Minimo 2 ,caractéres",
        },
    },
    password:{
        required: {
            value: true,
            message: "Este capmo es requerido ",
          },

          pattern: {
            value:
              /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message: "No Cumple con el Formato de contraseña ",
          },
    }
 }