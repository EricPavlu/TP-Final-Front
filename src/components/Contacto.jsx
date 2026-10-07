export default function Contacto() {
  return (
    <main>
      <h1 className="page-title">Contacto</h1>
      <section className="main-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Tu email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefono:</label>
            <input
              type="tel"
              id="phone"
              placeholder="+54 11 1234 5678"
              name="phone"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Motivo del contacto:</label>
            <select name="reason" id="reason" defaultValue="">
              <option value="" disabled>Selecciona una opcion:</option>
              <option value="Compra">Compra de discos, entradas, etc.</option>
              <option value="Reserva">Reserva de viajes</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <fieldset>
            <legend>Es tu primera vez por aqui?</legend>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  id="first-yes"
                  name="first-visit"
                  value="si"
                  required
                />
                <label htmlFor="first-yes">si</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="first-no"
                  name="first-visit"
                  value="no"
                  required
                />
                <label htmlFor="first-no">no</label>
              </div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="comment">Deje su mensaje</label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Dejanos tu comentario"
              required 
              cols="40" 
              rows="10" 
              maxLength={500}
              minLength={5}
            ></textarea>
          </div>

          <div className="form-buttons">
              <button className="btn btn-primary" type="submit">Enviar</button>
              <button className="btn btn-secondary" type="reset">Borrar</button>
          </div>
        </form>
      </section>
    </main>
  );
}