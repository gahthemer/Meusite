export default function Hero() {
    const containerHero = document.createElement('div');
    containerHero.className = 'hero w-100 d-flex justify-content-center';

  /*Incorporar os arquivos no inner html*/

  containerHero.innerHTML = `
  <div class = "hero-frame rounded-4  w-100">
 <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="public/assets/img/hoteltransylvania.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="public/assets/img/fachada.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="public/assets/img/hotel2transilvanya.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>`;
  
return containerHero;
}