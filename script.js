window.addEventListener('DOMContentLoaded', (event) => {
    // Fort details
    const fortDetailsContainer = document.getElementById('fort-details-container');
    const fortDetailsData = [
      {
        id: 1,
        name: 'Fort 1',
        image: 'images/fort1.jpg',
        description: 'Details about Fort 1.',
      },
      {
        id: 2,
        name: 'Fort 2',
        image: 'images/fort2.jpg',
        description: 'Details about Fort 2.',
      },
      {
        id: 3,
        name: 'Fort 3',
        image: 'images/fort3.jpg',
        description: 'Details about Fort 3.',
      },
      {
        id: 4,
        name: 'Fort 4',
        image: 'images/fort4.jpg',
        description: 'Details about Fort 4.',
      },
      {
        id: 5,
        name: 'Fort 5',
        image: 'images/fort5.jpg',
        description: 'Details about Fort 5.',
      },
      {
        id: 6,
        name: 'Fort 6',
        image: 'images/fort6.jpg',
        description: 'Details about Fort 6.',
      },
      {
        id: 7,
        name: 'Fort 7',
        image: 'images/fort7.jpg',
        description: 'Details about Fort 7.',
      },
      {
        id: 8,
        name: 'Fort 8',
        image: 'images/fort8.jpg',
        description: 'Details about Fort 8.',
      },
      {
        id: 9,
        name: 'Fort 9',
        image: 'images/fort9.jpg',
        description: 'Details about Fort 9.',
      },
      {
        id: 10,
        name: 'Fort 10',
        image: 'images/fort10.jpg',
        description: 'Details about Fort 10.',
      },
    ];
  
    const urlParams = new URLSearchParams(window.location.search);
    const fortId = urlParams.get('id');
    if (fortId) {
      const fort = fortDetailsData.find((item) => item.id === parseInt(fortId));
      if (fort) {
        fortDetailsContainer.innerHTML = `
          <h2>${fort.name}</h2>
          <img src="${fort.image}" alt="${fort.name}" class="fort-image">
          <p>${fort.description}</p>
        `;
      } else {
        fortDetailsContainer.innerHTML = '<p>Fort details not found.</p>';
      }
    }
  
    // Image gallery
    const imageGallery = document.getElementById('image-gallery');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
  
    const imageGalleryData = [
      'images/fort1.jpg',
      'images/fort2.jpg',
      'images/fort3.jpg',
      'images/fort4.jpg',
      'images/fort5.jpg',
      'images/fort6.jpg',
      'images/fort7.jpg',
      'images/fort8.jpg',
      'images/fort9.jpg',
      'images/fort10.jpg',
    ];
  
    imageGalleryData.forEach((imageUrl) => {
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Fort Image';
      image.className = 'gallery-image';
      image.addEventListener('click', () => openModal(imageUrl));
      imageGallery.appendChild(image);
    });
  
    function openModal(imageUrl) {
      modalContent.innerHTML = `<img src="${imageUrl}" alt="Fort Image">`;
      modal.style.display = 'block';
    }
  
    modalClose.addEventListener('click', closeModal);
  
    function closeModal() {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
    }
  });
  