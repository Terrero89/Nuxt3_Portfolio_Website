<template>
   <div
          class="about-text"
          data-aos="fade-up"
          uk-parallax="target: #hero-img; start:100vh; end: 45%; y: -350; easing: 5; opacity: 1,0,0,0,0;"
        >
          <div class="about-header">
            <h3>Who am I?</h3>
          </div>
          <p>
            Hello again! My name is Sergio Terrero, and I am a senior student at
            <span
              ><a href="https://uml.umassonline.net/"
                >University Of Massachusetts Lowell</a
              >
            </span>
            major in Information Technology. I'm very passionate about creating,
            developing and building things for the web, with a minimalist but
            beautiful design approach.
          </p>

          <p>
            I like to embrace new challenges and learn, You will find me to be a
            curious, analytical problem solver with a focus on continuous
            learning and keeping up-to-date on new technologies.
            <span>Information Technology</span> at
            <span
              ><a href="https://uml.umassonline.net/"
                >University Of Massachusetts Lowell.</a
              >
            </span>
            My main focus is to create accessible, performant SEO websites and
            web applications with the main
          </p>

          <p>
            When i'm not coding I would be doing outdoor activities like hiking,
            trailing and road trips. Other times i'm just doing research about
            new trends, technologies or reading a book to learn something new.
          </p>
        </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    width: 35%;
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
        width: 90%;
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
        width: 80%;
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
        width: 75%;
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
        width: 65%;
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
        width: 35%;
        margin: 1rem 0;
        /* background-color:rgb(95, 0, 0); */
    }

    #about .about-header h3 {
        padding-left: 2rem;
    }
}
</style>
