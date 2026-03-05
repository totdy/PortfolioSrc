<script lang="ts">
import Experience from "./components/Experience.vue";

export default {
  name: "App",
  components: {
    Experience,
  }
};
</script>

<template>
  <aside>
    <div>
      <h1>Nazar</h1>
      <p>Frontend Developer</p>
      <address>
        <p>Porto, Portugal <img src="/assets/pt.png" alt="Portugal flag" title="Portugal flag"></p>
        <p>nazar@example.com <button title="Copy email">Copy</button></p>
      </address>
    </div>
    <a href="https://github.com/totdy">
     <img src="/assets/github.png" alt="GitHub" title="GitHub">
    </a>
    <ol>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
  </aside>
  <main>
    <section id="experience">
      <h2>Experience</h2>
      <Experience
        title="Full Stack Developer"
        at="iS Intelligent Solutions"
        where="Maia, Portugal"
        when="May 2021 - Sep 2023"
        what="I designed and implemented dynamic, responsive web pages with a focus on usability and performance. I contributed to the development of interactive dashboards that enabled clear and efficient data visualization. I improved system security by implementing two-factor authentication (2FA), strengthening protection against unauthorized access. I also developed calendar management tools for the support team, allowing clear visualization of working hours and more effective coordination of daily workforce activities. Additionally, I built automation scripts to collect, transform, and import data from multiple sources and formats—including FTP files, CSV, XLSX, and REST/SOAP APIs—into a centralized database, improving data integration and reducing manual processing."
        skills="HTML,CSS,JavaScript,PHP,MySQL,API (REST & SOAP),Automations,Database Management,2FA Implementation"
      />
      <Experience 
        title="Computer Assistant" 
        at="iS Intelligent Solutions" 
        where="Maia, Portugal"
        when="Feb 2019 - Jun 2019"
        what="Curricular Internship"
        skills="Computer Management,Data Backup Solutions,Web Development,HTML,CSS,JavaScript" 
      />
      <Experience 
        title="Technical Support" 
        at="Porto Business School" 
        where="Porto, Portugal"
        when="Feb 2016 - Jun 2016"
        what="Curricular Internship" 
        skills="Problem-solving,Communication,Technical Support,Linux,Windows,MacOS" 
      />
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed
          at felis a enim efficitur bibendum. Curabitur ac ligula a odio efficitur tincidunt. Nulla facilisi.</p>
      </article>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed
          at felis a enim efficitur bibendum. Curabitur ac ligula a odio efficitur tincidunt. Nulla facilisi.</p>        
      </article>
    </section>
  </main>
</template>

<style scoped>
/*@keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }*/
address {
  img {
    width: 20px;
    vertical-align: middle;
    border-radius: 5px;
  }

  button {
    display: inline-block;
  }
}

aside, main{
  padding: 20px;
  display: flex;
  flex-direction: column;  
  flex-grow: 1;
}

aside {
  align-items: end;
  min-width: 200px;
  width: 30%;
  background-color: rgb(165, 165, 255);
}

main {
  align-items: start;
  min-width: 200px;
  width: 70%;
  background-color: rgb(200, 200, 255);
  overflow: auto;
  scroll-behavior: smooth;
}

section {
  max-width: 1000px;
  border: 1px solid black;
  /*animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;*/
}
</style>