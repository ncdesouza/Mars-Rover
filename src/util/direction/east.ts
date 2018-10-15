import Direction from "./direction";
import North from "./north";
import South from "./south";

class East extends Direction {

    constructor() {
        super('E', [1, 0]);
    }

    turnLeft(): Direction {
        return new North();
    }

    turnRight(): Direction {
        return new South();
    }
}

export default East;