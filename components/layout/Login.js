import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

export default function Login({ login }) {
  const { language } = useContext(LanguageContext);
  const onSubmit = (e) => {
    e.preventDefault();
    login(e.target[0].value);
  };
  return (
    <div className="page-container">
      <h1>Please Login</h1>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <label>Password:</label>
          <input name="password" type="password" />
        </div>

        <button type="submit" className="ui green button">
          Login
        </button>
      </form>
    </div>
  );
}
