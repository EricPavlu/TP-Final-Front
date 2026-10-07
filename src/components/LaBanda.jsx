export default function LaBanda() {
  return (
    <main>
      <h1 className="page-title">
        Gustavo "Chizzo" Nápoli (cantante y guitarra), Gabriel "Tete" Iglesias
        (bajo) y Jorge "Tanque" Iglesias (batería)
      </h1>
      <section className="main-section">
        <div className="cards-grid">
          <article className="card">
            <img
              src="/src/assets/img/Gustavo_Napoli_en_2004.jpeg"
              alt="Gustavo Napoli-Lider"
            />
            <div className="card-body">
              <h3>Gustavo "Chizzo" Napoli</h3>
              <p>
                Gustavo Fabián Nápoli (Buenos Aires, 1 de abril de 1967), más
                conocido como Chizzo Nápoli, es el cantante, guitarrista y líder
                de la banda argentina de hard rock La Renga. Se encuentra entre
                los 10 mejores guitarristas argentinos, según la revista Rolling
                Stone.
              </p>              
            </div>
          </article>
          <article className="card">
            <img
              src="/src/assets/img/Tete1.webp"
              alt="Gabriel Iglesias-Bajo"
            />
            <div className="card-body">
              <h3>Gabriel "Tete" Iglesias</h3>
              <p>
                Gabriel Iglesias (Buenos Aires, 11 de febrero de 1967), conocido
                como Tete Iglesias, es un musician argentino, bajista de la banda
                de rock La Renga. Es hermano de Jorge Tanque Iglesias, padre de
                Wayra Iglesias, Lihue IglesiasTupac Iglesias y pareja de Silvina
                Cendón (baterista en Q'Acelga).
              </p>
            </div>
          </article>
          <article className="card">
            <img
              src="/src/assets/img/Tanque2.jfif"
              alt='Jorge "Tanque" Iglesias-Batería'
            />
            <div className="card-body">
              <h3>Jorge "Tanque" Iglesias</h3>
              <p>
                Jorge "Tanque" Iglesias es el legendario baterista y miembro fundador de La Renga, 
                una de las bandas más populares y convocantes de la historia del rock argentino. 
                Nacido el 20 de marzo de 1963 en Buenos Aires, conforma desde 1988 la base rítmica 
                de la banda de Mataderos junto a su hermano, el bajista Gabriel "Tete" Iglesias, y 
                el líder, cantante y guitarrista Gustavo "Chizzo" Nápoli.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}