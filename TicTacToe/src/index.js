const View = require("./ttt-view.js") // require appropriate file
const Game = require("../gamePlayCode/game.js") // require appropriate file

  $(() => {
    // Your code here
    const game = new Game(); 
    const container = $(".ttt");
    const view = new View(game, container);

    $('li').on('click', e => {
      view.bindEvents(e)
      if (view.game.winner()) {
        const win = $("<h2>");
        win.text(`${view.game.currentPlayer} Won!`);
        $("body").append(win);
        // alert(`${view.game.currentPlayer} Won!`);
        // window.location.reload();
      } 
    });

  });
