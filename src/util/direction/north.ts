import Direction from "./direction";
import West from "./west";
import East from "./east";

class North extends Direction {

    constructor() {
        super('N', [ 0, 1 ]);
    }

    turnLeft(): Direction {
        return new West();
    }

    turnRight(): Direction {
        return new East();
    }

}

export default North;