// hide show menubar

const element = document.getElementById('navbar-item-group');
function menuIcon() {
  if (element.style.display === 'none') {
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}
element.addEventListener('click', menuIcon);

// speakers section

const speakersData = [
  {
    id: 'speaker1',
    profileImage: './resources/speakers/speaker1jpg.jpg',
    name: 'Razib Ahmed',
    position: 'Former and Founder President of e-Commerce Association of Bangladesh (e-CAB)',
    description: 'He is the creator of Search English and serves as the platform s chief executive officer. He also serves as managing director and founder.',
  },
  {
    id: 'speaker2',
    profileImage: './resources/speakers/speaker2.jpg',
    name: 'Kakoly Talokder',
    position: 'President at E-Commerce Development Center',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker3',
    profileImage: './resources/speakers/speaker3 .jpg',
    name: 'Niger Fatema',
    position: 'External Advisor at Eastern University',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker4',
    profileImage: './resources/speakers/sharmin-logo.png',
    name: 'Sharmin Khan',
    position: 'Entrepreneur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker5',
    profileImage: './resources/speakers/sharmin-logo.png',
    name: 'Sharmin Khan',
    position: 'Freelancer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker6',
    profileImage: './resources/speakers/sharmin-logo.png',
    name: 'Sharmin Khan',
    position: 'Entrepreneur Leaders',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
];

let currentPage = 1;
const perpage = 3;

const seeMoreSpeakers = document.querySelector('.see-more-speakers');
const updateSpeakerDom = (data, hasPage, desktop = false) => {
  let mobileSpeaker = document.querySelector('#mobile-speakers-list');

  if (desktop) {
    mobileSpeaker = document.querySelector('#desktop-speakers-list');
  }

  if (!hasPage && !desktop) {
    seeMoreSpeakers.classList.remove('df');
  } else {
    seeMoreSpeakers.classList.add('df');
  }

  data.forEach((item) => {
    const mobileSpeakerRoll = document.createElement('li');
    mobileSpeakerRoll.id = item.id;
    mobileSpeakerRoll.className = 'speakers-roll';
    mobileSpeakerRoll.innerHTML = `
      <div class="speakers-img">
        <img class="tiles" src="./images/tiles.png" alt="tiles"/>
        <img class="profile" src="${item.profileImage}" alt="${item.name}"/>
      </div>
      <div class="speakers-info">
        <h3 class="speakers-name">${item.name}</h3>
        <h6 class="speakers-position">
          ${item.position}
        </h6>
        <P class="speakers-details">${item.description}</P>
      </div>`;
    mobileSpeaker.append(mobileSpeakerRoll);
  });
};

const fecthSpeAkerDataForMobile = (page = 1) => {
  currentPage = page;
  const hasPage = currentPage * perpage < speakersData.length;
  const mobileSpeakerArr = [];
  if (perpage < speakersData.length) {
    for (
      let i = Math.abs(currentPage * perpage - perpage);
      i < currentPage * perpage && i <= speakersData.length && i >= 0; i += 1) {
      mobileSpeakerArr.push(speakersData[i]);
    }
  }

  updateSpeakerDom(mobileSpeakerArr, hasPage);
};

seeMoreSpeakers.addEventListener('click', () => {
  if (currentPage * perpage < speakersData.length) {
    fecthSpeAkerDataForMobile(currentPage + 1);
  } else {
    seeMoreSpeakers.classList.remove('df');
  }
});

const fecthSpeakerDataForDesktop = () => updateSpeakerDom(speakersData, false, true);

window.onload = () => {
  fecthSpeAkerDataForMobile();
  fecthSpeakerDataForDesktop();
};