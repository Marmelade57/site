'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowBigRightDash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Titre from "@/components/Titre";

const fiches = [
  {
    id: 1,
    titre: "test",
    themes: "aucun",
    dateCreation: "10/02/2025 09:38",
  },
  {
    id: 2,
    titre: "Portfolio",
    themes: "NextJS, UIShadcn",
    dateCreation: "10/02/2025 09:43",
  },
  {
    id: 3,
    titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime qui culpa magnam fuga illum maiores nihil non quibusdam, delectus eos error dignissimos eveniet cum totam voluptates enim sunt quos.",
    themes: "NextJS, UIShadcn",
    dateCreation: "10/02/2025 09:55",
  },
];

export default function Fiches() {
    
    const [windowWidth, setWindowWidth] = useState(1000);
    
    useEffect(() => {
        // Fonction de mise à jour
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        // Initialisation
        handleResize();
        
        // Écouteur d'événement
        window.addEventListener('resize', handleResize);
        
        // Nettoyage
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const estPetitEcran = windowWidth != null ? (windowWidth <= 768 ? true : false) : true;
    return (
        <>
      <Titre></Titre>
      <article className="w-auto">
        <p>
        Puisque j'aime partager mes connaissances avec autrui, j'ai décidé de
        faire des fiches sur des concepts que je comprends au moins
        partiellement.
      </p>
        <Table style={{ backgroundColor: "var(--background)", width:"fit-content", margin: "auto", marginTop: "20px" }}>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow style={{backgroundColor: "white"}}>
              <TableHead className="w-min">Intitulé</TableHead>
              <TableHead className="w-min">Thèmes</TableHead>
              {
                estPetitEcran ? "": <TableHead className="w-min text-right">Date de création</TableHead>
              }
              <TableHead className="w-min">Lien</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fiches.map((fiche, index) => (
              <TableRow
                key={fiche.titre}
              >
                <TableCell className="w-min">
                  <Link href={"/fiches/" + fiche.id}>{fiche.titre.length < (estPetitEcran ? 25 : 50) ? fiche.titre : fiche.titre.slice(0,(estPetitEcran ? 25 : 50))+"..."}</Link>
                </TableCell>

                <TableCell className="w-min">{fiche.themes}</TableCell>
                {
                    estPetitEcran ? "" :
                <TableCell className="w-min text-right">
                  {fiche.dateCreation}
                </TableCell>
                }
                <TableCell className="w-min"><Link href={"/fiches/" + fiche.id}><ArrowBigRightDash /></Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </>
  );
}
