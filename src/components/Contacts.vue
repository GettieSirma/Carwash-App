<template>
  <div class="container mt-5">
    <h1>Contact Us</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" class="form-control" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" class="form-control" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone Number (optional):</label>
        <input type="tel" id="phone" class="form-control" v-model="formData.phone" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" class="form-control" rows="3" v-model="formData.message" required></textarea>
      </div>
      <button type="submit" class="btn btn-orange mt-3">Send Message</button>
    </form>

    <div v-if="alertVisible" class="alert alert-success mt-3" role="alert">
      Your message has been sent successfully!
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      alertVisible: false,
    };
  },
  methods: {
    handleSubmit() {
      // Normally, here you would send the data to your backend
      console.log('Form Submitted:', this.formData);
      this.alertVisible = true;

      // Clear the form after submission
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };

      // Hide alert 
      setTimeout(() => {
        this.alertVisible = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  color: black; 
  margin-bottom: 2rem;
}

.contact-info {
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #343a40;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-weight: bold;
  color: #343a40;
}

input, textarea {
  border-radius: 5px;
  border: 1px solid #ced4da;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #ff8c00; 
  border: none;
  border-radius: 5px;
  color: white;
  transition: background-color 0.3s, transform 0.2s;
}

.btn:hover {
  background-color: #e07b00;
  transform: scale(1.05);
}

.alert {
  font-weight: bold;
  text-align: center;
}
</style>
