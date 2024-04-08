import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";
export const HeroPage = () => {
  const { id } = useParams();
  // const hero = getHeroById(id);
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to="/marvel"></Navigate>;
  }

  const heroImageUrl = `/public/assets/heroes/${id}.jpg`;

  const onNavigateback = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img src={heroImageUrl} alt="" className="img-thumbnail animate__animated animate__fadeInLeft" />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.first_appearance}
            </li>
            <h5 className="mt-3">
              <b>Characters </b>
            </h5>
            <p>{hero.characters}</p>
            <button
              className="btn btn-outline-primary"
              onClick={onNavigateback}
            >
              Go Back
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
