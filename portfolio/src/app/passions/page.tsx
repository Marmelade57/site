"use client";

import Titre from "@/components/Titre";
/* import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react"; */

/* import { Button } from "@/components/ui/button"; */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
/* import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Passions() {
  return (
    <>
      <Titre></Titre>
      <article id="art-1" className="w-full">
        <div className="flex w-[100%] flex-col gap-6">
          <Tabs defaultValue="protectionDonnees">
            <TabsList>
              <TabsTrigger value="protectionDonnees">
                La protection des données
              </TabsTrigger>
              <TabsTrigger value="sciEd">
                La science de l'apprentissage
              </TabsTrigger>
              <TabsTrigger value="litterature">La littérature</TabsTrigger>
              <TabsTrigger value="langues">Les langues</TabsTrigger>
              <TabsTrigger value="musique">La musique</TabsTrigger>
            </TabsList>
            <TabsContent value="sciEd">
              <Card>
                <CardHeader>
                  <CardTitle>La science de l'apprentissage</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h1>Apprentisage humain</h1>
                    <p>Depuis sa naissance, l'être humain apprend à manipuler des concepts variés. Le langage est l'un de ces concepts. Il est développé grâce à l'écoute de ce qui nous entoure ainsi que de multiples moments d'essai où nous recevons des corrections de nos pairs.</p>
                    <p>Cet apprentissage peut prendre plusieurs formes, dont le jeu. L'aspect ludique permet un environnement détendu dans lequel l'imagination peut être invitée.</p>
                    <p>Pour un adulte, cet apprentissage par le jeu peut se méler à d'autres formes. Par exemple, pour apprendre une langue via une application, le principe de répétition espacée aide à mémoriser l'information dans la mémoire à long terme. C'est ce que promouvoient les applications d'apprentissage de langues.</p>
                    <h1>Apprentissage machine</h1>
                    <p>Chez une machine, l'apprentissage diffère.</p>
                    <p>Il est géré par un algorithme, qui, selon les variables qu'il reçoit, renverra un résultat différent.</p>
                    <p>Pour simplifier, prennons l'exemple d'<a href="https://fr.akinator.com/">Akinator</a>, le génie qui devine le personnage auquel l'utilisateur pense.</p>
                    <p>Pour chaque question posée, l'utilisateur peut répondre "Oui", "Probablement", "Ne sais pas", "Probablement pas" ou "Non". Grâce à ces réponses de la part de l'utilisateur, et à des concepts mathématiques (possiblement des matrices, des perceptrons sigmoïde et des calculs booléens pour la recherche), il réduit au fur et à mesure les réponses possibles.</p>
                    <p>Toutes ces réponses permettent donc de réduire la liste de personnes/personnages selon des caractéristiques générales ou spécifiques.</p>
                    <p>Ce mode de fonctionnement est aussi la manière dont les Intelligences Artificielles génèrent une réponse. Pour rappel, les IA ne comprennent pas ce que vous écrivez. La réponse générée correspond à des probabilités par rapport aux données d'entrainement.</p>
                    <p>C'est pour ça que les IA peuvent halluciner.</p>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="protectionDonnees">
              <Card>
                <CardHeader>
                  <CardTitle>La protection des données</CardTitle>
                  <CardDescription>
                    C'est un domaine très important pour moi puisque toutes les
                    informations que nous partageons, peu importe la plateforme,
                    peuvent être utilisés à des fins discutables.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h1>...dans la loi</h1>
                    <p>En vous baladant sur internet, vous avez déjà dû paramétrer des cookies. Pour la protection de vos données, je vous recommande de refuser le maximum de cookies possible. Ce sont ceux qui sont responsable des pubs mal placées ou trop révélatrices.</p>
                    {/* <p>Mais pas que ! Les intérêts légitimes sont aussi un problème... C'est un échapatoire légal</p> */}
                    <h2>Cookies VS Intérêt légitime</h2>
                    <h2>Chat control</h2>
                    <h1>...sur internet</h1>
                    <h2>La prévention</h2>
                    <h3>La CNIL</h3>
                    <p><a href="https://www.youtube.com/@iciamyplant">IciAmyPlant</a> est une vidéaste explorent divers aspects du monde numérique. Par exemple, dans sa vidéo "Comment tout savoir sur quelqu'un à partir de son Instagram ?", elle montre qu'une grande quantité d'informations peuvent être connues / déduites depuis un compte publique sur les réseaux sociaux.</p>
                    <h2>Via les algorithmes</h2>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save password</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="litterature">
              <Card>
                <CardHeader>
                  <CardTitle>La littérature</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h1>Le loisir</h1>
                    <h1>L'ouverture d'esprit</h1>
                    <h1>Le développement de soi</h1>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="langues">
              <Card>
                <CardHeader>
                  <CardTitle>Les langues</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h1>L'ouverture à d'autres cultures</h1>
                    <h1>L'ouverture aux connaissances</h1>
                    <h1>Amélioration de la communication</h1>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button>Save password</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsContent value="musique">
              <Card>
                <CardHeader>
                  <CardTitle>La musique</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h1>L'aspect créatif</h1>
                    <h1>La logique mathématique</h1>
                  </div>
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
