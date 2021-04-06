const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesRef = document.querySelector('ul#gallery');
console.log(imagesRef);
// imagesRef.srs = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imagesRef.alt = 'White and Black Long Fur Cat';

// const image1El = document.createElement('img');
// image1El.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// image1El.alt = 'Group of Horses Running';
// image1El.width = 640;
// //console.log(imageEl);
// //imagesRef.appendChild(image1El);

// const image2El = document.createElement('img');
// image2El.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// image2El.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// image2El.width = 640;


// const image3El = document.createElement('img');
// image3El.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// image3El.alt = 'Group of Horses Running';
// image3El.width = 640;

// imagesRef.append(image1El, image2El, image3El)

// const imagesElRef =images.map(imege => {
//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 640;
//   return imageEl;
// })    
// const imagesEl = images.map(image => {
//    const liImgRef = document.createElement('li');
//                liImgRef.classList.add('images__item');
//          const ImgRef = document.createElement('img');
//                ImgRef.src = image.url;
//                ImgRef.alt = image.alt;
//                ImgRef.width = 640;
//   liImgRef.appendChild(ImgRef);
  
//   return liImgRef;
// }); 
 
const makeImages = (newImages) => {
  return newImages.map(image => {
    const liImgRef = document.createElement('li');
    liImgRef.classList.add('images__item');
    const ImgRef = document.createElement('img');
    ImgRef.src = image.url;
    ImgRef.alt = image.alt;
    ImgRef.width = 640;
    liImgRef.appendChild(ImgRef);
  
    return liImgRef;
  });
};

const imagesEl = makeImages(images);
// const imagesEl = [];
// images.forEach(image => {
//   const liImgRef = document.createElement('li');
//         liImgRef.classList.add('images__item');
//   const ImgRef = document.createElement('img');
//   ImgRef.src = image.url;
//   ImgRef.alt = image.alt;

//   ImgRef.width = 640;
//   liImgRef.appendChild(ImgRef);

//   imagesEl.push(liImgRef);
//   return liImgRef;
// });
// console.log(imagesEl);
  
imagesRef.append(...imagesEl);
//   liImgRef.src = el.url;
//   liImgRef.alt = el.alt;
//   liImgRef.width = 640;
  
//   return liImgRef;
  
// });return images
// }
