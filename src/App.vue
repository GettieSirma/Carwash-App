<template>
  <div>
    <nav class="navbar navbar-expand-lg shadow-sm" style="background: linear-gradient(to right, #ffffff, #cccccc);">
      <div class="container">
        <a class="navbar-brand font-weight-bold text-dark" href="#">Carwash</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #ffffff, #cccccc); /* Change colors as needed */
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ff8c00; 
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-collapse {
  justify-content: center; 
}

.navbar-nav {
  flex-direction: row;
}

.nav-item {
  margin: 0 15px; 
}
</style>
