// Global boolean to be used for dragging painting
let isClicked = false;

const grid = $('.grid');

//Used for erasing function
const defaultColor = 'rgb(250, 255, 240)';

// To be done when DOM is ready
$(function() {
  $('#submit').click(makeGrid);
  $(document).click(function() {
    paintGrid();
    // Activating dblclick eventListener since first click on the grid
    $('.pixel').on('dblclick', erasePixel);
  });
  color = $('.color-picker').val();
});

// Create a HTML table as a grid
function makeGrid() {
  let gridWidth = $('.input-width').val();
  let gridHeight = $('.input-height').val();

  // Emptying canvas before any new grid drawing
  grid.empty();

  // Drawing the rows
  for (let i = 0; i < gridHeight; i++) {
    grid.append($('<tr></tr>'));
    // Drawing the columns
    for (let j = 0; j < gridWidth; j++) {
      $('tr:last').append($('<td></td>'));
      $('td').addClass('pixel');
    }
  }
  // Prevent from refreshing the page everytime a grid is built by clicking submit
  $(this).preventDefault;
}


//Paint upon single clicking
function paintGrid() {
  let color = $('.color-picker').val();
  // Get new selected color
  $('.color-picker').change(function() {
    color = $('.color-picker').val();
  });

  // Paint upon single clicking
  $('.pixel').click(function() {
    $(this).css('background-color', color);
  });

  // Paint upon clicking and dragging
  $('.pixel').mousedown(function() {
      //color = $('.color-picker').val();
      $(this).css('background-color', color);
      isClicked = true; // When mouse goes down, set isClicked to true
    })
    .mouseup(function() {
      isClicked = false; // When mouse goes up, set isClicked to false
    });

  $('.pixel').mouseover(function() {
    if (isClicked) { // Only change css if mouse is down
      $(this).css('background-color', color);
    }
  });

  //   // Making it fully functional on touchscreen devices
  //
  //   // Paint upon single clicking
  //   $('.pixel').on('vclick', function() {
  //     $(this).css('background-color', color);
  //   });
  //
  //   // Paint upon touching and dragging
  //   $('.pixel').on('vmousedown', function() {
  //       $(this).css('background-color', color);
  //       isClicked = true; // When mouse goes down, set isClicked to true
  //     })
  //     .on('vmouseup', function() {
  //       isClicked = false; // When mouse goes up, set isClicked to false
  //     });
  //   // Dragging upon touch moving (using jQuery Mobile)
  //   $('.pixel').on('vmouseover', function() {
  //     if (isClicked) { // Only change css if mouse is down
  //       $(this).css('background-color', color);
  //     }
  //   });
}

// Restoring default color, so it acts like an eraser
function erasePixel() {
  $(this).css('background-color', defaultColor);
}