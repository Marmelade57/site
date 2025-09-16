import Titre from "@/components/Titre";

export default function Credits() {
  return (
    <>
      <Titre></Titre>
      <article id="art-2">
        <h1 id="t-2">Projets/SAE</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          <div>
            <p>
              <a href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg#/media/File:HTML5_logo_and_wordmark.svg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt="HTML5 logo and wordmark.svg"
                  height="64"
                  width="64"
                />
              </a>
              <br />
              By
              <a
                rel="nofollow"
                className="external text"
                href="https://www.w3.org/html/logo/index.html"
              >
                W3C
              </a>
              ,
              <a
                href="https://creativecommons.org/licenses/by/3.0"
                title="Creative Commons Attribution 3.0"
              >
                CC BY 3.0
              </a>
              ,
              <a href="https://commons.wikimedia.org/w/index.php?curid=12736763">
                Link
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="https://commons.wikimedia.org/wiki/File:Official_CSS_Logo.svg#/media/File:Official_CSS_Logo.svg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg"
                  alt="Official CSS Logo.svg"
                  height="64"
                  width="64"
                />
              </a>
              <br />
              By Javi Aguilar and The CSS-Next Community Group -
              <a
                rel="nofollow"
                className="external free"
                href="https://github.com/CSS-Next/logo.css/blob/main/css.svg"
              >
                https://github.com/CSS-Next/logo.css/blob/main/css.svg
              </a>
              ,
              <a
                href="http://creativecommons.org/publicdomain/zero/1.0/deed.en"
                title="Creative Commons Zero, Public Domain Dedication"
              >
                CC0
              </a>
              ,
              <a href="https://commons.wikimedia.org/w/index.php?curid=155197898">
                Link
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="https://commons.wikimedia.org/wiki/File:Typescript.svg#/media/File:Typescript.svg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                  alt="Typescript.svg"
                  height="64"
                  width="64"
                />
              </a>
              <br />
              By
              <a
                href="https://en.wikipedia.org/wiki/TypeScript"
                className="extiw"
                title="w:TypeScript"
              >
                TypeScript
              </a>
              -
              <span className="url">
                <a
                  rel="nofollow"
                  className="external text"
                  href="https://www.typescriptlang.org/"
                >
                  typescriptlang.org
                </a>
              </span>
              , Public Domain,
              <a href="https://commons.wikimedia.org/w/index.php?curid=120648604">
                Link
              </a>
            </p>
          </div>
        </div>
        <p>
          Le concept de MOND O' MIN appartient à M.Pascal Nitschke ou au
          département informatique de l'IUT de Metz.
        </p>
        <p style={{ marginTop: "2svw" }}>
          Les captures d'écrans de l'application mobile de La Tablée Onirique
          appartiennent à l'association.
        </p>
      </article>
    </>
  );
}
