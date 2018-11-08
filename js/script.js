let color;

// Global boolean to be used for dragging painting
let isClicked = false;

let grid = $('.grid');
let defaultColor = 'rgb(250, 255, 240)';

// Functions to be called when DOM is ready
$(function() {
  $('#submit').click(makeGrid);
  $(document).click(paintGrid);
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
    color = $('.color-picker').val();
    // Paint upon single clicking
    $('.pixel').click(function() {

      $(this).css('background-color', color);
      $(this).toggleClass('painted');
    });

    // Paint upon clicking and dragging
    $('.pixel').mousedown(function() {
        $(this).css('background-color', color);
        isClicked = true; // When mouse goes down, set isClicked to true
        $(this).toggleClass('painted');
      })
      .mouseup(function() {
        isClicked = false; // When mouse goes up, set isClicked to false
      });

    $('.pixel').mouseover(function() {
      if (isClicked) { // Only change css if mouse is down
        $(this).css('background-color', color);
        $(this).toggleClass('painted');
      }
    });
}

// TO BE IMPLEMENTED
//function eraseMode() {
//
//}
