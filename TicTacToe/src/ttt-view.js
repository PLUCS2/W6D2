class View {
  constructor(game, $el) {
    this.game = game; 
    this.el = $el; 
    this.setupBoard(); 
  }

  bindEvents(e) {
    const $pos = $(e.target)
    try { this.game.playMove($pos.data("pos")) }
    catch(err) { alert(err.msg) }
    const sym = this.game.currentPlayer;
    $pos.addClass(sym)
    $(e.target).text(sym);
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $("<ul>");
    

    for(let i = 0; i < 9; i++) {
      const $li = $("<li>");
      $li.data({pos: [Math.floor(i/3),(i%3)]});
      $ul.append($li);
    }
    this.el.append($ul);
  }


}

module.exports = View;
