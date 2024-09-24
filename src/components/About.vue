<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h1>About Us</h1>
          <p>We are dedicated to providing the best car wash services in the area. Our team of professionals ensures your car looks brand new!</p>
          <p>Founded in 2020, we have quickly become the go-to car wash service for many satisfied customers.</p>
          <router-link to="/services" class="btn btn-orange">Explore Our Services</router-link>
        </div>
        <div class="col-md-6">
          <img src="../assets/aboutus.jpg" alt="Car Wash" class="img-fluid rounded">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .container:hover {
    transform: translateY(-2px);
  }
  
  h1 {
    color: black; 
    font-weight: bold;
  }
  
  p {
    color: #343a40;
    line-height: 1.6;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .btn {
    margin-top: 2.5rem;
    padding: 0.75rem 1.5rem;
    background-color: #ff8c00; 
    border: none;
    border-radius: 5px;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .btn:hover {
    background-color: #e07b00; 
    transform: scale(1.05);
  }
  </style>
  