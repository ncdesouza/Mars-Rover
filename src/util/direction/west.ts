import Direction from "./direction";
import South from "./south";
import North from "./north";


class West extends Direction {

    constructor() {
        super('W', [-1, 0]);
    }

    turnLeft(): Direction {
        return new South();
    }

    turnRight(): Direction {
        return new North();
    }

}

export default West;