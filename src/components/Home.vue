<template>
    <div class="container mt-5 text-center">
      <div class="image-container">
        <img src="../assets/homep.jpg" class="img-fluid rounded shadow" alt="Carwash" />
        <div class="overlay">
          <h1 class="display-4 font-weight-bold">Welcome to Our Carwash</h1>
          <p class="lead">We provide the best car wash services in town, ensuring your vehicle looks brand new!</p>
        </div>
      </div>
  
      <div class="mt-5">
        <h2 class="text-dark">Why Choose Us?</h2>
        <div class="row mt-4">
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Experienced Professionals</h5>
                <p class="card-text">Our skilled team ensures top-notch service with every wash.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Eco-Friendly Products</h5>
                <p class="card-text">We use products that are safe for the environment and your car.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">100% Satisfaction Guarantee</h5>
                <p class="card-text">Your satisfaction is our priority—every time!</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Quick and Efficient Service</h5>
                <p class="card-text">We value your time and work efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-4">
  <router-link to="/services" class="btn btn-orange btn-lg">Explore Our Services</router-link>
</div>


    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .image-container {
    position: relative;
    width: 100%;
    overflow: hidden; 
  }
  
  .img-fluid {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease;
  }
  
  .img-fluid:hover {
    transform: scale(1.05); 
  }
  
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6); 
    padding: 20px;
    border-radius: 10px;
  }
  
  .overlay h1, .overlay p {
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); 
  }
  
  h2 {
    margin-top: 20px;
    color: #007bff; 
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  
  .btn-orange {
  background-color: #ff8c00;
  border-color: #ff8c00;
  color: #ffffff; 
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-orange:hover {
  background-color: #e07b00; 
  border-color: #e07b00;
}

  </style>
  