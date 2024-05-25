const projects = [
  {
    id: 'card1',
    title: 'Desert Green Africa',
    image1: './images/dg.png',
    description1:
      'Desert Green is an Agritech start-up founded on the core-mission of tackling food insecurity challenges in the informal agri-value chain in Africa. We build mobile tech solutions to improve productivity, profits & livelihoods for Africa small-scale farmers & Informal traders while bringing youth back to farming.',
    description2:
      'Co-founded in 2015, formally registered in 2016, by 3 young entrepreneurs from different walks of life with 3 things in common: a rural upbringing, a passion for Agri-tech & a near-impossible vision for a self-sustaining connected Africa.',
    technologyList: ['Webside Design', 'Development', 'On page SEO'],
    firstButton: 'See Live',
    secondButton: 'See Design',
    SeeLive: 'https://sphandanjalo.com/deesertgreen/index.html',
    seeSource: 'https://www.figma.com/file/cqaYOAiigwpHWOOUZKpd1p/Desert-Green-Africa?node-id=0%3A1&t=YF33EXHdRNzehZiE-1'
  },

  {
    id: 'card2',
    title: 'Movie Biskop',
    image1: './images/movie-biskop.png',
    image2: './images/latest-movies.png',
    image3: './images/Genre.png',
    image4: './images/Details.png',
    description1:
      'Biskop is a movie booking app that allows a user to signup and login. Add movies or book available movie from the list. This app was built with react redux for the frontend along with rails for backend.',
    description2:
      '',
    technologyList: ['Webside Design', 'Development', 'On page SEO'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: 'https://exquisite-marigold-3a82c1.netlify.app/',
    seeSource: 'https://github.com/HSMathebula/movie-booking-app-frontend'
  },

  {
    id: 'card3',
    title: 'Silector',
    image1: './images/silector.png',
    description1:
      'Is a company base in eMalahleni klipfontein. We are fully complient to the industry regulations, weve been opararing since 2020 and have never failed to deliver what we promise. We offer a variety of services some are rear services round the city of eMalahleni.',
    description2:
      '',
    technologyList: ['UI Design', 'HTML/CSS', 'jQuery'],
    firstButton: 'See Live',
    secondButton: 'Source Code Not Available',
    SeeLive: 'http://www.silector.co.za/index.html',
    seeSource: 'https://github.com/HSMathebula'
  },

  {
    id: 'card4',
    title: 'Leaderboard',
    image2: './images/leaderboardUI.png',
    image1: './images/leaderboardUI.png',
    image3: './images/leaderboardUI.png',
    image4: './images/leaderboardUI.png',
    image5: './images/leaderboardUI.png',
    image6: './images/leaderboardUI.png',
    image7: './images/leaderboardUI.png',
    image8: './images/leaderboardUI.png',
    description1:
      'The leaderboard is a board that shows the names and positions of the leading competitors in a competition. To see the names and scores Click <b>Refresh</b>',
    description2:
      'This is a project from Microverse. Microverse is an online Full-stack software development programme that is fully remote, and global. I used HTML, CSS, JavaScript, Webpack, Jest for test, API, and other packages check the readme file by clicking <b>See Source</b> or <b>See Live</b> for the webside page.',
    technologyList: ['HTML/CSS', 'Javascript', 'Webpack'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: 'https://hsmathebula.github.io/LeaderBoard/dist/',
    seeSource: 'https://github.com/HSMathebula/LeaderBoard'
  },

  {
    id: 'card5',
    class: 'mySlides',
    title: 'ToDo List',
    image1: './images/todolist-01.png',
    image2: './images/todolist-01.png',
    image3: './images/todolist-01.png',
    image4: './images/todolist-01.png',
    image5: './images/todolist-01.png',
    image6: './images/todolist-01.png',
    image7: './images/todolist-01.png',
    image8: './images/todolist-01.png',
    description1:
      'In this project I created a todo list that add a task, edit a task, complete tasks, delete task, and clear all completed tasks. Go to my git hub to see more projects.',
    description2:
      'I used HTML/CSS and JavaScript ES6 and I store the data to the local storage of the browser.',
    technologyList: ['HTML/CSS', 'JavaScript', 'Local Starage'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: 'https://hsmathebula.github.io/To-Do-List-App/',
    seeSource: 'https://github.com/HSMathebula/To-Do-List-App'
  },

  {
    id: 'card6',
    title: 'Other Projects and Concepts',
    image1: './images/simplyLokhal-01.png',
    image2: './images/wrc-01.png',
    image3: './images/Ilead-01.png',
    image4: './images/Logos-01.png',
    image5: './images/simplyLokhal-01.png',
    image6: './images/wrc-01.png',
    image7: './images/Ilead-01.png',
    image8: './images/Logos-01.png',
    description1:
      'These are some of the designs I did for other people as a freelancer.',
    description2:
      'The designs ranges from logos, posters, brochures, etc. See Live and See Source are not available for this project.',
    technologyList: ['Illutrator', 'Photoshop', 'Figma'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    SeeLive: '#',
    seeSource: 'https://github.com/HSMathebula'
  },
];

const section = document.querySelector('.main-container');
projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
    <h2>${project.title}</h2>
    <ul>
        <li>${project.technologyList[0]}</li>
        <li>${project.technologyList[1]}</li>
        <li>${project.technologyList[2]}</li>
    </ul>

    <div>
      <img class="mySlides" src="${project.image1}" alt="project img">
      <img class="mySlides" src="${project.image2}" alt="project img">
      <img class="mySlides" src="${project.image3}" alt="project img">
      <img class="mySlides" src="${project.image4}" alt="project img">
    </div>

    <p>${project.description1}</p>
    <p>${project.description2}</p>
    <div>
      <a href="${project.SeeLive}">${project.firstButton}<img src="./images/ic_link.png" alt="See live"></a>
      <a href="${project.seeSource}">${project.secondButton}<img src="./images/ic_github_blue.png" alt="source-code"></a>
    </div>
  `; 
});

const seeProjectButtons = document.querySelectorAll('.project-button');

seeProjectButtons.forEach((button) => {
  projects.forEach((project) => {
    if (button.id === project.id) {
      button.addEventListener('click', () => {
        const popUpSection = document.createElement('section');
        popUpSection.innerHTML = `
          <div class="modal">
            <div class="bg">
              <div class="top-div">
                <span class="close-button">&times;</span>
                <div class="title-list">
                  <h2 class="title">${project.title}</h2>
                  <ul class="skills">
                      <li class="skills-list">${project.technologyList[0]}</li>
                      <li class="skills-list">${project.technologyList[1]}</li>
                      <li class="skills-list">${project.technologyList[2]}</li>
                  </ul>
                </div>
              </div>
          
              <div class="md-div">
                <div class="container1">
                  <div class="my-slide">
                    <div class="mySlides">
                      <img src="${project.image1}" alt="project img">
                    </div>
                    <div class="mySlides">
                      <img src="${project.image2}" alt="project img">
                    </div>
                    <div class="mySlides">
                      <img src="${project.image3}" alt="project img">
                    </div>
                    <div class="mySlides">
                      <img src="${project.image4}" alt="project img">
                    </div>
                      
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                  </div>
                </div>
          
                <div class="bottom-div">
                  <p class="p-tag">${project.description1}</p>
                  <p class="p-tag">${project.description2}</p>
                  <div class="cta-1">
                      <a href="${project.SeeLive}" class="see-live">See live</a>
                      <a href="${project.seeSource}" class="source-code">Source code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        `;
        
        section.appendChild(popUpSection);
        const span = document.querySelector('.close-button');
        span.addEventListener('click', () => {
          section.removeChild(popUpSection);
        });
        showSlides();
      });
    }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(slides != true && dots != true){
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}