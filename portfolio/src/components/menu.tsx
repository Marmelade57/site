import "../style/menu.css";
/* import { items } from "../donnees/liste_items_menu"; */
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";

/* function afficheMenu(){
    let contenu = items.toTable();
    let tailleItems = items.toTable().length;
    let menu = "";
    for (let index = 0; index < tailleItems; index+=2) {
        menu += "<a href='"+contenu[index+1]+"'><h1>"+contenu[index]+"</h1></a>";
    }
    return menu;
} */

export default function Menu() {

  return (
    <>
    <Menubar className="max-sm:grid max-sm:grid-cols-3 w-full h-fit max-sm:justify-items-center">
      <MenubarMenu>
        <Link href="/"><MenubarTrigger>Accueil</MenubarTrigger></Link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Parcours</MenubarTrigger>
        <MenubarContent>
          {/* <Link href="/etudes#t-1"><MenubarItem>
            Baccalauréat
          </MenubarItem></Link>
          <Link href="/etudes#t-2"><MenubarItem>
            Bachelor Universitaire de technologie
          </MenubarItem></Link>
          <Link href="/etudes#t-3"><MenubarItem>
            Master
          </MenubarItem></Link> */}
          <Link href="/formation">
          <MenubarItem style={{display: "block"}}>
            <div>Formation</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">Bac général, BUT Informatique, Master</p>
          </MenubarItem>
          </Link>
          <Link href="/experience_professionnelle">
          <MenubarItem style={{display: "block"}}>
            <div>Expérience professionnelle</div>
            {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">Stage</p> */}
          </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      {/* <MenubarMenu>
        <Link href="/fiches"><MenubarTrigger>Fiches</MenubarTrigger></Link>
      </MenubarMenu> */}
      <MenubarMenu>
        <MenubarTrigger>Passions</MenubarTrigger>
        <MenubarContent>
          {/* <Link href="/passions?tab=protectionDonnees"><MenubarItem>
            La protection des données
          </MenubarItem></Link>
          <Link href="/passions?tab=sciEd"><MenubarItem>
            La science de l'apprentissage
          </MenubarItem></Link>
          <Link href="/passions?tab=litterature"><MenubarItem>
            La littérature
          </MenubarItem></Link>
          <Link href="/passions?tab=langues"><MenubarItem>
            Les langues          
          </MenubarItem></Link>
          <Link href="/passions?tab=musique"><MenubarItem>
            La musique
          </MenubarItem></Link> */}
          <Link href="/passions">
          <MenubarItem style={{display: "block"}}>
            <div>Voir tout...</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">La protection des données, les langues,<br />la littérature, la science de l'apprentissage,<br /> la musique.</p>
          </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      {/* <MenubarMenu>
        <Link href="/projets"><MenubarTrigger>Projets</MenubarTrigger></Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/credits"><MenubarTrigger>Crédits</MenubarTrigger></Link>
      </MenubarMenu> */}
    </Menubar>
      {/* <figure>
        <label className="toggle">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>
      </figure> */}
        {/* <div dangerouslySetInnerHTML={{ __html: afficheMenu()}}></div> */}
    </>
  );
}


