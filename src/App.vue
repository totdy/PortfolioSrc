<script lang="ts">
</script>

<template>
  <header></header>
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
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"
        display="inline-block" overflow="visible" style="vertical-align:text-bottom">
        <path
          d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z">
        </path>
      </svg>
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
      <article>
        <h3>Full Stack Developer</h3>
        <div class="where">iS Intelligent Solutions</div>
        <div class="when">May 2021 - Sep 2023 • 2 years 5 months</div>
        <div class="what">
          Throughout my professional career, I have played a fundamental role in creating and improving innovative digital solutions. Below, I highlight some of the main achievements:
          1. Web Page Development:
            I designed and implemented several dynamic and responsive web pages, prioritizing an engaging and intuitive user experience.
          2. Smart Dashboards:
            I created interactive dashboards for data visualization, providing valuable insights to support strategic decision making.
          3. Advanced Statistical Analysis:
            I used various tools to create detailed graphs and statistics, allowing for an in-depth understanding of data and trends.
          4. Two-Factor Authentication (2FA) Implementation:
            Reinforced systems security by successfully implementing two-factor authentication, ensuring a safer digital environment.
          5. Efficient Schedule Management:
            I developed time management systems to optimize the organization and monitoring of daily activities.
          6. Preparation of Personalized Surveys:
            I created custom questionnaires to collect relevant data, providing crucial insights to improve processes and operations.
          7. Development of REST APIs:
            Implemented a REST API for efficient sending and receiving of data, improving communication between systems. I had also created a REST API dedicated to sending SMS messages, promoting instant and effective communication.
          8. Data Import Automation:
            Developed automation scripts for transforming and importing data from different formats, including XLS, XLSX, CSV and TXT, into a centralized database.
        </div>
        <div class="skills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>API (REST & SOAP)</li>
            <li>Automations</li>
            <li>Database Management</li>
            <li>2FA Implementation</li>
          </ul>
        </div>
      </article>
      <article>
        <h3>Computer Assistant</h3>
        <div class="where">iS Intelligent Solutions</div>
        <div class="when">Feb 2019 - Jun 2019 • 5 months</div>
        <div class="what">
          Curricular Internship
        </div>
        <div class="skills">
          <ul>
            <li>Computer Management</li>
            <li>Data Backup Solutions</li>
            <li>Web Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </article>
      <article>
        <h3>Technical Support</h3>
        <div class="where">Porto Business School</div>
        <div class="when">Feb 2016 - Jun 2016 • 5 months</div>
        <div class="what">
          Curricular Internship
        </div>
        <div class="skills">
          <ul>
            <li>Problem-solving</li>
            <li>Communication</li>
            <li>Technical Support</li>
            <li>Linux</li>
            <li>Windows</li>
            <li>MacOS</li>
          </ul>
        </div>
      </article>
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
  <footer></footer>
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
address{
  img {
    width: 20px;
    vertical-align: middle;
    border-radius: 5px;  
  }
  button{
    display: inline-block;
  }
}

aside {
  width: 200px;
  background-color: rgb(165, 165, 255);
  padding: 20px;
  height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  background-color: rgb(200, 200, 255);
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
}

section {
  height: 100vh;
  border: 2px solid black;
  /*animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;*/
}
</style>