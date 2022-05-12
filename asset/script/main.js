const projectDatabase = database;
const mainPage = document.querySelector('.main-page');
const modalBox = document.querySelector('.modal-container');
const portfolioGrid = document.querySelector('.portfolio-grid');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgar = document.getElementById('hamburger-icon');
const navClose = document.querySelectorAll('.mobile-nav-link');
const brand = document.querySelector('#brand');
const seeLive = document.querySelector('#see-live');
const seeSource = document.querySelector('#see-source');
let seeLiveUrl = '';
let seeSourceUrl = '';

// modal box details builder
const buildModalBox = (projectId) => {
  let modalObj = {};

  // filter object
  for (let i = 0; i < projectDatabase.length; i += 1) {
    if (projectDatabase[i].id === projectId) {
      modalObj = { ...projectDatabase[i] };
    }
  }

  seeLiveUrl = modalObj.liveVersionUrl;
  seeSourceUrl = modalObj.sourceCodeUrl;

  const modalTechnologies = document.querySelector('.modal-technologies');
  const modalImage = document.querySelector('.modal-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalDetail = document.querySelector('.modal-details-text');
  const technologiesItems = document.createElement('ul');
  technologiesItems.classList.add('card-tags');
  modalImage.setAttribute('src', modalObj.featuredImage);
  modalTitle.innerText = modalObj.projectName;
  modalDetail.innerText = modalObj.projectDescription;

  modalObj.technologies.forEach((elem) => {
    const item = document.createElement('li');
    item.classList.add('tag-text');
    item.innerText = elem;
    technologiesItems.append(item);
  });

  modalTechnologies.replaceChildren(technologiesItems);
};

// see project handler
const seeProjectBtnHandler = (event) => {
  const id = parseInt(event.target.id, 10);
  buildModalBox(id);
  mainPage.style.display = 'none';
  modalBox.style.display = 'block';
};

// project card builder
const buildProjectCard = () => {
  projectDatabase.forEach((data) => {
    const sectionCard = document.createElement('div');
    const featuredImg = document.createElement('img');
    const projectTitle = document.createElement('h3');
    const technologies = document.createElement('ul');
    const projectBtn = document.createElement('button');

    sectionCard.classList.add('section-card');
    featuredImg.classList.add('card-image');
    projectTitle.classList.add('section-card-title');
    technologies.classList.add('card-tags');
    projectBtn.classList.add('section-btn');

    featuredImg.setAttribute('src', data.featuredImage);
    projectTitle.innerText = data.projectName;
    projectBtn.innerText = 'See Project';
    projectBtn.setAttribute('id', data.id);
    projectBtn.addEventListener('click', seeProjectBtnHandler);
    data.technologies.forEach((item) => {
      const techItem = document.createElement('li');
      techItem.classList.add('tag-text');
      techItem.innerText = item;
      technologies.append(techItem);
    });
    sectionCard.append(featuredImg, projectTitle, technologies, projectBtn);
    portfolioGrid.append(sectionCard);
  });
};

window.onload = () => {
  buildProjectCard();
};

// close modal box when user click anywhere outside the modal
window.onclick = (event) => {
  if (event.target === modalBox) {
    modalBox.style.display = 'none';
    mainPage.style.display = 'block';
  }
};

// close modal box when user click X button
const closeBoxModel = () => {
  modalBox.style.display = 'none';
  mainPage.style.display = 'block';
};
const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', closeBoxModel);

// close modal box when user click on seeLive or seeSource btn
// open link url
const openLinkUrl = (link) => {
  window.open(link, '_blank');
  closeBoxModel();
};

seeLive.addEventListener('click', () => {
  openLinkUrl(seeLiveUrl);
});

seeSource.addEventListener('click', () => {
  openLinkUrl(seeSourceUrl);
});

// Open and close mobile menu bar
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  hamburgar.classList.toggle('change');
  brand.classList.toggle('closeBrand');
};

const closeNav = () => {
  hamburgar.classList.remove('change');
  mobileMenu.classList.remove('open');
  brand.classList.remove('closeBrand');
};

hamburgar.addEventListener('click', toggleMobileMenu);

navClose.forEach((elem) => {
  elem.addEventListener('click', closeNav);
});

// form validation 
const form = document.querySelector('form');
const emailField = form.elements.user_email;
const userNameField = form.elements.user_name;
const messageField = form.elements.message;
const showMsgElem = document.createElement('p');
form.append(showMsgElem);

// check email lowerCase validation
const isEmailValid = (email) => {
  const regex =  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  return regex.test(email);
};

// error message
const showErrorMsg = () => {
  const message = 'Email: Invalid characters. Capital letters not allowed';
  showMsgElem.classList.add('errorMessage');
  showMsgElem.innerText = message;
};

// success message on form submited
const showSuccessMsg = () => {
  const message = 'Form Submitted. Thank you for contacting me!';
  showMsgElem.classList.add('successMessage');
  showMsgElem.innerText = message;
};

const checkEmail = () => {
  const email = emailField.value.trim();
  return isEmailValid(email);
};

// clear form fiels
const clearField = () => {
  userNameField.value = '';
  emailField.value = '';
  messageField.value = '';
};

form.addEventListener('submit', (event) => {

  // prevent form from default submit
  event.preventDefault();
  let valid = checkEmail();
  if (valid === false) {
    showErrorMsg();
  } else {
    showSuccessMsg();
    form.submit();
    clearField();
  }
});
