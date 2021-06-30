import { useState, useEffect } from "react";
import {
  alterateForBar,
  alterateForLinear,
  alterateForPie,
  alterateForRadar,
} from "../function/alterateData";
import PropTypes from "prop-types";


/**
 * 
 * @param {string} url 
 * @param {string} method 
 * @returns {object} data
 */


const useFetch = (url, method) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      let alterate = {};

      switch (method) {
        case "getUserInfo":
          setData(data.data);
          setLoading(false);

          break;

        case "radar":
          alterate = alterateForRadar(data.data);
          setData(alterate);
          setLoading(false);

          break;
        case "linear":
          alterate = alterateForLinear(data.data);
          setData(alterate);
          setLoading(false);

          break;

        case "pie":
          alterate = alterateForPie(data.data);
          console.error("alterate in fetch ", alterate);
          setData(alterate);
          setLoading(false);

          break;

        case "bar":
          alterate = alterateForBar(data.data);
          setData(alterate);
          setLoading(false);

          break;

        default:
          setData(data.data);
          setLoading(false);
          break;
      }
    };

    fetchData();
  }, [url, method]);

  return { data, loading };
};

useFetch.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
};

export default useFetch;
