import Direction from "./direction";
import East from "./east";
import West from "./west";


class South extends Direction {

    constructor() {
        super('S', [0, -1]);
    }

    turnLeft(): Direction {
        return new East();
    }

    turnRight(): Direction {
        return new West();
    }

}

export default South;