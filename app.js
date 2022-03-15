const grid = document.querySelector(".grid");
// const macyInstance = new Macy({
//   container: grid,
//   margin: {
//     x: 10,
//     y: 16  
//   },
//   mobileFirst: true,
//   gutter: 10
// })
var msnry = new Masonry( grid, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  percentPosition: true,
  gutter: 5
});

let urlArray = [];
const url = "https://api.unsplash.com/photos/?client_id=CilJecfp_j57CrIbB-utb1Nz-5RYb6viJ_ZH1aSOlyo";


const getImage = async () => {
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      for (i=0; i<data.length; i++) {
        let catImage = data[i].urls.small
        urlArray.push(catImage)
        let container = document.createElement('div');
        container.classList.add('grid-item')
        let img = document.createElement('img');
        img.classList.add('cat')
        img.src = urlArray[i];
        img.alt = `chat numéro ${i}`
        container.append(img)
        grid.append(container)
        // img.style.maxHeight = 800 + 'px'
        // img.style.maxWidth = 1000 + 'px'
      }
    })
};

getImage();

