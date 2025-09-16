import { Card, CardContent } from "@/components/ui/card";
import "@/style/tape.css";

export default function Accueil() {
  return (
    <div className="w-fit p-auto">
        <Card className="w-[75%] m-auto max-sm:m-1 max-sm:w-fit"> {/* w-[50%] */}
          <CardContent>
            <article>
              <h1>Margaux HALLER</h1>
              <div id="image-texte" style={{ marginTop: "2svh" }}>
                <figure className="tape">
                  <img
                    src="images/pdp.jpg"
                    alt="photo de profil"
                    style={{ width: "128px", objectFit: "contain" }}
                  />
                </figure>
                <p>
                  Étudiante à l'IUT de Metz en Moselle, je suis actuellement
                  troisième année de BUT Informatique parcours Réalisation
                  d'Application.
                </p>
              </div>
            </article>
            <article>
              <h1>Retrouvez-moi sur...</h1>
              <div className="fig">
                <a
                  target="_blank"
                  href="https://github.com/Marmelade57"
                  style={{ display: "grid" }}
                >
                  <figure>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                      alt="Logo de GitHub"
                      height="48"
                      width="48"
                      style={{ marginInline: "auto" }}
                    />
                    <figcaption>@Marmelade57</figcaption>
                  </figure>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/margaux-haller-8482262bb/"
                  style={{ display: "grid" }}
                >
                  <figure>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                      alt="logo de LinkedIn"
                      height="45"
                      width="128"
                    />
                    <figcaption>Margaux H.</figcaption>
                  </figure>
                </a>
              </div>
            </article>
            <article>
              <h1>Découvrez…</h1>
              <div className="fig">
                <a href="/etudes">
                  <figure>
                    <img src="images/school.svg" alt="" />
                    <figcaption>Mon parcours de formation</figcaption>
                  </figure>
                </a>
                <a href="/passions">
                  <figure>
                    <img src="images/passion.svg" alt="" />
                    <figcaption>Mes passions</figcaption>
                  </figure>
                </a>
                {/* <a href="/projets">
                  <figure>
                    <img src="images/projets.svg" alt="" />
                    <figcaption>Mes projets</figcaption>
                  </figure>
                </a> */}
                {/* <a href="">
            <figure>
              <img src="" alt="" />
              <figcaption></figcaption>
            </figure>
          </a> */}
              </div>
            </article>
          </CardContent>
        </Card>
    </div>
  );
}
