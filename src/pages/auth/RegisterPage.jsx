import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <h3 className="auth__title">Registro</h3>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email"
          name="Email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirmar password"
          name="password2"
          className="auth__input"
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
