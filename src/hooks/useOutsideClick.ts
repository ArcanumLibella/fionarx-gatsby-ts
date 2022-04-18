import { useEffect, useRef } from "react";

export const useOuterClick = (
  callback: (e: CustomEvent) => void,
  eventType?: "mousedown" | "click",
) => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const callbackRef = useRef<(e: CustomEvent) => void>();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    // Target closest portal if there is one, otherwise the event handler is ignored in portals
    const rootEl = innerRef.current?.closest(".portal") || document;

    rootEl.addEventListener(
      eventType || "mousedown",
      handleClick as EventListener,
    );
    return () =>
      rootEl.removeEventListener(
        eventType || "mousedown",
        handleClick as EventListener,
      );

    // read most recent callback and innerRef dom node from refs
    function handleClick(e: CustomEvent) {
      if (
        e?.target &&
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target as Node)
      ) {
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
};
