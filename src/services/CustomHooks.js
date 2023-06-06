import React, { useState, useEffect, useRef } from "react";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

export function usePageView(path) {
  useEffect(() => {
    ReactGA.pageview(path);
    ReactPixel.pageView(path);
  }, []);
}

/**
 * Credit to this function/hook:
 * author: Dan Abramov
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(callback, delay) {
  const savedCallBack = useRef();

  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}