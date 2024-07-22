import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, options, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = function (entries) {
      const visibleElement = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      callback(visibleElement);
    };
    observer.current = new IntersectionObserver(cb, options);

    ref.current.forEach((el) => {
      observer.current.observe(el);
    });
  }, [isLoading]);
};
