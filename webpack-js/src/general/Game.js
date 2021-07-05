import Relax from "./game_types/Relax";
import GameStarter from "../core/abstract/GameStarter";

class Game {
    init(type) {
        this.type = type;
        /**
         * @type {GameStarter}
         */
        this.gamer = null;
    }

    /**
     * @return {GameStarter}
     */
    getMode() {
        return this.gamer
    }

    start() {
        if (this[this.type]) {
            this[this.type]();
        }
    }

    relax() {
        const relax = new Relax();
        relax.start();
        this.gamer = relax;
    }

    restart() {
        this.gamer.restart();
    }
}

const $game = new Game();
$game.MOD_RELAX = 'relax';
export default $game;