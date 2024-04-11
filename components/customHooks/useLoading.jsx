import { useState } from "react";

function useLoading() {
  const [isLoading, setLoading] = useState(false);

  const withLoading = async (callback) => {
    setLoading(true);
    try {
      await callback();
    } finally {
      setLoading(false);
    }
  };

  return [isLoading, withLoading];
}

export default useLoading;
