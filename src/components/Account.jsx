import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserProvider";
import Button from "./Button";
import styles from "./Reciclaje.module.css";

const avatar = "https://i.pravatar.cc/100?u=zz";

function calcularNivel(nivel) {
  let maxMinValue;

  switch (nivel) {
    case "principiante":
      maxMinValue = { minValue: 0, maxValue: 100 };
      break;

    case "salvador del mundo":
      maxMinValue = { maxValue: 1000000 };
      break;
    default:
      throw new Error("What the fuck");
  }

  return maxMinValue;
}

function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { maxValue } = calcularNivel(user.nivel);

  return (
    <div className={styles.city}>
      <div className={styles.containerProfile}>
        <div className={styles.profile}>
          <h6>Avatar:</h6>
          <img
            src={avatar}
            alt={user.fullName}
          ></img>
        </div>

        <div className={styles.progress}>
          <progress
            value={user.experiencia}
            max={maxValue}
          />
          <p>
            {user.experiencia}/{maxValue}xp
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <h6>Nombre:</h6>
        <h3>
          <h3>{user.fullName}</h3>
        </h3>
        <h6>Nivel:</h6>
        <h3>
          <h3>{user.nivel}</h3>
        </h3>
      </div>

      <div className={styles.row}>
        <h6>Correo</h6>
        <p>{user.correo}</p>
      </div>

      <div className={styles.buttons}>
        <Button
          type="danger"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Salir
        </Button>
      </div>
    </div>
  );
}

export default Account;
