function Gameboard () {
  this.gameboard = [];
};

const Player = (type) => {
  return {type};
};

const control = (() => {
  const turn = 0;

  const checkForWin = () => {
    //code win conditions

    return false;
  }

  return {
    turn,
    checkForWin
  };
})();

const DOMControl = (() => {
  const addEventListeners = () => {
    // code here
  };

  return {
    addEventListeners
  }
});