const galleryRef = document.querySelector('#gallery');

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

// console.log(galleryRef);

// const img = document.createElement('img');
// const img = `<img src = "${images.url} alt = "${images.alt}>`;
// const li = document.createElement('li');

const createGalleryItems = function (arr) {
    let item;
    return arr.map(element => {

        // const img = ;
        // console.log(element.url);
        item = `<li><img src = "${element.url}" width = "600px" heigth = "auto" alt = "${element.alt}"></li>`;
        galleryRef.insertAdjacentHTML('beforebegin', item);
    });

}
createGalleryItems(images)
// galleryRef.insertAdjacentHTML(createGalleryItems(images));



