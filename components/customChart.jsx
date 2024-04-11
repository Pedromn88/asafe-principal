import React from "react";
import { useState, useEffect } from "react";

// Custom hook para extraer los valores del atributo `values`
const useAttributeValues = (data) => {
  const [attributeValues, setAttributeValues] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const values = data.map((item) => item.attributes.values);
      setAttributeValues(values);
    }
  }, [data]);

  return attributeValues;
};

export default useAttributeValues;
