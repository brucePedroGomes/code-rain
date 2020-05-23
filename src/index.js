function load() {
  const paint = document.getElementById('paint');
  matrixEffect(paint);
}

function matrixEffect(matrix) {
  const screen = window.screen;
  const width = (matrix.width = screen.width);
  const height = (matrix.height = screen.height);
  const lyrics = Array(240).join(1).split('');

  function codeRain() {
    matrix.getContext('2d').fillStyle = 'rgba(0,0,0,.08)';
    matrix.getContext('2d').fillRect(0, 0, width, height);
    matrix.getContext('2d').fillStyle = '#15dd30';

    lyrics.map((position_y, index) => {
      const text = String.fromCharCode(62 + Math.random() * 33);
      const position_x = index * 10;

      matrix.getContext('2d').fillText(text, position_x, position_y);

      if (position_y > 100 + Math.random() * 10000) {
        lyrics[index] = 0;
      } else {
        lyrics[index] = position_y + 10;
      }
    });
  }
  setInterval(codeRain, 100);
}
