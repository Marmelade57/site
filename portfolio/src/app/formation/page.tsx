import Titre from "@/components/Titre";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Etudes() {
  return (
    <>
    <Titre></Titre>
      <article id="art-1">
        <div className="flex w-[100%] flex-col gap-6">
          <Tabs defaultValue="bac">
            <TabsList>
              <TabsTrigger value="bac">
                Baccalauréat général (2021-2023)
              </TabsTrigger>
              <TabsTrigger value="but">
                Bachelor Universitaire de Technologie (2023-2026)
              </TabsTrigger>
              <TabsTrigger value="master">Le Master</TabsTrigger>
            </TabsList>
            <TabsContent value="bac">
              <Card>
                <CardHeader>
                  <CardDescription>
                    J'ai obtenu mon baccalauréat général mention bien en juillet
                    2023. En première, j'avais choisi les spécialités{" "}
                    <a href="#t-1-1">
                      Langues Littératures et Cultures Étrangères et Régionales
                      (LLCER) Anglais
                    </a>
                    ,{" "}
                    <a href="#t-1-2">
                      Numérique et Sciences Informatiques (NSI)
                    </a>{" "}
                    ainsi que Mathématiques.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <h2 id="t-1-1">LLCER Anglais</h2>
                  <p>
                    En LLCER, j'ai eu l'opportunité d'améliorer mes
                    connaissances concernant la langue anglaise, mais aussi
                    l'histoire, la cuisine, les arts (plastiques, cinéma,
                    littérature) et les façons de vivre anglophones. Cette
                    spécialité m'a aussi aidé dans l'
                    <span className="important">expression orale</span>, en
                    français comme en anglais. J'ai aussi passé l'examen
                    Cambridge de <span className="important">niveau B2</span>{" "}
                    que j'ai obtenu avec les mentions suivantes :
                  </p>
                  <ul>
                    <li>Reading : B2.</li>
                    <li>Use of english : B2,</li>
                    <li>Writing : C1,</li>
                    <li>Listening : C1,</li>
                    <li>Speaking : B2,</li>
                  </ul>
                  <p>
                    Si vous souhaitez{" "}
                    <span className="important">vérifier mes résultats</span>,
                    vous pouvez le faire grâce à{" "}
                    <a href="https://www.cambridgeenglish.org/why-choose-us/higher-education-institutions/how-to-verify-results-online/">
                      ce site web
                    </a>
                    .
                  </p>
                  <p>
                    Concernant ma profession, cette matière m'apporte la
                    possibilité de comprendre plus rapidement le contexte d'un
                    projet international ainsi qu'une{" "}
                    <span className="important">approche créative</span>.
                  </p>
                  <h2 id="t-1-2">NSI</h2>
                  <p>
                    Dans cette spécialité, j'ai acquis des bases pour le cursus
                    du BUT. Voici une liste non exhaustive de connaissances
                    travaillées durant ces deux années :
                  </p>
                  <ul>
                    <li>histoire de l'informatique,</li>
                    <li>
                      réseau avec des modélisations sur le logiciel CISCO Packet
                      Traceur,
                    </li>
                    <li>graphes et arbres (plus court chemin),</li>
                    <li>
                      requêtes <span className="important">SQL</span> CRUD avec
                      SQLite,
                    </li>
                    <li>
                      manipulation du système d'exploitation Linux en ligne de
                      commande via une Machine Virtuelle (Oracle VirtualBox),
                    </li>
                    <li>
                      conversion entre diverses bases numériques (2, 8, 10, 16),
                      calculs booléens et bases de l'encodage,
                    </li>
                    <li>
                      types de données et leurs manipulations (tuples, tableaux
                      (indexés ou en compréhension), slices, dictionnaires),
                    </li>
                    <li>
                      <span className="important">traitement de données</span> :
                      indexation, recherche, tri (insertion, sélection), fusion,
                    </li>
                    <li>architecture von Neumann,</li>
                    <li>
                      bases algorithmiques (boucles bornées ou non, structures
                      conditionnelles, fonction, bibliothèques, tests, normes de
                      nommage et format des variables) et problèmes communs
                      (algorithmes glouton, des k proches voisins et
                      dichotomie).
                    </li>
                  </ul>
                  <p>
                    Pour plus d'information, consultez le{" "}
                    <a href="https://eduscol.education.fr/2068/programmes-et-ressources-en-numerique-et-sciences-informatiques-voie-g">
                      programme national de la spécialité NSI
                    </a>
                    .
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="but">
              <Card>
                <CardHeader>
                  <CardDescription>
                    Après le bac, j'ai commencé mon BUT Informatique. J'ai
                    choisi le parcours RA parce que j'aime programmer depuis la
                    classe de troisième.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div id="image-texte">
                    <figure className="tape">
                      <img
                        src="https://formations.univ-lorraine.fr/img/su/45.jpg"
                        alt="logo iut metz"
                        style={{ width: "250px", objectFit: "contain" }}
                      />
                    </figure>
                    <p>
                      Depuis la deuxième année, je suis le parcours{" "}
                      <span className="important">
                        Réalisation d'Applications
                      </span>{" "}
                      : Conception, Développement, Validation (RA). De plus,
                      d'avril 2024 à avril 2025, j'ai été secrétaire puis
                      trésorière de l'Association des Etudiants du Département
                      Informatique (<span className="important"> AEDI </span>).
                      Durant cette période, nous avons lancé le compte Instagram
                      de l'association que nous avons alimenté. Nous avons aussi
                      assuré la gestion des stocks de boissons et snacks que
                      nous vendions dans notre local.
                    </p>

                    <a href="/etudes/1A">
                      <h2 id="t-2-1">Première année</h2>
                    </a>
                    <p>
                      Durant cette première année, nous avons retravaillé et
                      approfondit les bases que j'avais déjà appris durant mes
                      deux années de <a href="#t-1-1">NSI</a>.
                    </p>
                    <p>
                      Pour cela, nous avons fait des{" "}
                      <span className="important">SAÉ</span> (projets de
                      groupes) à chaque fin de semestre afin de travailler nos
                      hard skills dans chaque Unité d'Enseignement ainsi que nos
                      soft skills. Vous pouvez consulter quelques-uns de ces{" "}
                      <a href="projets/SAE">
                        projets réalisés durant le cursus du BUT
                      </a>
                      .
                    </p>

                    <a href="/etudes/2A">
                      <h2 id="t-2-2">Deuxième année</h2>
                    </a>

                    <h3 id="t-2-2-1">Stage de huit semaines</h3>
                    <p>
                      Lors de cette deuxième année, j'ai fait un stage à MB
                      Music School, l'école de musiques actuelles de Basse-Ham.
                      Durant cette période, j'ai créé le
                      <a
                        href="https://mb-music-school-neab.vercel.app/accueil"
                        target="_blank"
                      >
                        site internet (lien externe temporaire)
                      </a>{" "}
                      de cette association.
                    </p>
                    <p>
                      Ce stage m'a permis de travailler mon{" "}
                      <span className="important">autonomie</span>, mais, avec
                      du recul, je dois reconnaitre que je dois travailler sur
                      mon organisation.
                    </p>
                    <a href="/etudes/3A">
                      <h2 id="t-2-3">Troisième année</h2>
                    </a>
                    <p>
                      Le premier septembre 2025, je vais commencer ma troisième
                      et dernière année de BUT Informatique. À l'IUT de Metz,
                      c'est la seule année où l'alternance est proposée. Malgré
                      les bienfaits de l'alternance (entrée dans le monde du
                      travail sur une longue période avec possibilité
                      d'embauche, application des connaissances vues en cours),
                      j'ai décidé de faire un stage à la place pour me
                      concentrer sur d'autres sujets. La période de ce stage de
                      12 semaines est du{" "}
                      <span className="important">
                        23 février au 13 juin 2026.
                      </span>
                    </p>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save password</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="master">
              <Card>
                <CardHeader>
                  <CardTitle>Master Informatique</CardTitle>
                  <CardDescription>
                    Après le BUT, j'aimerais faire un Master en Informatique. La
                    première année est commune à tous les parcours mais je pense
                    m'orienter vers le parcours Interaction Humain-Machine
                    (IHM).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div></div>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </article>
    </>
  );
}
