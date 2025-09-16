"use client";

import { usePathname } from "next/navigation";
import { formatTitre } from "@/lib/titre";
import { useEffect, useState } from "react";

export default function Titre() {
  const pathname = usePathname();
  const [titrePage, setTitrePage] = useState("Chargement en cours...");

  useEffect(() => {
    const handleTitre = () => {
      setTitrePage(formatTitre(pathname, 0));
    };

    handleTitre();

    window.addEventListener("load", handleTitre);
  }, []);

  if (pathname === "/"){
    return "";
  } else if ((pathname === "/passions" || pathname === "/fiches")){
    return <h1 id="t-main">Mes {titrePage}</h1>;
  } else {
    return <h1 id="t-main">{titrePage}</h1>;
  }
}
