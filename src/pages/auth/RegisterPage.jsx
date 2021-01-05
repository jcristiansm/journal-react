import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { startRegisterEmailPassword } from "../../redux/auth/auth-actions";
import { setError, unsetError } from "../../redux/ui/ui-actions";

const RegisterPage = () => {
  // useDispatch -> PARA INVOCAR LAS ACCIONES Y MODIFICAR LOS EDOS
  const dispatch = useDispatch();
  // useSelector -> PARA ACCEDER A LOS VALORES DE LOS EDOS
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "cris",
    email: "cris@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("nombre obligatorio"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("mail no valido"));
      return false;
    } else if (password !== password2 || password.length < 6) {
      dispatch(
        setError(
          "las contraseñas no coinciden o no tiene por lo menos 6 caracteres"
        )
      );
      return false;
    }

    dispatch(unsetError());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterEmailPassword(email, password, name));
    }
  };

  return (
    <>
      <h3 className="auth__title">Registro</h3>

      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirmar password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block">
          Registrar
        </button>

        <Link to="/auth/login" className="link">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </form>
    </>
  );
};

export default RegisterPage;
