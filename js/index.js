function dice() {

  var innerSquare = document.getElementsByClassName('innerSquare');
  var randomNumber = (Math.floor(Math.random()*6)+1);
  console.log(randomNumber);
  for (var i = 0; i < innerSquare.length; i++) {
    innerSquare[i].className = 'innerSquare';
  }


  switch (randomNumber) {
    case 1:
    innerSquare[4].className = 'innerSquare dot';
    break;
    case 2:
    innerSquare[2].className = 'innerSquare dot';
    innerSquare[6].className = 'innerSquare dot';
    break;
    case 3:
    innerSquare[2].className = 'innerSquare dot';
    innerSquare[6].className = 'innerSquare dot';
    innerSquare[4].className = 'innerSquare dot';
    break;
    case 4:
    innerSquare[2].className = 'innerSquare dot';
    innerSquare[6].className = 'innerSquare dot';
    innerSquare[0].className = 'innerSquare dot';
    innerSquare[8].className = 'innerSquare dot';
    break;
    case 5:
    innerSquare[2].className = 'innerSquare dot';
    innerSquare[6].className = 'innerSquare dot';
    innerSquare[4].className = 'innerSquare dot';
    innerSquare[0].className = 'innerSquare dot';
    innerSquare[8].className = 'innerSquare dot';
    break;
    case 6:
    innerSquare[0].className = 'innerSquare dot';
    innerSquare[2].className = 'innerSquare dot';
    innerSquare[3].className = 'innerSquare dot';
    innerSquare[6].className = 'innerSquare dot';
    innerSquare[5].className = 'innerSquare dot';
    innerSquare[8].className = 'innerSquare dot';
    break;

    default:

  }
}

var button = document.getElementsByTagName('button')[0];
button.addEventListener('click',dice);
dice()
