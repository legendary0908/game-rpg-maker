//=============================================================================
// TiempoEspera.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Plugin para añadir una espera aleatoria en las rutas de movimiento de eventos.
 * @url https://github.com/tu-usuario/ruta-de-tiempo
 *
 * @help TiempoEspera.js
 *
 * Con este plugin, puedes añadir una espera aleatoria de tiempo en frames
 * a las rutas de movimiento de eventos en RPG Maker MZ.
 *
 * Para usarlo, simplemente agrega un comando "Script" en la lista de comandos
 * de la ruta de movimiento del evento con el siguiente código:
 *
 * this.tiempoEspera(frames);
 * tiempoEsperaID(ID, frames);
 *
 * Donde "frames" es una lista de tiempos de espera en frames separados por comas.
 * Por ejemplo: this.tiempoEspera(20, 30, 40, 50, 60, 70, 80);
 *             tiempoEsperaID(36, 5, 20, 40, 40, 60, 80, 100, 150);
 *
 * El plugin elegirá de forma aleatoria uno de los valores proporcionados
 * en la lista y esperará esa cantidad de frames antes de continuar con la siguiente orden.
 *
 * Si solo se proporciona un valor en la lista, el evento esperará siempre ese tiempo.
 */

(() => {
  const _Game_Event_updateRoutineMove = Game_Event.prototype.updateRoutineMove;
  Game_Event.prototype.updateRoutineMove = function() {
    if (this._waitCount > 0) {
      this._waitCount--;
      return;
    }
    _Game_Event_updateRoutineMove.call(this);
  };

  Game_Character.prototype.tiempoEspera = function (...framesList) {
    if (framesList.length === 1) {
      this._waitCount = framesList[0];
    } else if (framesList.length > 1) {
      const randomFrames = framesList[Math.floor(Math.random() * framesList.length)];
      this._waitCount = randomFrames;
    }
  };

  tiempoEsperaID = function (eventID, ...framesList) {
    const event = $gameMap.event(eventID);
    if (!event) return;

    if (framesList.length === 1) {
      event._waitCount = framesList[0];
    } else if (framesList.length > 1) {
      const randomFrames = framesList[Math.floor(Math.random() * framesList.length)];
      event._waitCount = randomFrames;
    }
  };
})();