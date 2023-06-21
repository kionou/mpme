<template>
  <Navbar />
  <RouterView />
  
  <footer id="footer" class="footer">

    <Footer />
</footer>


</template>




<script >
  import Navbar from "./components/loyout/navbar.vue"
  import Footer from "./components/loyout/footer.vue"




   import AOS from "aos/dist/aos"
import "@/assets/css/style.css"
// import "@/assets/vendor/bootstrap/css/bootstrap.min.css"
// import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/assets/vendor/aos/aos.css"
import "aos/dist/aos.css"
// import "@/assets/vendor/glightbox/css/glightbox.min.css"
import "@/assets/vendor/swiper/swiper-bundle.min.css"
import "@/assets/css/main.css"
// import "@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
// import "@/assets/vendor/glightbox/js/glightbox.min.js"
import "@/assets/vendor/purecounter/purecounter_vanilla.js"
import "@/assets/vendor/swiper/swiper-bundle.min.js"
//  import  "@/assets/vendor/aos/aos.js"

// import "@/assets/vendor/isotope-layout/isotope.pkgd.min.js"
import "@/assets/vendor/php-email-form/validate.js"
import "@/assets/js/main.js"
// import "@/assets/js/app.js"


  export default {
    name:'App',
    components:{
    Navbar , Footer
    
    },
  created() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}

</script>



<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
