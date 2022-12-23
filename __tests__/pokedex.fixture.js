export default    `<header>
    <h1>POKEDEX</h1>
    <img class="poke-titulo" src="./titulo-poke.png" alt="">


    </header>

    <main>

    <div class="contenedor">

      <div class="container text-center">
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>     


      <div class="card" style="width: 18rem;">
         <div class="contenedor-imagen"><img src="./poke-default.png" class="card-img-top" alt="..."></div> 
          <div class="card-body-sm">
            <h2 class="card-title">Nombre</h2>
          </div>

          <table class="table align-bottom">
              <tbody>
                <tr>
                  <th scope="row">Altura</th>
                  <td class="altura"></td>
                </tr>
                <tr>
                  <th scope="row">Peso</th>
                  <td class="peso"></td>
                </tr>
                <tr>
                  <th scope="row">Tipo</th>
                  <td class="tipo"></td>
                </tr>
              </tbody>
          </table>
      </div>
    </div>

    </main>

    <footer>
    <nav aria-label="pokes">
      <ul class="pagination pagination-sm justify-content-center flex-sm-wrap" id="paginador">

      </ul>
    </nav>

    </footer>`