/**
Code taker
Nico brinton


*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know.": function(){
      $(this).dialog(`close`);
    }
  }
});


$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
$(`.secret`).draggable({
  helper: `clone`
});
});


$(`#answer`).droppable({
  drop: function(event, ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);

    //check if they got it right
    if ($(this).text() === `Theremin`){
        $(`#solved-dialog`).dialog(`open`);
    }
  }
});
