class View {
  constructor(game, $disp) {
    this.game = game;
    this.disp = $disp;
    this.setUpTowers();
    this.arr = [];
  }

  setUpTowers() {
    // const $ul = $("<ul>");
    for (let i = 0; i < 3; i++) {
      const $ul = $("<ul>");
      $ul.data({num: i});
      if ( i === 0) {
        for (let k = 0; k < 3; k++) {
          let nums = ["one", "two", "three"]
          const $li = $("<li>");
          $li.addClass(`${nums[k]}`);
          $ul.append($li);
        }
      }
      this.disp.append($ul);
    }
  }

  clickTower(e) {
  // const $tow = $(e.target);
  this.arr.push(e.target);
  if (this.arr.length === 2) {
    const movement = [$(this.arr[0]).data("num"), $(this.arr[1]).data("num")];
    if (this.game.move(movement[0], movement[1])) {
    const $messy = $($(this.arr[0])[0].children[0]);
    $messy.remove(); 
    $(this.arr[1]).prepend($messy);
    }
    this.arr = [];
    }
  }
}

module.exports = View;