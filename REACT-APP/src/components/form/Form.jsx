import { useState } from "react";
import { useForm } from "react-hook-form";
import {getFormatDate} from './GetDate.js'

const Form = ({ saveUser }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  const [maxDate, setMaxDate] = useState(getFormatDate());

  const onSubmit = handleSubmit((user) => {
    saveUser(user);
    reset()
  });

  return (
    <div className="max-w-md mx-auto">
      <form
        action=""
        className=" bg-blue-300 p-10 mb-4 rounded-md dark:bg-blue-400"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="full-name"
          className="text-white mb-auto dark:text-black"
        >
          Nombre Completo:
        </label>
        <input
          type="text"
          name="fullName"
          className="bg-white p-3 w-full mt-2 mb-2 "
          {...register("fullName", {
            required: true,
            validate: {
              characs: (value) => /^[A-Za-záéíóúüÜÁÉÍÓÚ\s]+$/.test(value),
            },
          })}
        />
        {errors.fullName && errors.fullName.type === "required" && (
          <p className="text-red-500 text-xs italic">
            No puede estar vacío el nombre
          </p>
        )}
        {errors.fullName && errors.fullName.type === "characs" && (
          <p className="text-red-500 text-xs italic">
            Sólo se permiten letras y espacios
          </p>
        )}

        <label htmlFor="birthdate" className="text-white dark:text-black">
          Fecha de nacimiento:
        </label>
        <input
          type="date"
          name="birthDate"
          className="bg-white p-3 w-full mt-2 mb-2"
          {...register("birthDate", {
            required: true,
            min: "1900-01-01",
            max: maxDate,
          })}
        />
        {errors.birthDate && errors.birthDate.type === "required" && (
          <p className="text-red-500 text-xs italic">
            La fecha de nacimiento es requerida
          </p>
        )}
        {errors.birthDate && errors.birthDate.type === "min" && (
          <p className="text-red-500 text-xs italic">
            La fecha de nacimiento debe ser posterior a 1900
          </p>
        )}
        {errors.birthDate && errors.birthDate.type === "max" && (
          <p className="text-red-500 text-xs italic">
            La fecha de nacimiento no debe ser superior a la actual
          </p>
        )}
        <label htmlFor="comments" className="text-white dark:text-black">
          Comentarioss:
        </label>
        <textarea
          name="comments"
          className="bg-white p-3 w-full mt-2 mb-2 border-none"
          {...register("comments", {
            validate: {
              characs: (value) => /^[A-Za-z0-9.,'"&@$*()\-\s;?¿]+$/.test(value),
            },
          })}
        ></textarea>
        {errors.comments && errors.comments.type === "characs" && (
          <p className="text-red-500 text-xs italic">
            Sólo caracteres alfanuméricos son permitidos
          </p>
        )}

        <button
          type="submit"
          className="bg-green-500  px-2 py-1 rounded-md mt-4 text-white hover:bg-green-800 dark:bg-neutral-900"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
export default Form;
