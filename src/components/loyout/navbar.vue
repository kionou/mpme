<template>
    <div>
        <!-- ======= Header ======= -->
  <section id="topbar" class="topbar d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <!-- <h6 >Ministre du Commerce, de l’Industrie et des Petites et Moyennes Entreprises</h6> -->
      </div>
    </div>
  </section>
  <!-- End Top Bar -->
  <header id="header" class="header d-flex align-items-center">

<div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  <a href="index.html" class="logo d-flex align-items-center">
    <!-- Uncomment the line below if you also wish to use an image logo -->
    <img src="@/assets/img/armoirie.png" alt="">
    <h1>DNPMECL </h1>
  </a>
  <nav id="navbar" class="navbar">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/liste">Liste PME</router-link></li>
      <li><a href="">Statistiques</a></li>
      <li><a href="">Recherche</a></li>
      <li><a href="">Team</a></li>
      <li><a href="blog.html">Blog</a></li>
    
    </ul>
  </nav>

  <router-link to="/login" class="btnLogin">Connexion</router-link>


  <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
  <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

</div>
</header>
    </div>
</template>

<script>
export default {
    name: 'MpmeNavbar',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

.btnLogin {
  padding: 1em 3em;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}

.btnLogin:hover {
  background-color: #fff;
  border: 1px solid #F9D310 ;
 
}



</style>