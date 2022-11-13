import React from 'react';
import NavBar from '../components/NavBar';

export default function RegisterScreen() {
  return (
    <>
      <NavBar type={'top-nav-collapse'} />
      <section id="contact" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-1 col-md-10 col-sm-12">
              <form id="contact-form">
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Latitude"
                    name="latitude"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Longitude"
                    name="longitude"
                    required=""
                  />
                </div>

                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Productor"
                    name="productor"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Peso"
                    name="peso"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Edad"
                    name="edad"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Destino"
                    name="destino"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="UPP"
                    name="upp"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="PSG"
                    name="psg"
                    required=""
                  />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label htmlFor="siniiga">REEMO</label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder=""
                    name="reemo"
                    required=""
                  />
                </div>
                <div class="col-md-12 col-sm-12">
                  <input
                    type="submit"
                    class="form-control"
                    name="send message"
                    value="Guardar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
