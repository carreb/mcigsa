<template>
  <GSAHeaderVue></GSAHeaderVue>
  <div class="fadein-aftertitle">
      <GSANavbarVue></GSANavbarVue>
      <div class="about">
        <h1>Who Are We?</h1>
        <p>GSA stands for gay straight alliance or gender sexuality alliance. No matter which description you use, we are a
          club
          for people in the 2SLGBTQQIA+ community and their allies. We are a social club for people who are looking for a safe
          space to chat, make friends, ask questions, and feel accepted.</p>
      </div>
      <div class="whyjoin">
        <h1>Why You Should Join</h1>
          <ul>
            <li>Promote mental health and self empowerment</li>
            <li>Feel accepted and less alone</li>
            <li>Find friends in the community</li>
            <li>Learn more about the community</li>
            <li>Stand up against the hate</li>
          </ul>
      </div>
      <div class="ourgoals">
        <h1>Our Goals</h1>
        <ul>
          <li>Create a safe space at MCI for everyone in the 2SLGBTQQIA+ community</li>
          <li>To raise awareness about the community</li>
        </ul>
      </div>
    <div class="moreinfo">
      <h1>More Info</h1>
      <ul>
        <li>We hold meetings in Room 236 every Wednesday</li>
        <li>Instagram: <font-awesome-icon style="color: black;" icon="fa-brands fa-instagram" /> martingrovegsa</li>
        <li>Google Classroom: <font-awesome-icon style="color: black;" icon="fa-solid fa-chalkboard-user" /> 26g2nno</li>
      </ul>
    </div>
  </div>
  <br>
  <br>
  <br>
  <footer class="footer">
    <p><a href="https://github.com/carreb/mcigsa">made with ❤️🧡💛💚💙💜</a></p>
  </footer>
</template>

<script>
import GSAHeaderVue from './components/GSAHeader.vue';
import GSANavbarVue from './components/GSANavbar.vue';

export default {
  name: 'App',
  components: {
    GSAHeaderVue,
    GSANavbarVue,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');

* {
  font-family: "Inter", sans-serif;
}

html {
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  width: 100%;
}


body {
  margin: 0;
  min-height: 100vh;
}

.about {
  position: relative;
  top: 300px;
  left: 0;
  right: 0;
  margin: auto;
  width: 1000px;
  text-align: center;
}

.about > h1 {
  font-size: 100px;
  font-weight: 800;
}

.about > p {
  position: relative;
  top: -50px;
  font-size: 45px;
  color: gray;
  margin: 0;
}

.whyjoin {
  position: relative;
  top: 240px;
  left: 0;
  right: 0;
  margin: auto;
  width: 1000px;
  text-align: center;
}

.whyjoin > h1 {
  font-size: 95px;
  font-weight: 800;
}

.whyjoin > ul {
  list-style-type: none;
  position: relative;
  top: -50px;
}

.whyjoin > ul > li {
  text-align: center !important;
  font-size: 40px;
  color: gray;
  padding-bottom: 5px;
  margin: 0;
}

.ourgoals {
  position: relative;
  top: 180px;
  left: 0;
  right: 0;
  margin: auto;
  width: 1000px;
  text-align: center;
}

.ourgoals>h1 {
  font-size: 95px;
  font-weight: 800;
}

.ourgoals>ul {
  list-style-type: none;
  position: relative;
  top: -50px;
}

.ourgoals>ul>li {
  text-align: center !important;
  font-size: 40px;
  color: gray;
  padding-bottom: 5px;
  margin: 0;
}

.moreinfo {
  position: relative;
  top: 120px;
  left: 0;
  right: 0;
  margin: auto;
  width: 1000px;
  text-align: center;
  padding-bottom: 50px;
}

.moreinfo>h1 {
  font-size: 95px;
  font-weight: 800;
}

.moreinfo>ul {
  list-style-type: none;
  position: relative;
  top: -50px;
}

.moreinfo>ul>li {
  text-align: center !important;
  font-size: 40px;
  color: gray;
  padding-bottom: 5px;
  margin: 0;
}


.footer {
  margin-top: auto;
  bottom: 0;
  height: 25px;
  width: 100%;
  padding: 15px;
  background-color: #f3f3f3;
}
.footer > p {
  font-size: 12px;
}

a {
  color: rgb(41, 190, 240);
  font-weight: 600;
  text-decoration: none;
}

a:visited {
  color: rgb(41, 190, 240);
}

.fadein-aftertitle {
  opacity: 0;
  transform: translateY(10px);
  animation: fadein ease-out 500ms forwards;
  animation-delay: 2000ms;
}

@keyframes fadein {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
