import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import BackButton from "./BackButton";
import RecyclingIcon from "@mui/icons-material/Recycling";

function Reciclaje() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { address, tipoPunto, descripcion } = currentCity;

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>Tipo de Punto:</h6>
        <h3>
          <span>
            <RecyclingIcon />
            {tipoPunto}
          </span>
        </h3>
      </div>

      <div className={styles.row}>
        <h6>Direccion</h6>
        <p>{address}</p>
      </div>

      {descripcion && (
        <div className={styles.row}>
          <h6>Descripcion</h6>
          <p>{descripcion}</p>
        </div>
      )}

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default Reciclaje;
