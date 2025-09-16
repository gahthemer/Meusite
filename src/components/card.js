export default function Card() {
  const cards = document.createElement('cards');

  cards.innerHTML = `
  <div class="containerCard py-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- Card 1 -->
      <div class="col">
        <div class="card h-100  rounded-4 ">
          <div id="carouselExampleRide1" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="public/assets/img/Quarto1.jpg" class="d-block w-100  rounded-4 " alt="Hotel Transylvania">
              </div>
              <div class="carousel-item">
                <img src="public/assets/img/fachada.jpg" class="d-block w-100  rounded-4 " alt="Hotel Facade">
              </div>
              <div class="carousel-item">
                <img src="public/assets/img/hotel2transilvanya.jpg" class="d-block w-100  rounded-4 " alt="Hotel Transylvania 2">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="prev">
              <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="next">
              <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Hotel Transylvania</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-outline-primary">Book Now</button>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
`;


  return cards;
}