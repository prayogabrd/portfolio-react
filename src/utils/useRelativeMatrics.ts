import {
  useLayoutEffect,
  useState,
  useRef,
  RefObject,
  useCallback
} from "react";

interface RelativeMetrics {
  top: number;
  height: number;
  left: number;
  width: number;
}

const useRelativeMatrics = (containerRef: RefObject<HTMLElement>) => {
  const targetRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [metrics, setMetrics] = useState<Record<string, RelativeMetrics>>({});

  const setTargetRef = (key: string) => (el: HTMLElement | null) => {
    if (el) {
      targetRefs.current.set(key, el);
    } else {
      targetRefs.current.delete(key);
    }
  };

  const calculateAllMetrics = useCallback(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newMetrics: Record<string, RelativeMetrics> = {};
      targetRefs.current.forEach((targetEl, key) => {
        const targetRect = targetEl.getBoundingClientRect();
        newMetrics[key] = {
          top: targetRect.top - containerRect.top,
          left: targetRect.left - containerRect.left,
          height: targetRect.height,
          width: targetRect.width
        };
      });
      setMetrics(newMetrics);
    }
  }, [containerRef]);

  useLayoutEffect(() => {
    calculateAllMetrics();

    window.addEventListener("resize", calculateAllMetrics);
    window.addEventListener("scroll", calculateAllMetrics);

    return () => {
      window.removeEventListener("resize", calculateAllMetrics);
      window.removeEventListener("scroll", calculateAllMetrics);
    };
  }, [containerRef, calculateAllMetrics]);

  return { setTargetRef, metrics };
};

export default useRelativeMatrics;
