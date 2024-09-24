<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4 text-dark">Our Services</h1>
      <div class="row">
        <div class="col-md-4" v-for="service in services" :key="service.name">
          <div class="card mb-4 shadow-sm service-card">
            <img :src="service.image" class="card-img-top" :alt="service.name">
            <div class="card-body">
              <h5 class="card-title">{{ service.name }}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="detail in service.details" :key="detail">{{ detail }}</li>
              </ul>
              <button class="btn btn-orange mt-3" @click="bookService(service.name)">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesPage',
    data() {
      return {
        services: [
          {
            name: 'Exterior Wash',
            image: require('../assets/exteriorwashs.jpg'), 
            details: ['Hand wash', 'Rinse', 'Drying']
          },
          {
            name: 'Interior Cleaning',
            image: require('../assets/interior-cleaning.jpg'),
            details: ['Vacuuming', 'Wiping surfaces', 'Shampooing seats']
          },
          {
            name: 'Waxing',
            image: require('../assets/waxing.jpg'),
            details: ['Carnauba wax', 'Polish finish', 'Protective layer']
          },
          {
            name: 'Engine Cleaning',
            image: require('../assets/engine-cleaning.jpg'),
            details: ['Degreasing', 'Cleaning hoses', 'Visual inspection']
          },
          {
            name: 'Detailing',
            image: require('../assets/detailing.jpg'),
            details: ['Full exterior wash', 'Interior shampoo', 'Tire shine']
          },
          {
            name: 'Headlight Restoration',
            image: require('../assets/headlight-restoration.jpg'),
            details: ['Polishing', 'Clear coat application', 'Visibility improvement']
          }
        ]
      };
    },
    methods: {
      bookService(serviceName) {
        alert(`You've booked the ${serviceName} service.`);
      }
    }
  };
  </script>
  
  <style scoped>
  .service-card {
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    text-align: center;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #343a40; 
  }
  
  .list-group-item {
    font-size: 0.9rem;
  }
  
  .btn-orange {
    background-color: #ff8c00;
    border-color: #ff8c00;
    color: white;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .btn-orange:hover {
    background-color: #e07b00; 
    border-color: #e07b00;
  }
  </style>
  