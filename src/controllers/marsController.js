
const INSTRUCTIONS = {
  MOVE: 'M',
  LEFT: 'L',
  RIGHT: 'R'
};

const DIRECTIONS = {
  NORTH: 'N',
  SOUTH: 'S',
  EAST: 'E',
  WEST: 'W',
};

const SEQUENCE = [DIRECTIONS.NORTH, DIRECTIONS.EAST, DIRECTIONS.SOUTH, DIRECTIONS.WEST];

const FIELD_SIZE = [5, 5];

const DEFAULT_COORDS = [0, 0, DIRECTIONS.NORTH];

var coords = [];

exports.callRobot = (req, res) => {
  res.status(201);

  coords = [...DEFAULT_COORDS];

  var path = req.path.replace('/', '');

  var instructions = path.split('');

  instructions.forEach(instruction => {

    instruction = instruction.toUpperCase();

    switch (instruction) {
      case INSTRUCTIONS.MOVE: {

        var direction = coords[2];

        switch (direction) {
          case DIRECTIONS.NORTH:
            coords[1]++;
            break;
          case DIRECTIONS.EAST:
            coords[0]++;
            break;
          case DIRECTIONS.SOUTH:
            coords[1]--;
            break;
          case DIRECTIONS.WEST:
            coords[0]--;
            break;
        }

        var axesCoords = [coords[0], coords[1]];

        axesCoords.forEach((coord, index) => {
          if (coord < 0 || coord > FIELD_SIZE[index]) {
            res.status(400).send('O Robô escapou do terreno!');
          }
        });

        break;
      }

      case INSTRUCTIONS.RIGHT: {
        var directionIndex = getDirection();
        setDirection(SEQUENCE[directionIndex == 3 ? 0 : (directionIndex + 1)]);
        break;
      }
      case INSTRUCTIONS.LEFT: {
        var directionIndex = getDirection();
        setDirection(SEQUENCE[directionIndex == 0 ? 3 : (directionIndex - 1)]);
        break;
      }
      default: {
        res.status(400).send(`Instrução "${instruction}" não reconhecida!`);
        break;
      }
    }

  });

  res.send(`(${coords.join(', ')})`);
};

function getDirection() {
  return SEQUENCE.indexOf(coords[2]);
};

function setDirection(direction) {
  coords[2] = direction;
};