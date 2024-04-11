import React, { lazy, useEffect, useState } from "react";
import { Header } from "../Header";
import { Notes } from "../views/Notes";
import { News } from "../views/News";
import { Dataviews } from "../views/Dataviews";

export default function Dashboard() {
  const [tab, setTab] = useState(0);
  const [componentToRender, setComponentToRender] = useState(null);
  const [night, setNight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  const selectTab = (activeTab) => {
    switch (activeTab) {
      case 0:
        setComponentToRender(
          <div
            className={`transition-opacity duration-900 ease-out ${
              tab === 0 ? "opacity-100" : "opacity-0"
            }`}>
            {" "}
            <News />
          </div>
        );
        break;
      case 1:
        setComponentToRender(
          <div
            className={`transition-opacity duration-900 ease-out ${
              tab === 1 ? "opacity-100" : "opacity-0"
            }`}>
            <Dataviews />
          </div>
        );
        break;
      case 2:
        setComponentToRender(
          <div
            className={`transition-opacity duration-900 ease-out ${
              tab === 2 ? "opacity-100" : "opacity-0"
            }`}>
            <Notes />
          </div>
        );
        break;
    }
  };

  useEffect(() => {
    selectTab(tab);
  }, [tab]);

  return (
    <>
      <div className={`${night ? "bg-secondary" : "bg-primary"} h-screen`}>
        <Header
          tab={tab}
          night={night}
          setNight={setNight}
          setTab={setTab}
          isMobile={isMobile}
        />
        <div className="container mx-auto">{componentToRender}</div>
      </div>
    </>
  );
}
