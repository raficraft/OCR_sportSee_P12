import React from "react";

import UserKeys from "../component/UserKeys/UserKeys";
import useFetch from "../Hooks/useFetch";
import RadarComponent from "../component/chart/RadarChart";
import LineComponent from "../component/chart/LineChart";
import RadialComponent from "../component/chart/RadialChart";
import BarComponent from "../component/chart/BarChart";

const StatUser = (props) => {
  const endPoints = props.match.url;
  const { data, loading } = useFetch(
    `http://localhost:5000${endPoints}`,
    "getUserInfo"
  );

  if (loading) return <div>...loading</div>;
  const user = data.userInfos;
  const userKeys = data.keyData;

  return (
    <section className="statUser">
      <header className="statUser-header">
        <h1>
          Bonjour <span className="h1Red">{user.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectif hier</p>
      </header>

      <section className="panelGraph">
        <article className="graph">
          <div className="graphTop">
            <BarComponent url={endPoints} />
          </div>

          <div className="graph3">
            <LineComponent url={endPoints} />
            <RadarComponent url={endPoints} />
            <RadialComponent url={endPoints} />
          </div>
        </article>

        <aside>
          <UserKeys
            icon="../img/icon-fire.png"
            data={`${userKeys.calorieCount}Kcal`}
            text="Calories"
          />
          <UserKeys
            icon="../img/icon-chicken.png"
            data={`${userKeys.proteinCount}g`}
            text="Proteines"
          />
          <UserKeys
            icon="../img/icon-apple.png"
            data={`${userKeys.carbohydrateCount}g`}
            text="Glucides"
          />
          <UserKeys
            icon="../img/icon-burger.png"
            data={`${userKeys.lipidCount}g`}
            text="Lipides"
          />
        </aside>
      </section>
    </section>
  );
};

export default StatUser;

/**
 * 
 * 
 *   <section className="panelGraph">
        <article className="graph">
          <div className="graphTop">
            <BarComponent url={endPoints} />
          </div>

          <div className="graph3">
            <LineComponent url={endPoints} />
            <RadarComponent url={endPoints} />
            <RadialComponent url={endPoints} />
          </div>
        </article>

        <aside>
          <UserKeys
            icon="../img/icon-fire.png"
            data={`${userKeys.calorieCount / 1000}Kcal`}
            text="Calories"
          />
          <UserKeys
            icon="../img/icon-chicken.png"
            data={`${userKeys.proteinCount}g`}
            text="Proteines"
          />
          <UserKeys
            icon="../img/icon-apple.png"
            data={`${userKeys.carbohydrateCount}g`}
            text="Glucides"
          />
          <UserKeys
            icon="../img/icon-burger.png"
            data={`${userKeys.lipidCount}g`}
            text="Lipides"
          />
        </aside>
      </section>
 */
