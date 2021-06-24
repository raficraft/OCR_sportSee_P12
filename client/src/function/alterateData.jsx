/**
 * @param {object} data
 * @returns
 */
export const alterateForLinear = (data) => {
  const dayOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const object = data.sessions;

  const sessionLength = [];
  console.error(object);

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      sessionLength.push(element.sessionLength);

      console.log(element);
      element.day = dayOfWeek[key];
    }
  }

  data.min = Math.min(...sessionLength);
  data.max = Math.max(...sessionLength);

  console.log("line aterate output ", data);

  return data;
};

//Redifine score value to percentage and define color of radial chart

export const alterateForPie = (data) => {
  const alterate = [];
  if (data.todayScore) {
    alterate.push({ fill: "red", todayScore: data.todayScore * 100 });
  } else if (data.score) {
    alterate.push({ fill: "red", todayScore: data.score * 100 });
  }
  return alterate;
};

//Define the min and max for kilogram and calories data
//Change data (YY/MM/DD) by a simple number
export const alterateForBar = (data) => {
  console.log("données de base pour Barchart", data);

  const kgArray = data.sessions.map((el) => el.kilogram);
  const calArray = data.sessions.map((el) => el.calories);

  data.newData = [];

  data.minAndMax = [];
  const minAndMaxKG = {
    minKg: Math.min(...kgArray) - 5,
    maxKg: Math.max(...kgArray) + 5,
  };
  data.minAndMax.push(minAndMaxKG);

  const minAndMaxCal = {
    minCal: Math.min(...calArray) - 10,
    maxCal: Math.max(...calArray) + 10,
  };
  data.minAndMax.push(minAndMaxCal);

  for (let i = 0; i < data.sessions.length; i++) {
    data.sessions[i] = {
      ...data.sessions[i],
      day: i + 1,
    };
  }
  return data;
};

/**
 * Change number entries of data.data.kind array and reverse this
 * @param {Object} data
 * @returns
 */
export const alterateForRadar = (data) => {
  const tradDataKind = {
    0: "Cardio",
    1: "Energie",
    2: "Endurance",
    3: "Force",
    4: "Vitesse",
    5: "Intensité",
  };

  for (const key in tradDataKind) {
    if (Object.hasOwnProperty.call(tradDataKind, key)) {
      const element = tradDataKind[key];

      console.log(element);

      data.data[parseInt(key, 10)].kind = element;
      console.log("alterate", data.kind);
    }
  }

  data.data.reverse();

  console.log(data);

  return data;
};
