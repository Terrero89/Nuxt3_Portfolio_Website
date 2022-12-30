<script></script>
<template>
  <section id="about" uk-parallax=" blur: 0.8; ">
    <div>
      <h1 class="head ">About</h1>
      <div class="about-container">
        <!-- about text component -->

        <AboutText />

        <!-- about image component -->
        <AboutImage />
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  margin: 10rem 0 0rem 0;
}
.about-container .square {
  margin: 5rem 0;
  width: 30rem;
  height: 40rem;
  border-radius: 50%;
}

#about {
  min-height: 70vh;
  padding: 0 auto;

  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
}

#about .about-header h3 {
  margin: 2rem 0;
  padding: 0 0 0 2rem;
  font-size: 3rem;
  line-height: 3rem;
  color: rgb(255, 255, 255, 0.8);
  font-weight: 600;
  padding: auto 0;
}

/* about container */
#about .about-container {
  margin: 8rem 0;
  position: relative;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
}

/* about text */

span a {
  color: #61dbfb;
  text-decoration: none;
}

span a:hover {
  color: #3aafcc;
  transition: 0.3s;
  text-decoration: underline;
}

#about .about-header h3 {
  margin: 2rem 0;
  padding: 0;
  font-size: 2.5rem;
  color: rgba(225, 244, 255, 0.7);
  font-weight: 800;
}

#about .about-text {
  margin: 0 2rem;
  width: 40%;
}

.about-text p {
  color: rgba(205, 229, 243, 0.8);
  font-size: 1.55rem;
  line-height: 2.5rem;
  padding: 0 2rem 0 2rem;
  margin: 2rem 0 2rem 0;
}

@media only screen and (max-width: 390px) {
  #about .about-text {
    width: 90%;
    margin: 3.5rem 0;
    /* background-color:rgb(21, 0, 95); */
  }

  #about .about-text p {
    font-size: 1.5rem;
    padding: 0;
  }
}

@media only screen and (min-width: 391px) and (max-width: 425px) {
  #about .about-text {
    width: 095%;
    margin: 3.5rem 0;
    /* background-color:rgb(105, 39, 0); */
  }

  #about .about-text p {
    font-size: 1.5rem;
    padding: 0;
  }

  #about .about-header h3 {
    padding: 0;
  }
}

@media only screen and (min-width: 426px) and (max-width: 536px) {
  #about .about-text {
    width: 90%;
    /* background-color:rgb(0, 92, 77); */
    margin: 3.5rem 0;
  }

  #about .about-text p {
    font-size: 1.5rem;
    padding: 0;
  }

  #about .about-header h3 {
    padding: 0;
  }
}

@media only screen and (min-width: 537px) and (max-width: 610px) {
  #about .about-text {
    width: 85%;
    /* background-color:rgb(77, 77, 77); */
    margin: 3.5rem 0;
  }

  #about .about-text p {
    font-size: 1.5rem;
    padding: 0;
  }

  #about .about-header h3 {
    padding: 0;
  }
}

@media only screen and (min-width: 611px) and (max-width: 768px) {
  #about .about-text {
    width: 90%;
    margin: 1rem 0;
    /* background-color:rgb(90, 75, 75); */
    margin: 3.5rem 0;
  }

  #about .about-header h3 {
    padding: 0;
  }

  #about .about-text p {
    padding: 0;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  #about .about-text {
    width: 35%;
    margin: 1rem 0;
    /* background-color:rgb(95, 0, 0); */
  }

  #about .about-header h3 {
    padding-left: 2rem;
  }
}

@media only screen and (min-width: 1025px) {
  #about .about-text {
    width: 40%;

    margin: 1rem 0;
    /* background-color:rgb(95, 0, 0); */
  }

  #about .about-header h3 {
    padding-left: 2rem;
  }
}

/* image */

.about-container .square {
  position: relative;
  /* border: solid red 1px; */
  width: 31rem;
  height: 32rem;
  border-radius: 5px;

  margin: 3rem 0 0 0;
}

.about-container .square2 {
  overflow: hidden;
  z-index: 0;

  z-index: 100;
  width: 32rem;
  height: 32rem;
  border-radius: 5px;
}

#about .about-container .about-img {
  overflow: hidden;
  object-fit: fill;
  margin: auto 0;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-top: 5rem;
  height: 32rem;
}

#about .about-container .about-img img {
  position: absolute;
  border-radius: 0% 0% 50% 50%;
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
