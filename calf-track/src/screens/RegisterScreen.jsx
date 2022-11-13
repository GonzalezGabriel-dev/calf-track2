import React from 'react';
import NavBar from '../components/NavBar';
import {useBlog} from '../context/ContractProvider'
export default function RegisterScreen() {
  const { user, posts, initialized, initUser, createPost, showModal, setShowModal, } = useBlog()
  return (
    <>
      <NavBar type={'top-nav-collapse2'} />
      <section id="contact" data-stellar-background-ratio="0.5">
        <div class="container">

          <div class="row">
            <div class="col-md-offset-1 col-md-10 col-sm-12">
            <div class="section-title">
                                   <h1>Registro </h1>
            </div>
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
                    id="inputremo"
                    type="file"
                    class="form-control"
                    placeholder=""
                    name="reemo"
                    required=""
                    onChange={function validarExt()
                      {
                          var archivoInput = document.getElementById('inputremo');
                          var archivoRuta = archivoInput.value;
                          var extPermitidas = /(.pdf)$/i;
                          if(!extPermitidas.exec(archivoRuta)){
                              alert('Asegurese de haber seleccionado un pdf con su REEMO');
                              archivoInput.value = '';
                              return false;
                          }else
                          {
                              //PRevio del PDF
                              if (archivoInput.files && archivoInput.files[0]) 
                              {
                                  var visor = new FileReader();
                                  visor.onload = function(e) 
                                  {
                                      document.getElementById('visorArchivo').innerHTML = 
                                      '<embed src="'+e.target.result+'" width="500" height="375" />';
                                  };
                                  visor.readAsDataURL(archivoInput.files[0]);
                              }
                          }
                      }
                      }
                          

                  />
                  
                </div><div id="visorArchivo" class="col-md-12 col-sm-12">
                </div>
                <div class="col-md-12 col-sm-12">
                 
                 
                </div>
              </form>
              <button class="btn" onClick={()=>{
                console.log("funciona")
                createPost("origen", "productor",123456,"reemo",12,"destino","upp","psg")
                }}> Guardar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
