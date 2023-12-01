//=============================================================================
/*:
 * @target MZ
 * @plugindesc Gestiona capas de parallax dinámicas y estáticas en tus mapas.
 * @url []
 * @author Slayer 2
 * @version 1.0.0
 * @help
 *
 * ============================================================================
 *                         DynamicParallaxMap
 * ============================================================================
 * 
 * El plugin "DynamicParallaxMap" para RPG Maker MZ proporciona funcionalidades
 * para crear y gestionar capas parallax en los mapas del juego. Se incluyen tanto
 * capas estáticas "Cargan la imagen por completo de una sola vez y la anclan
 * en una casilla del mapa" como dinámicas "se cargan y descargan las imágenes
 * en el mapa de forma dinámica". A continuación, se presenta
 * una descripción detallada de las características y comandos del plugin:
 * 
 * ============================================================================
 *                         Anclar Capa estática
 * ============================================================================
 * 
 * Descripción del comando del plugin "Anclar Capa estática":
 * 
 * El comando de plugin "Crear Capa Estática", básicamente cargan la imagen por completo
 * sin tener en cuenta rango de visión o cargas dinámicas. Es mejor usar este comando de plugin
 * para mapas pequeños o para posicionar una o varias imágenes en algún lugar del mapa, como
 * podría ser la imágen de un puente, una roca gigante, etc... Puedes usarlo para que una imagen
 * ocupe todo el mapa y anclarla en la casilla X0 Y0 "Forma tradicional del Parallax" o usar
 * imágenes de diversos tamaños y anclarlas en la casilla del mapa que prefieras.
 * 
 * Comando del plugin "Anclar Capa estática":
 * 
 * Crea una nueva capa parallax "Imagen" estática y se ancla a una casilla del mapa.
 * 
 * Argumentos del comando del plugin:
 * 
 * - ID Mapa: ID del mapa en el que se aplicará la capa.
 * - ID Capa: Asigna un ID único a la capa.
 * - Imagen de la capa: Selecciona una imagen para la capa parallax dentro de img\dynamicparallaxes.
 * - Posición X: Define la posición X en el mapa para la capa parallax.
 * - Posición Y: Define la posición Y en el mapa para la capa parallax.
 * - Prioridad: Define la prioridad z para la capa parallax. "0 o inferior para debajo del personaje,
 * - de 5 o superior por encima del personaje"
 * 
 * ============================================================================
 *                         Eliminar Capa estática
 * ============================================================================ 
 * 
 * Comando del plugin "Eliminar Capa estática":
 * 
 * Descripción: Elimina una capa parallax estática específica.
 * 
 * Argumentos del comando del plugin:
 * 
 * - ID Mapa: ID del mapa en el que se encuentra la capa.
 * - ID Capa: Ingresa el ID de la capa que deseas eliminar.
 * 
 * ============================================================================
 *                         Crear Capa Dinámica
 * ============================================================================
 * 
 * Descripción del comando del plugin "Crear Capa Dinámica":
 * 
 * El comando del plugin "Crear Capa Dinámica" permite usar Parallax en mapas extensos y
 * con una gestión optimizada de la memoria. En lugar de cargar imágenes completas que
 * ocupen todo el mapa, el plugin carga los segmentos de las imágenes y los gestiona
 * dinámicamente.
 * Al cargar un mapa, solo se carga la parte del mapa correspondiente al área de visión
 * del jugador. La parte del mapa que no está dentro del rango de visión, no se carga si
 * no se necesita.
 * Todas las imágenes cargadas, cuando quedan fuera del área de visión del personaje,
 * el plugin las quita, limpia y deja de gestionarlas para liberar memoria y recursos.
 * 
 * Comando del plugin "Crear Capa Dinámica":
 * 
 * Crea una capa dinámica en el mapa basada en el área de visión del jugador.
 * 
 * Argumentos del comando del plugin:
 * 
 * - ID Mapa: ID del mapa en el que se aplicará la capa.
 * - ID Capa: Asigna un ID único a la capa.
 * - Múltiplos: Define el tamaño de las imágenes en múltiplos (48, 96, 144, 192, 240).
 * - Ruta Imágenes: Ruta de las imágenes dentro de la carpeta img\dynamicparallaxes.
 * - z: Define la prioridad z para la capa parallax. 0 de bajo del personaje, 5 o superior sobre el personaje.
 * - Transición de pantalla: Activa o desactiva el efecto de oscurecer la pantalla al ejecutar la capa (para no ver cómo aparecen
 * las imágenes en el mapa).
 * 
 * ============================================================================
 *                        Cómo usar "Crear Capa Dinámica"
 * ============================================================================
 * 
 * Para que la capa dinámica funcione, debes poner la resolución de tu juego en los parámetros
 * del plugin "Resolución horizontal y Resolución vertical" para que pueda calcular bien el rango 
 * de visión. Si quieres comprobar que está funcionando la carga dinámica, puedes poner en tu juego
 * una resolución más alta de la que configures en el parámetro del plugin. De este modo, podrás ver
 * qué parte del mapa está en negro sin cargar y, a medida que el jugador se mueve, este va cargando
 * y descargando. "Esto es solo algo temporal para que puedas ver cómo funciona, luego debes ponerle
 * la resolución real de tu juego".
 * 
 * El parámetro del plugin "Aumentar casillas" es para aumentar el rango de visión. Se recomienda
 * dejarlo por defecto en 1. Si mientras juegas ves cómo se cargan las casillas en el área de visión,
 * puedes aumentarlo.
 * 
 * Debes proporcionarle los segmentos o "trozos" de imagen que componen todo tu mapa y la ruta que
 * hayas creado dentro de "img\dynamicparallaxes" para almacenarlos. Estos segmentos deben estar
 * numerados como 1.png, 2.png, 3.png, etc... Dentro de la ruta "img\dynamicparallaxes" puedes 
 * organizarte en subcarpetas y como quieras para poner los segmentos de las imágenes para cada mapa.
 * 
 * Para saber cuántos segmentos "trozos" le corresponden a tu mapa, primero debes elegir qué múltiplo
 * de 48 vas a usar en tu mapa "48, 96, 144, 192, 240, etc..." y cumplir con los requisitos del mapa.
 * 
 * Requisitos del mapa:
 * 
 * Múltiplo de 48: Sin restricciones específicas en cuanto a dimensiones del mapa, segmentando 
 * las imágenes en bloques de 48x48 píxeles.
 * 
 * Múltiplo de 96: Mapas cuyas dimensiones en alto y ancho aumenten de 2 en 2 casillas, 
 * segmentando las imágenes en bloques de 96x96 píxeles. Tamaño mínimo del mapa 2x2, tamaño 
 * máximo 256x256.
 * 
 * Múltiplo de 144: Mapas cuyas dimensiones en alto y ancho aumenten de 3 en 3 casillas, 
 * segmentando las imágenes en bloques de 144x144 píxeles. Tamaño mínimo del mapa 3x3, tamaño 
 * máximo 255x255.
 * 
 * Múltiplo de 192: Mapas cuyas dimensiones en alto y ancho aumenten de 4 en 4 casillas, 
 * segmentando las imágenes en bloques de 192x192 píxeles. Tamaño mínimo del mapa 4x4, tamaño 
 * máximo 256x256.
 * 
 * Múltiplo de 240: Mapas cuyas dimensiones en alto y ancho aumenten de 5 en 5 casillas, 
 * segmentando las imágenes en bloques de 240x240 píxeles. Tamaño mínimo del mapa 5x5, tamaño 
 * máximo 255x255.
 * 
 * Igual para el resto de Múltiplos 288, 336, 384, etc...
 * 
 * Ejemplo del cálculo:
 * 
 * En este ejemplo usaré el múltiplo de 240, pero puedes aplicar el equivalente de este ejemplo
 * para otros múltiplos. Si quiero hacer un mapa con el múltiplo de 240, tanto la anchura como la 
 * altura de este, debo establecerla en 5 en 5 casillas. Por ejemplo, no puedo hacer un mapa de 
 * 2x4 o 4x5. Solo puedo usar de 5 en 5, como: 5, 10, 15, 20, 25, etc... hasta llegar a su máximo 
 * permitido que sería 255 (para el múltiplo de 240). Esto es tanto para el ancho como para el alto 
 * del mapa y de forma individual, puedes poner de ancho 10 y de alto 15. No tienes por qué poner 
 * por igual el ancho y el alto, como por ejemplo 20x20.
 * 
 * Para este ejemplo usaré un mapa de 55x100 (55 de ancho, 100 de alto). Una casilla de RPG Maker MZ
 * ocupa 48 píxeles:
 * 
 * - 48 multiplicado por el ancho del mapa 55 = 48 x 55 = 2640 de ancho.
 * 
 * - 48 multiplicado por el alto del mapa 100 = 48 x 100 = 4800 de alto.
 * 
 * Por lo tanto, una imagen que cubra por completo mi mapa de 55x100 sería una imagen de 2640x4800 píxeles.
 * 
 * Para saber cuántos segmentos de 240x240 píxeles puedo obtener de la imagen de 2640x4800 píxeles, se calcula
 * de la siguiente forma:
 * 
 * - Anchura de la imagen 2640 entre el múltiplo seleccionado 240 =  2640 / 240 = 11 segmentos en horizontal.
 * 
 * - Altura de la imagen 4800 entre el múltiplo seleccionado 240 = 4800 / 240 = 20 segmentos en vertical.
 * 
 * - Horizontal 11 por vertical 20 = 11 x 20 = 220 segmentos.
 * 
 * Por lo tanto, la imagen de 2640x4800 píxeles debo trocearla en 220 segmentos de 240x240 píxeles.
 *
 * Esto lo puedes hacer con el programa de edición de imágenes que utilices o como prefieras. Puedes usar el
 * código en Python que viene con este plugin para que este recorte tus imágenes rápidamente y fácilmente.
 * 
 * Dado que 2640 y 4800 son exactamente divisibles por 240, no sobraría ninguna porción de la imagen para lograr
 * los trozos de 240x240 píxeles. Es decir, toda la imagen se cubriría exactamente con esos trozos y a su vez, estas
 * cubrirían el mapa.
 * 
 * El plugin ya está programado para que, al proporcionarle la resolución de tu juego, el tamaño de tu mapa, el múltiplo
 * que estás usando para ese mapa y la ruta donde almacenas las imágenes para tu mapa, pueda realizar los cálculos pertinentes
 * y gestionarlo todo.
 * 
 * Si utilizas el código de Python que yo proporciono, no necesitas calcular nada. Siempre que cumplas con los requisitos del mapa
 * para el múltiplo que utilices, los cálculos encajarán y no tendrás ningún problema. El código dividirá la imagen por ti y le pondrá
 * los nombres 1.png, 2.png, etc., a todos los segmentos. Tú solo debes moverlas a la carpeta indicada y proporcionarle la ruta al plugin.
 * 
 * ============================================================================
 *                         Eliminar Capa Dinámica
 * ============================================================================
 * 
 * Eliminar Capa Dinámica:
 * 
 * Descripción: Elimina una capa dinámica específica.
 * 
 * Argumentos:
 * 
 * - ID Mapa: ID del mapa en el que se encuentra la capa dinámica.
 * - ID Capa: Ingresa el ID de la capa dinámica que deseas eliminar.
 * 
 * ============================================================================
 *                                Información
 * ============================================================================
 * 
 * El plugin se encarga de limpiar las capas estáticas y dinámicas cuando cambias de mapa o regresas a la pantalla del título.
 * 
 * Aunque el plugin hace todo lo posible por mantener la memoria limpia, finalmente, quien libera la memoria es el recolector
 * de basura de JavaScript.
 * 
 * El plugin está programado para mostrar una pequeña transición al cargar una partida con capas dinámicas activas, evitando que el usuario observe
 * el proceso de carga de las imágenes del mapa.
 * 
 * Para las capas dinámicas, puedes activar la opción de habilitar esta transición. Así, al cambiar de un mapa a otro, no se visualizará la carga de
 * las imágenes.
 * 
 * El plugin almacena los datos de las capas en su propio archivo que se mantiene en "localForage".
 * 
 * Si vas a crear una aplicacion en para Android, debes añadir "webSettings.setDomStorageEnabled(true);" en tu archivo MainActivity.java
 *
 * Recuerda poner bien siempre la ruta de la carpeta donde almacenes las imágenes de las capas dinámicas por ejemplo: img/dynamicparallaxes/Mapa1/Inferior.
 *
 * Al guardar una partida estando en un mapa con capas, estas son guardadas para restaurarse al cargar la partida.
 * 
 * En dispositivos de gama alta y media, los múltiplos de 48 funcionan sin problemas. Sin embargo, en dispositivos de gama baja, estos múltiplos pueden
 * causar lentitud, cierre inesperado del juego o incluso cierre del juego al cambiar de mapa.
 * 
 * En dispositivos de gama baja, los múltiplos superiores a 48 operan adecuadamente.
 * 
 * Un múltiplo más pequeño requiere más recursos, ya que hay más imágenes que gestionar simultáneamente. A medida que el múltiplo es más grande, se necesitan
 * menos recursos debido a que hay menos imágenes a manejar simultáneamente.
 * 
 * Se recomienda utilizar múltiplos de 240 y 192, aunque los de 96 y 144 también funcionan adecuadamente.
 * 
 * Cuanto menor es el multiplo a usar, más segmentos de imagen se van a necesitar, dependiendo el mapa pueden variar de 2.000 a 6.000 segmentos.
 * 
 * Para mapas extensos, desde 50x50 casillas en adelante, es recomendable emplear "Crear Capa Dinámica". Para mapas más reducidos, es aconsejable usar "Anclar
 * Capa Estática", posicionando la imagen en la casilla X0 Y0.
 * 
 * Aunque no soy un programador profesional, invertí mucho tiempo y esfuerzo en desarrollar este código. Utilízalo bajo tu propia responsabilidad. Haré lo posible
 * por actualizarlo si surgen errores, pero es importante destacar que no estoy comprometido a hacerlo.
 * 
 * ============================================================================
 *                        Términos de uso y condiciones
 * ============================================================================
 * 
 * - Licencia de Uso: Este complemento de RPG Maker MZ es de pago y se ofrece con licencia para su uso en proyectos comerciales y no comerciales. La adquisición y el uso
 * de este complemento están sujetos a los siguientes términos y condiciones. Al comprar y utilizar este complemento, usted acepta cumplir con estos términos.
 * 
 * - Licencia Individual por Usuario: Cada licencia de este complemento es válida para un solo usuario y solo puede utilizarse en los proyectos personales del usuario que
 * ha adquirido la licencia. No se permite ceder, distribuir, compartir o sublicenciar el complemento a terceros de ninguna manera.
 * 
 * - Prohibición de Modificaciones: Los usuarios no tienen permiso para modificar, descompilar, desensamblar o realizar ingeniería inversa en el código fuente del complemento de ninguna forma.
 * 
 * - Responsabilidad: El titular de los derechos no se hace responsable de ningún daño, pérdida o consecuencia que pueda surgir del uso de este complemento. Se proporciona "tal como está" sin garantía
 * de ningún tipo, ya sea expresa o implícita.
 * 
 * - Actualizaciones y Soporte: No se garantizan actualizaciones futuras del complemento ni se garantiza soporte técnico. Los usuarios adquieren el complemento tal como está y lo utilizan bajo su propia responsabilidad.
 *  
 * - Cambios en los Términos: El titular de los derechos se reserva el derecho de modificar estos términos en cualquier momento sin previo aviso. Es responsabilidad del comprador revisar periódicamente estos
 * términos para estar al tanto de cualquier cambio.
 * 
 * - Derechos de Propiedad Intelectual: Todos los derechos de propiedad intelectual sobre el complemento, incluyendo, entre otros, los derechos de autor y las marcas comerciales asociadas, permanecen en manos del titular
 * de los derechos (tú o tu empresa). La adquisición de una licencia no otorga ningún derecho de propiedad sobre el complemento, excepto el derecho limitado de uso según se describe en estos términos.
 * 
 * - Reembolsos: No se ofrecen reembolsos para la compra de este complemento. Antes de comprar, asegúrate de que el complemento sea adecuado para ti.
 * 
 * - Violación de los Términos: Cualquier violación de estos términos de uso puede resultar en la revocación de la licencia del complemento sin derecho a reembolso. El titular de los derechos se reserva el derecho de tomar
 * acciones legales en caso de violación de los derechos de propiedad intelectual.
 * 
 * - Legislación Aplicable y Jurisdicción**: Estos términos de uso se rigen por y se interpretan de acuerdo con las leyes de España. Cualquier disputa relacionada con estos términos se someterá a la jurisdicción exclusiva de
 * los tribunales españoles.
 * 
 * - Aceptación de los Términos: Al comprar y utilizar el complemento, el usuario acepta todos los términos y condiciones establecidos.
 * 
 * © 2023 Slayer2
 * 
 * Todos los derechos reservados.
 * 
 * ============================================================================
 *                         Argumentos del plugin
 * ============================================================================
 * 

/*:
 * @command createStaticLayer
 * @text Anclar Capa Estática
 * @desc Crea una nueva capa parallax en el mapa.
 *
 * @arg mapId
 * @type number
 * @min 1
 * @text ID Mapa
 * @desc ID del mapa en el que se aplicará la capa.
 *
 * @arg id
 * @type number
 * @min 1
 * @text ID Capa
 * @desc Asigna un ID único a la capa.
 *
 * @arg image
 * @type file
 * @dir img/dynamicparallaxes
 * @text Imágen de la capa
 * @desc Selecciona una imagen para la capa parallax img/dynamicparallaxes.
 *
 * @arg posX
 * @type number
 * @min 0
 * @text Posición X
 * @desc Define la posición X en el mapa para la capa parallax.
 *
 * @arg posY
 * @type number
 * @min 0
 * @text Posición Y
 * @desc Define la posición Y en el mapa para la capa parallax.
 *
 * @arg z
 * @type number
 * @min 0
 * @text Prioridad
 * @desc Define la prioridad z para la capa parallax.
 *
 * @command removeStaticLayer
 * @text Eliminar Capa estática
 * @desc Elimina una capa parallax específica.
 *
 * @arg mapId
 * @type number
 * @min 1
 * @text ID Mapa
 * @desc ID del mapa en el que se encuentra la capa.
 *
 * @arg layerId
 * @type number
 * @min 1
 * @text ID Capa estática
 * @desc Ingresa el ID de la capa que deseas eliminar.
 *
 * @command createDynamicLayer
 * @text Crear Capa Dinámica
 * @desc Crea una capa dinámica en el mapa basada en el área de visión del jugador.
 *
 * @arg mapId
 * @type number
 * @min 1
 * @text ID Mapa
 * @desc ID del mapa en el que se aplicará la capa.
 *
 * @arg id
 * @type number
 * @min 1
 * @text ID Capa
 * @desc Asigna un ID único a la capa.
 *
 * @arg multiples
 * @type number
 * @text Múltiplos
 * @desc Define el tamaño de las imágenes y casillas en múltiplos: 48, 96, 144, 192, 240, etc...
 * @default 48
 *
 * @arg imagePath
 * @type string
 * @text Ruta Imágenes
 * @desc Ruta de las imágenes dentro de la img/dynamicparallaxes.
 *
 * @arg z
 * @type number
 * @min 0
 * @text Prioridad
 * @desc Define la prioridad z para la capa parallax.
 *
 * @arg mapWidth
 * @type number
 * @min 1
 * @text Anchura Mapa
 * @desc Anchura del mapa en casillas.
 *
 * @arg mapHeight
 * @type number
 * @min 1
 * @text Altura Mapa
 * @desc Altura del mapa en casillas.
 *
 * @arg screenEffect
 * @type boolean
 * @text Transición de pantalla
 * @desc Activa o desactiva el efecto de oscurecer la pantalla al ejecutar la capa.
 * @default false
 *
 * @command removeDynamicLayer
 * @text Eliminar Capa Dinámica
 * @desc Elimina una capa dinámica específica.
 *
 * @arg mapId
 * @type number
 * @min 1
 * @text ID Mapa
 * @desc ID del mapa en el que se encuentra la capa dinámica.
 *
 * @arg layerId
 * @type number
 * @min 1
 * @text ID Capa Dinámica
 * @desc Ingresa el ID de la capa dinámica que deseas eliminar.


/*:
 * @param resolutionX
 * @text Resolución horizontal
 * @type number
 * @min 1
 * @desc Define la resolución horizontal de la pantalla.
 * @default 816
 *
 * @param resolutionY
 * @text Resolución vertical
 * @type number
 * @min 1
 * @desc Define la resolución vertical de la pantalla.
 * @default 624
 *
 * @param extraTiles
 * @text Aumentar casillas
 * @type number
 * @min 0
 * @desc Define cuántas casillas adicionales se cargarán alrededor del borde visible.
 * @default 1
 *
 * @param ImageSets
 * @text Conjuntos de Imágenes
 * @desc Conjuntos de rutas de imágenes, cantidad y ID del mapa correspondiente.
 * @type struct<ImageSet>[]
 *
 * @param LimpiezaMapas
 * @text Limpieza de Mapas
 * @type struct<MapaLimpieza>[]
 * @desc Configura la limpieza de capas para cada mapa específico.
 * @default []
 */

/*~struct~ImageSet:
 * @param ImagePath
 * @text Ruta de Imágenes
 * @desc Ruta base para las imágenes parallax a cargar.
 * @type string
 * @default img/dynamicparallaxes/
 *
 * @param ImageCount
 * @text Número de Imágenes
 * @desc Número total de imágenes a cargar en la ruta especificada.
 * @type number
 * @default 3500
 *
 * @param MapId
 * @text ID del Mapa
 * @desc ID del mapa para el cual se cargarán estas imágenes.
 * @type number
 * @default 1
 */

/*~struct~MapaLimpieza:
 * @param mapaId
 * @text ID del Mapa
 * @type number
 * @min 1
 * @desc ID del mapa a configurar.
 *
 * @param limpiar
 * @text Limpiar Capas
 * @type boolean
 * @desc Indica si se debe limpiar las capas.
 * @default true
 */

















(() => {
  "use strict";
  const pluginName = "DynamicParallaxMap";
  const parameters = PluginManager.parameters("DynamicParallaxMap");
  const multiples = Number(parameters["multiples"] || 48);
  const gameResolutionX = Number(parameters["resolutionX"] || 816);
  const gameResolutionY = Number(parameters["resolutionY"] || 624);
  const extraTiles = Number(parameters["extraTiles"] || 1);
  const debugMode = true;
  let _StaticLayers = {};
  let _DynamicLayers = {};
  let _tileIDs = {};
  let _currentMapId = null;
  let _macroTileTopLeftCoords = {};
  let interruptorDinamico = true;
  let temporizadorMovimiento = 0;
  let spritesCreadosDesdeCero = 0;
  let spritesCreatedFromScratch = 0;
  let spritesReused = 0;
  let spritesInPool = 0;
  let spritesFullMap = 0;


  // Objeto global para almacenar la información de las imágenes cargadas
  window.loadedImagesData = window.loadedImagesData || {};

  let spritePool = {
    dynamic: []
  };



  function getSpriteFromPool() {
    let sprite = spritePool.dynamic.pop();
    if (sprite) {
      sprite.bitmap = null; // Restablecer la imagen del sprite
      sprite.visible = true; // Asegurarse de que el sprite es visible
      spritesReused++; // Incrementar la cuenta de sprites reutilizados
      spritesInPool--; // Restar en la cuenta de sprites en el pool
      spritesFullMap++; // Sumar en la cuenta de sprites en el mapa
      // Restablecer otras propiedades si es necesario
    } else {
      sprite = new Sprite();
      spritesCreatedFromScratch++; // Incrementar la cuenta de sprites creados desde cero
      spritesFullMap++; // Sumar en la cuenta de sprites en el mapa
    }
    // console.log("Pool Poping", spritePool.dynamic.length);
    return sprite;
  }







  function returnSpriteToPool(sprite) {
    sprite.bitmap = null; // Elimina la referencia al bitmap
    sprite.visible = false; // Hace invisible el sprite
    spritePool.dynamic.push(sprite);
    spritesInPool++; // Sumar en la cuenta de sprites en el pool
    spritesFullMap--; // Restar en la cuenta de sprites en el mapa
    // console.log("Pool Pushing", spritePool.dynamic.length);
  }



  function printSpriteCounts() {
    // console.log(`Sprites creados desde cero: ${spritesCreatedFromScratch}`);
    // console.log(`Sprites reutilizados: ${spritesReused}`);
    // console.log(`Sprites en el mapa: ${spritesFullMap}`);
    // console.log(`Sprites en el pool: ${spritesInPool}`);
  }




  let lastSaveTime = 0; // Variable para almacenar la última vez que se guardó



  function writeDataToJSON(slot, data) {
    console.log("Iniciando writeDataToJSON.");
    const currentTime = Date.now();
    if (currentTime - lastSaveTime < 1000) {
      return;
    }
    lastSaveTime = currentTime;
    let jsonData = {};
    const storedData = localStorage.getItem("DynamicParallaxMap");
    if (storedData) {
      jsonData = JSON.parse(storedData);
    }
    jsonData[slot] = {
      dynamic: data.dynamic || [],
      static: data.static || [],
    };
    if (debugMode) {
      console.log(`Datos a guardar para el slot ${slot}:`, jsonData[slot]);
    }
    localStorage.setItem("DynamicParallaxMap", JSON.stringify(jsonData));
    if (debugMode) {
      console.log(`Datos guardados en DynamicParallaxMap para el slot: ${slot}`);
    }
  }
  const _DataManager_saveGame = DataManager.saveGame;
  DataManager.saveGame = function (savefileId) {
    if (savefileId === 0) {
      if (debugMode) {
        console.log("Guardado automático detectado.");
      }
    } else {
      if (debugMode) {
        console.log(`Guardado manual detectado en el slot: ${savefileId}`);
      }
    }
    // Llamamos a la función para escribir los datos en el archivo .json
    writeDataToJSON(savefileId, storedPluginCommands);
    // Llamamos al método original para continuar con el guardado.
    return _DataManager_saveGame.call(this, savefileId);
  };

  function readDataFromJSON(slot) {
    console.log("iniciando readDataFromJSON.");
    const storedData = localStorage.getItem("DynamicParallaxMap");
    if (storedData) {
      const jsonData = JSON.parse(storedData);
      if (debugMode) {
        console.log("Cargando datos de DynamicParallaxMap para el slot:", slot);
        console.log("Datos:", jsonData[slot] || {});
      }
      return jsonData[slot] || {};
    }
    return {};
  }
  DataManager.loadAdditionalData = function (slot) {
    if (debugMode) {
      console.log("Intentando leer datos adicionales para el slot:", slot);
    }
    try {
      storedPluginCommands = readDataFromJSON(slot);
      if (debugMode) {
        console.log(
          "Datos adicionales leídos con éxito:",
          storedPluginCommands,
        );
      }
    } catch (error) {
      console.error("Error al leer datos adicionales:", error);
    }
  };

  const _Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
  console.log("iniciando Load_onLoadSuccess.");
  Scene_Load.prototype.onLoadSuccess = function () {
    _Scene_Load_onLoadSuccess.call(this);
    $gameScreen.startTint([-255, -255, -255, 255], 0);
    setTimeout(() => {
      DataManager.loadAdditionalData($gameSystem.savefileId());
      executeStoredPluginCommandsGradually(); // Forzar la ejecución de los comandos almacenados
      if (
        storedPluginCommands.dynamic.length === 0 &&
        storedPluginCommands.static.length === 0
      ) {
        // No hay datos de capas, quitar la transición en negro inmediatamente
        $gameScreen.startTint([0, 0, 0, 0], 20);
      }
    }, 1000); // Retrasamos la ejecución por 1 segundo
  };
  let storedPluginCommands = {
    dynamic: [],
    static: [],
  };
  let dynamicLayerCount = 0;
  let staticLayerCount = 0;
  const updateAndPrintLayerCounts = () => {
    const newDynamicCount = storedPluginCommands.dynamic
      ? storedPluginCommands.dynamic.length
      : 0;
    const newStaticCount = storedPluginCommands.static
      ? storedPluginCommands.static.length
      : 0;
    if (newDynamicCount !== dynamicLayerCount) {
      dynamicLayerCount = newDynamicCount;
      if (debugMode) {
        console.log(`Capas dinámicas totales: ${dynamicLayerCount}`);
      }
    }
    if (newStaticCount !== staticLayerCount) {
      staticLayerCount = newStaticCount;
      if (debugMode) {
        console.log(`Capas estáticas totales: ${staticLayerCount}`);
      }
    }
  };

  const storePluginCommand = (type, command, args) => {
    if (debugMode) {
      console.log("Modificando storedPluginCommands:", storedPluginCommands);
      console.log("Llamada a storePluginCommand con tipo:", type);
      console.log("storePluginCommand llamado con:", type, command, args);
    }
    if (!storedPluginCommands.dynamic || !storedPluginCommands.static) {
      if (debugMode) {
        console.log("Reinicializando storedPluginCommands");
      }
      storedPluginCommands = {
        dynamic: [],
        static: [],
      };
      if (debugMode) {
        console.log(
          "storedPluginCommands después de reinicializar:",
          storedPluginCommands,
        );
      }
    }
    const id = args.id; // Obteniendo el ID directamente desde args
    // Comprobación de seguridad
    if (debugMode) {
      console.log("Antes de verificar el tipo:", storedPluginCommands);
    }
    if (!storedPluginCommands[type]) {
      if (debugMode) {
        console.error(`Error: Tipo de capa no reconocido: ${type}`);
        console.log(
          "Contenido actual de storedPluginCommands:",
          storedPluginCommands,
        );
      }
      return;
    }
    // Verifica si ya existe un comando con el mismo ID
    const existingCommand = storedPluginCommands[type].find(
      (cmd) => cmd.args.id === id,
    );
    // Si existe un comando con el mismo ID, lo elimina
    if (existingCommand) {
      if (debugMode) {
        console.log(`Eliminando comando existente con ID: ${id}`);
        storedPluginCommands[type] = storedPluginCommands[type].filter(
          (cmd) => cmd.args.id !== id,
        );
      }
    }
    // Agrega el nuevo comando
    storedPluginCommands[type].push({ command, args });
    if (debugMode) {
      console.log(
        `storedPluginCommands[${type}] después de agregar:`,
        storedPluginCommands[type],
      );
      console.log(
        "storedPluginCommands después de modificaciones:",
        storedPluginCommands,
      );
    }
    updateAndPrintLayerCounts();
  };





  // Función calculateTileID

  const calculateTileID = (x, y, width, multiples) => {
    const currentMapId = $gameMap.mapId();
    if (!_tileIDs[currentMapId]) {
      // Si no hay datos almacenados para el mapa actual, calcular y almacenar.
      _tileIDs[currentMapId] = {};
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) { // Asumiendo que el mapa es cuadrado, de lo contrario ajustar este bucle.
          const tileSize = 48;
          const macroTileSize = multiples / tileSize;
          const tileKey = `${i},${j}`;
          if (multiples === 48) {
            const tilesPerRow = width;
            _tileIDs[currentMapId][tileKey] = j * tilesPerRow + i + 1;
          } else {
            const isTopLeftOfMacroTile = i % macroTileSize === 0 && j % macroTileSize === 0;
            if (isTopLeftOfMacroTile) {
              const adjustedX = Math.floor(i / macroTileSize);
              const adjustedY = Math.floor(j / macroTileSize);
              const tilesPerRow = width / macroTileSize;
              _tileIDs[currentMapId][tileKey] = adjustedY * tilesPerRow + adjustedX + 1;
            } else {
              _tileIDs[currentMapId][tileKey] = 0;
            }
          }
        }
      }
    }
    // Devolver el ID del tile para las coordenadas dadas.
    return _tileIDs[currentMapId][`${x},${y}`];
  };






  const _DataManager_makeSaveContents = DataManager.makeSaveContents;
  console.log("makeSaveContents.");
  DataManager.makeSaveContents = function () {
    const contents = _DataManager_makeSaveContents.call(this);
    writeDataToJSON($gameSystem.savefileId(), storedPluginCommands);
    return contents;
  };
  function executeStoredPluginCommandsGradually() {
    // Reinicializar storedPluginCommands si no tiene las propiedades esperadas
    if (
      !storedPluginCommands.dynamic ||
      !Array.isArray(storedPluginCommands.dynamic)
    ) {
      storedPluginCommands.dynamic = [];
    }
    if (
      !storedPluginCommands.static ||
      !Array.isArray(storedPluginCommands.static)
    ) {
      storedPluginCommands.static = [];
    }
    const commands = [
      ...storedPluginCommands.dynamic,
      ...storedPluginCommands.static,
    ];
    let index = 0;
    function executeNextCommand() {
      if (index < commands.length) {
        if (debugMode) {
          console.log("Ejecutando comando", index, "de", commands.length);
        }
        const cmd = commands[index];
        if (debugMode) {
          console.log(
            "Intentando ejecutar el comando:",
            cmd.command,
            "con argumentos:",
            cmd.args,
          );
        }
        PluginManager.callCommand(
          null,
          "DynamicParallaxMap",
          cmd.command,
          cmd.args,
        );
        index++;
        setTimeout(executeNextCommand, 10); // Aumentamos el tiempo a 500ms
        if (debugMode) {
          console.log("Comando", cmd.command, "ejecutado con éxito.");
        }
      } else {
        // Todos los comandos han sido ejecutados, quitar la transición en negro
        setTimeout(() => {
          $gameScreen.startTint([0, 0, 0, 0], 20); // Quita la pantalla en negro 20 de velocidad
        }, 1000); // Tiempo de espera para quitar pantalla en negro
      }
    }
    executeNextCommand();
  }
  const _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    _Scene_Map_onMapLoaded.call(this);
    if (!(SceneManager._previousScene instanceof Scene_Menu)) {
      executeStoredPluginCommandsGradually();
    }
  };

  const getVisibleTileRange = (multiples) => {
    const tileSize = 48;
    const tilesWidth = Math.ceil(gameResolutionX / tileSize) + 2 * extraTiles;
    const tilesHeight = Math.ceil(gameResolutionY / tileSize) + 2 * extraTiles;
    const buffer = Math.round(multiples / tileSize) + 1;
    const startX = Math.floor($gameMap ? $gameMap.displayX() : 0) - buffer; // Verificar si $gameMap y $gameMap.displayX() están definidos
    const startY = Math.floor($gameMap ? $gameMap.displayY() : 0) - buffer; // Verificar si $gameMap y $gameMap.displayY() están definidos
    const endX = startX + tilesWidth + buffer;
    const endY = startY + tilesHeight + buffer;
    return {
      startX: Math.max(0, startX),
      startY: Math.max(0, startY),
      endX: Math.min($gameMap ? $gameMap.width() : 0, endX), // Verificar si $gameMap y $gameMap.width() están definidos
      endY: Math.min($gameMap ? $gameMap.height() : 0, endY), // Verificar si $gameMap y $gameMap.height() están definidos
    };
  };





  const getTopLeftTileOfMacroTile = (x, y, width, height, multiples) => {
    const currentMapId = $gameMap.mapId();
    if (!_macroTileTopLeftCoords[currentMapId]) {
      precalculateMacroTileCoords(currentMapId, width, height, multiples);
    }

    const tileSize = 48;
    const macroTileSize = multiples / tileSize;
    const adjustedX = x - (x % macroTileSize);
    const adjustedY = y - (y % macroTileSize);
    const key = `${adjustedX},${adjustedY}`;

    return _macroTileTopLeftCoords[currentMapId][key];
  };

  function precalculateMacroTileCoords(mapId, width, height, multiples) {
    const tileSize = 48;
    const macroTileSize = multiples / tileSize;
    _macroTileTopLeftCoords[mapId] = {};

    for (let x = 0; x < width; x += macroTileSize) {
      for (let y = 0; y < height; y += macroTileSize) {
        const adjustedX = x - (x % macroTileSize);
        const adjustedY = y - (y % macroTileSize);
        const key = `${adjustedX},${adjustedY}`;
        _macroTileTopLeftCoords[mapId][key] = { x: adjustedX, y: adjustedY };
      }
    }
  }





  function verificarCapasDinamicasYActualizar() {
    const hayCapasDinamicas = Object.keys(_DynamicLayers).length > 0;


    if (!hayCapasDinamicas) {
      if (!interruptorDinamico) {

      }
      interruptorDinamico = true;
      return;
    }

    if ($gamePlayer.isMoving()) {
      if (!interruptorDinamico) {
        console.log("El jugador se mueve. Interruptor puesto en TRUE.");
      }
      interruptorDinamico = true;
      temporizadorMovimiento = 0;
    } else {

      if (temporizadorMovimiento < 600) { // 10 segundos * 60 frames por segundo
        temporizadorMovimiento++;
      } else {
        if (interruptorDinamico) {

        }
        interruptorDinamico = false;
      }
    }
  }


  // carga las imagenes en el rango de vision

  const loadDynamicLayerImages = (layerId, x, y, mapWidth, mapHeight, imagePath, z, multiples) => {
    printSpriteCounts()
    if (!interruptorDinamico) {
      return;
    }
    const visibleTileRange = getVisibleTileRange(multiples);
    const { startX, startY, endX, endY } = visibleTileRange;

    if (!_tileIDs[_currentMapId][layerId]) {
      _tileIDs[_currentMapId][layerId] = {};
    }
    const step = multiples / 48;
    const extendedStartX = Math.max(0, startX - step);
    const extendedStartY = Math.max(0, startY - step);
    const extendedEndX = Math.min($gameMap.width(), endX + step);
    const extendedEndY = Math.min($gameMap.height(), endY + step);

    const layerContainer = _DynamicLayers[_currentMapId][layerId];

    // Carga de imágenes optimizada
    const loadedBitmaps = {};

    const tileWidth = $gameMap.tileWidth(); // Calcula el ancho de un tile una vez
    const tileHeight = $gameMap.tileHeight(); // Calcula el alto de un tile una vez

    const stepX = step * tileWidth; // Calcula el salto en X
    const stepY = step * tileHeight; // Calcula el salto en Y

    for (let i = extendedStartX, posX = i * tileWidth; i < extendedEndX; i += step, posX += stepX) {
      for (let j = extendedStartY, posY = j * tileHeight; j < extendedEndY; j += step, posY += stepY) {
        const tileKey = `${i},${j}`; // Build tile key directly
        const tileID = _tileIDs[_currentMapId][tileKey] || 0; // Get tile ID from _tileIDs

        if (tileID === 0) {
          const macroTileKey = `${i - (i % step)},${j - (j % step)}`;
          const topLeftTile = _macroTileTopLeftCoords[_currentMapId][macroTileKey];

          if (topLeftTile) {
            const associatedTileKey = `${topLeftTile.x},${topLeftTile.y}`; // Build associated tile key
            const associatedTileID = _tileIDs[_currentMapId][associatedTileKey] || 0; // Get associated tile ID

            if (
              !_tileIDs[_currentMapId][layerId][associatedTileID] ||
              !_tileIDs[_currentMapId][layerId][associatedTileID].sprite
            ) {
              let sprite;
              if (_tileIDs[_currentMapId][layerId][associatedTileID]) {
                sprite = _tileIDs[_currentMapId][layerId][associatedTileID].sprite;
              } else {
                sprite = getSpriteFromPool();
                if (!sprite) {
                  // Handle the case where there are no available sprites in the pool
                  continue; // Continue with the next loop iteration
                }
                _tileIDs[_currentMapId][layerId][associatedTileID] = { sprite: sprite };
              }

              // Carga de imagen optimizada
              if (!loadedBitmaps[associatedTileID]) {
                sprite.bitmap = ImageManager.loadBitmap(
                  imagePath + "/",
                  String(associatedTileID)
                );
                console.log("loadDynamicLayerImages", imagePath + "/",
                String(associatedTileID))
                loadedBitmaps[associatedTileID] = true;
              }
              sprite.originalX = posX;
              sprite.originalY = posY;
              sprite.originalX = topLeftTile.x * tileWidth; // Usar el valor calculado
              sprite.originalY = topLeftTile.y * tileHeight; // Usar el valor calculado

              // Set the sprite's position relative to the container
              sprite.x = sprite.originalX - layerContainer.x;
              sprite.y = sprite.originalY - layerContainer.y;
              sprite.x = sprite.originalX;
              sprite.y = sprite.originalY;

              console.log("addchild", sprite.spriteId, layerContainer.children.length)
              layerContainer.addChild(sprite);
            }
          }
        } else if (tileID !== 0) {
          if (
            !_tileIDs[_currentMapId][layerId][tileID] ||
            !_tileIDs[_currentMapId][layerId][tileID].sprite
          ) {
            let sprite;
            if (_tileIDs[_currentMapId][layerId][tileID]) {
              sprite = _tileIDs[_currentMapId][layerId][tileID].sprite;
            } else {
              sprite = getSpriteFromPool();
              if (!sprite) {
                // Handle the case where there are no available sprites in the pool
                continue; // Continue with the next loop iteration
              }
              _tileIDs[_currentMapId][layerId][tileID] = { sprite: sprite };
            }

            // Carga de imagen optimizada
            if (!loadedBitmaps[tileID]) {
              sprite.bitmap = ImageManager.loadBitmap(
                imagePath + "/",
                String(tileID)
              );
              
              console.log("loadDynamicLayerImages", imagePath + "/",
              String(tileID))
              loadedBitmaps[tileID] = true;
            }

            sprite.originalX = posX; // Usar el valor calculado
            sprite.originalY = posY; // Usar el valor calculado

            // Set the sprite's position relative to the container
            sprite.x = sprite.originalX;
            sprite.y = sprite.originalY;

            console.log("addchild", sprite.spriteId, layerContainer.children.length)
            layerContainer.addChild(sprite);
          }
        }
      }
    }
  }








  // quita las imagenes fuera del rango de visión


  const unloadOutOfRangeImages = (layerId, mapWidth, mapHeight, multiples) => {


    // Verificar el estado del interruptor dinámico
    if (!interruptorDinamico) {
      return; // Salir de la función si el interruptor está en false
    }
    const visibleTileRange = getVisibleTileRange(multiples);
    const { startX, startY, endX, endY } = visibleTileRange;

    if (_tileIDs[_currentMapId] && _tileIDs[_currentMapId][layerId]) {
      const step = multiples / 48;
      const extendedStartX = Math.max(0, startX - step);
      const extendedStartY = Math.max(0, startY - step);
      const extendedEndX = Math.min($gameMap.width(), endX + step);
      const extendedEndY = Math.min($gameMap.height(), endY + step);
      const layerContainer = _DynamicLayers[_currentMapId][layerId];

      // Mantener una lista de sprites a eliminar al final del bucle
      const spritesToRemove = [];

      const tileWidth = 48; // Ancho del tile
      const tileHeight = 48; // Alto del tile

      for (let tileID in _tileIDs[_currentMapId][layerId]) {
        if (_tileIDs[_currentMapId][layerId].hasOwnProperty(tileID)) {
          const spriteEntry = _tileIDs[_currentMapId][layerId][tileID];
          if (spriteEntry && spriteEntry.sprite) {
            const sprite = spriteEntry.sprite;

            // Verificar si toda la macro casilla está fuera del rango visible
            const macroTileSize = multiples / 48;
            let isMacroTileOutOfRange = true;

            const spriteX = sprite.originalX;
            const spriteY = sprite.originalY;

            for (let offsetX = 0; offsetX < macroTileSize; offsetX++) {
              for (let offsetY = 0; offsetY < macroTileSize; offsetY++) {
                const tileX = spriteX + offsetX * tileWidth;
                const tileY = spriteY + offsetY * tileHeight;

                if (
                  tileX >= extendedStartX * tileWidth &&
                  tileX < extendedEndX * tileWidth &&
                  tileY >= extendedStartY * tileHeight &&
                  tileY < extendedEndY * tileHeight
                ) {
                  isMacroTileOutOfRange = false;
                  break;
                }
              }
              if (!isMacroTileOutOfRange) {
                break;
              }
            }

            if (isMacroTileOutOfRange) {
              spritesToRemove.push(sprite);
              delete _tileIDs[_currentMapId][layerId][tileID];
            }
          }
        }
      }

      // Eliminar los sprites al final del bucle
      for (const spriteToRemove of spritesToRemove) {
        layerContainer.removeChild(spriteToRemove);
        returnSpriteToPool(spriteToRemove);
      }
    }
  };















  // se ejecuta en cada frame

  let ttx = 0;
  let curTime = new Date().getTime();

  const _Game_Map_update = Game_Map.prototype.update;
  Game_Map.prototype.update = function (sceneActive) {

    if (ttx ++ === 99) {
      // console.log("Updating", new Date().getTime() - curTime);
      ttx = 0;
    }
    curTime = new Date().getTime();

    _Game_Map_update.call(this, sceneActive);

    if (SceneManager._scene instanceof Scene_Map) {

      _updateStaticLayersPosition();
      const hasActiveDynamicLayers = _DynamicLayers[_currentMapId] && Object.keys(_DynamicLayers[_currentMapId]).length > 0;
      _updateDynamicLayersPosition();
      // Solo llamar a verificarCapasDinamicasYActualizar si hay capas dinámicas activas
      if (hasActiveDynamicLayers) {
        verificarCapasDinamicasYActualizar();
      }

      const visibleTileRange = getVisibleTileRange();
      for (let layerId in _DynamicLayers[_currentMapId]) {
        if (_DynamicLayers[_currentMapId].hasOwnProperty(layerId)) {
          const playerX = $gamePlayer.x;
          const playerY = $gamePlayer.y;
          const layerArgs = _DynamicLayers[_currentMapId][layerId].args;
          if (layerArgs && layerArgs.mapWidth && layerArgs.mapHeight && layerArgs.imagePath && layerArgs.z && layerArgs.multiples) {
            loadDynamicLayerImages(
              layerId,
              playerX,
              playerY,
              layerArgs.mapWidth,
              layerArgs.mapHeight,
              layerArgs.imagePath,
              layerArgs.z,
              layerArgs.multiples,
            );
            unloadOutOfRangeImages(
              layerId,
              layerArgs.mapWidth,
              layerArgs.mapHeight,
              layerArgs.multiples,
            );
          }
        }
      }
    }
  };




  // movimiento del la capa dinamicas en el mapa

  const _updateDynamicLayersPosition = () => {
    if (!interruptorDinamico) {
      return; // Salir de la función si el interruptor está en false
    }

    for (let layerId in _DynamicLayers[_currentMapId]) {
      if (_DynamicLayers[_currentMapId].hasOwnProperty(layerId)) {
        const layerContainer = _DynamicLayers[_currentMapId][layerId];

        // Ajustar la posición del contenedor basado en el desplazamiento del mapa
        layerContainer.x = -$gameMap.displayX() * $gameMap.tileWidth();
        layerContainer.y = -$gameMap.displayY() * $gameMap.tileHeight();
      }
    }
  };







  // movimiento del la capa estatica en el mapa**

  const _updateStaticLayersPosition = () => {
    if (!interruptorDinamico) {
      return; // Salir de la función si el interruptor está en false
    }

    for (let mapId in _StaticLayers) {
      if (_StaticLayers.hasOwnProperty(mapId)) {
        for (let id in _StaticLayers[mapId]) {
          if (_StaticLayers[mapId].hasOwnProperty(id)) {
            const parallax = _StaticLayers[mapId][id];
            if (parallax && parallax !== null) {
              // Ajuste directo de la posición sin redondeo
              parallax.x = parallax.originalX - $gameMap.displayX() * $gameMap.tileWidth();
              parallax.y = parallax.originalY - $gameMap.displayY() * $gameMap.tileHeight();
            }
          }
        }
      }
    }
  };




  // Añade las capas al mapa para que sean visivles**

  const _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
  Scene_Map.prototype.createDisplayObjects = function () {
    _Scene_Map_createDisplayObjects.call(this);
    if (!this._spriteset) {
      return;
    }
    _currentMapId = $gameMap.mapId();
    const currentParallaxes = _StaticLayers[_currentMapId];
    if (currentParallaxes) {
      Object.values(currentParallaxes).forEach(parallax => {
        if (parallax && parallax.bitmap && !parallax.bitmap.isError()) {
          this._spriteset._tilemap.addChild(parallax);
        }
      });
    }
    const currentDynamicLayers = _DynamicLayers[_currentMapId];
    if (currentDynamicLayers) {
      Object.values(currentDynamicLayers).forEach(dynamicLayer => {
        if (dynamicLayer) {
          this._spriteset._tilemap.addChild(dynamicLayer);
        }
      });
    }
  };



  // Para que las capas no se eliminen al abrir menus**

  const _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function () {
    _Scene_Map_terminate.call(this);
    if (this._spriteset) {
      const currentMapId = $gameMap ? $gameMap.mapId() : null;
      if (_StaticLayers && _StaticLayers[currentMapId]) {
        for (let id in _StaticLayers[currentMapId]) {
          if (_StaticLayers[currentMapId].hasOwnProperty(id)) {
            const parallax = _StaticLayers[currentMapId][id];
            if (parallax && parallax !== null) {
              this._spriteset._tilemap.removeChild(parallax);
            }
          }
        }
      }
      if (_DynamicLayers && _DynamicLayers[_currentMapId]) {
        // Verificar si _DynamicLayers y _DynamicLayers[_currentMapId] están definidos
        for (let id in _DynamicLayers[_currentMapId]) {
          if (_DynamicLayers[_currentMapId].hasOwnProperty(id)) {
            const dynamicLayer = _DynamicLayers[_currentMapId][id];
            if (dynamicLayer && dynamicLayer !== null) {
              this._spriteset._tilemap.removeChild(dynamicLayer);
            }
          }
        }
      }
    }
  };










  // Crea capas estacicas**


  PluginManager.registerCommand(
    "DynamicParallaxMap",
    "createStaticLayer",
    (args) => {
      if (debugMode) {
        console.log(
          "Función 'createStaticLayer' llamada con argumentos:",
          args,
        );
      }
      const { id, image, posX, posY, z, mapId } = args; // Añadimos mapId a la desestructuración
      // Verificación del mapId
      if (Number(mapId) && Number(mapId) !== Number(_currentMapId)) {
        if (debugMode) {
          console.log(
            `Intento de crear capa estática en mapa incorrecto. Mapa actual: ${_currentMapId}, Mapa especificado: ${mapId}`,
          );
        }
        return; // Si el mapId no coincide con el mapa actual, simplemente retornamos y no hacemos nada
      }
      if (!_StaticLayers[_currentMapId]) {
        _StaticLayers[_currentMapId] = {};
      }
      if (_StaticLayers[_currentMapId][id]) {
        if (SceneManager._scene && SceneManager._scene._spriteset) {
          SceneManager._scene._spriteset._tilemap.removeChild(
            _StaticLayers[_currentMapId][id],
          );
        }
        delete _StaticLayers[_currentMapId][id];
      }
      const parallax = new Sprite();
      parallax.bitmap = ImageManager.loadBitmap(
        "img/dynamicparallaxes/",
        image,
      );
      console.log("createStaticLayerCommand", image);
      parallax.originalX = posX * $gameMap.tileWidth();
      parallax.originalY = posY * $gameMap.tileHeight();
      parallax.x = Math.round(
        parallax.originalX - $gameMap.displayX() * $gameMap.tileWidth(),
      );
      parallax.y = Math.round(
        parallax.originalY - $gameMap.displayY() * $gameMap.tileHeight(),
      );
      parallax.z = z;
      _StaticLayers[_currentMapId][id] = parallax;
      if (SceneManager._scene && SceneManager._scene._spriteset) {
        SceneManager._scene._spriteset._tilemap.addChild(parallax);
      }
      storePluginCommand("static", "createStaticLayer", args);
      if (debugMode) {
        console.log("Modificando storedPluginCommands:", storedPluginCommands);
      }
    },
  );






  // Elimina capas estacicas**


  PluginManager.registerCommand(
    "DynamicParallaxMap",
    "removeStaticLayer",
    (args) => {
      const { layerId, mapId } = args; // Añadimos mapId a la desestructuración
      // Verificación del mapId
      if (Number(mapId) && Number(mapId) !== Number(_currentMapId)) {
        if (debugMode) {
          console.log(
            `Intento de eliminar capa estática en mapa incorrecto. Mapa actual: ${_currentMapId}, Mapa especificado: ${mapId}`,
          );
        }
        return; // Si el mapId no coincide con el mapa actual, simplemente retornamos y no hacemos nada
      }

      if (_StaticLayers[_currentMapId] && _StaticLayers[_currentMapId][layerId]) {
        const staticLayer = _StaticLayers[_currentMapId][layerId];
        // Si la capa estática tiene un bitmap asociado, lo limpiamos
        if (staticLayer.bitmap) {
          staticLayer.bitmap.destroy();
          staticLayer.bitmap = null;
        }
        // Eliminamos la capa estática del tilemap
        if (SceneManager._scene && SceneManager._scene._spriteset) {
          SceneManager._scene._spriteset._tilemap.removeChild(staticLayer);
        }
        // Limpiamos la referencia de la capa estática
        delete _StaticLayers[_currentMapId][layerId];
      }

      if (debugMode) {
        console.log(`Capa estática ${layerId} del mapa ${_currentMapId} eliminada.`);
      }
    }
  );


  // Crea capas dinamicas**


  PluginManager.registerCommand(
    "DynamicParallaxMap",
    "createDynamicLayer",
    (args) => {
      if (debugMode) {
        console.log(
          "Función 'createDynamicLayer' llamada con argumentos:",
          args,
        );
      }
      console.log("iniciando createDynamicLayer.");
      // Extraer el valor de screenEffect directamente de args
      const screenEffect = args.screenEffect === "true";
      // Eliminar screenEffect de args
      delete args.screenEffect;
      // Desestructurar los demás argumentos
      const { id, imagePath, z, mapWidth, mapHeight, multiples, mapId } = args;
      // Imprimir el valor de screenEffect para verificar
      if (debugMode) {
        console.log("Valor de screenEffect:", screenEffect);
      }
      // Verificación del mapId
      if (Number(mapId) && Number(mapId) !== Number(_currentMapId)) {
        if (debugMode) {
          console.log(
            `Intento de crear capa en mapa incorrecto. Mapa actual: ${_currentMapId}, Mapa especificado: ${mapId}`,
          );
        }
        return;
      }
      // Calcular y almacenar todos los IDs de tiles para el mapa actual
      for (let i = 0; i < mapWidth; i++) {
        for (let j = 0; j < mapHeight; j++) {
          calculateTileID(i, j, mapWidth, multiples);
          getTopLeftTileOfMacroTile(i, j, mapWidth, mapHeight, multiples);
        }
      }
      // Si screenEffect está en true, aplicamos el efecto de pantalla en negro
      if (screenEffect) {
        if (debugMode) {
          console.log("Aplicando efecto de pantalla en negro.");
        }
        $gameScreen.startTint([-255, -255, -255, 255], 0);
        setTimeout(() => {
          if (debugMode) {
            console.log("Retirando efecto de pantalla en negro.");
          }
          $gameScreen.startTint([0, 0, 0, 0], 20);
        }, 1000); // Retrasamos la eliminación del efecto por 1 segundo
      }
      if (!_DynamicLayers[_currentMapId]) {
        _DynamicLayers[_currentMapId] = {};
      }
      if (!_DynamicLayers[_currentMapId][id]) {
        _DynamicLayers[_currentMapId][id] = new PIXI.Container();// Contenedor para la capa
        _DynamicLayers[_currentMapId][id].x = 0;
        _DynamicLayers[_currentMapId][id].y = 0;
        _DynamicLayers[_currentMapId][id].width = mapWidth * $gameMap.tileWidth();
        _DynamicLayers[_currentMapId][id].height = mapHeight * $gameMap.tileHeight();
        _DynamicLayers[_currentMapId][id].z = z;
        _DynamicLayers[_currentMapId][id].args = args;
      }
      if (SceneManager._scene && SceneManager._scene._spriteset) {
        SceneManager._scene._spriteset._tilemap.addChild(
          _DynamicLayers[_currentMapId][id],
        );
      }
      const playerX = $gamePlayer.x;
      const playerY = $gamePlayer.y;
      const visibleTileRange = getVisibleTileRange(multiples);
      loadDynamicLayerImages(
        id,
        playerX,
        playerY,
        mapWidth,
        mapHeight,
        imagePath,
        z,
        multiples,
      );

      storePluginCommand("dynamic", "createDynamicLayer", args);
      if (debugMode) {
        console.log("Modificando storedPluginCommands:", storedPluginCommands);
      }
    }
  );






  // elimina capas dinamicas**



  PluginManager.registerCommand("DynamicParallaxMap", "removeDynamicLayer", args => {
    const { layerId, mapId } = args;
    const mapIdNumber = Number(mapId);
    const layerIdNumber = Number(layerId);
    const currentMapId = $gameMap.mapId();

    if (mapIdNumber && mapIdNumber !== currentMapId) {
      if (debugMode) {
        console.log(`Intento de eliminar capa en mapa incorrecto. Mapa actual: ${currentMapId}, Mapa especificado: ${mapId}`);
      }
      return;
    }

    if (_DynamicLayers[currentMapId] && _DynamicLayers[currentMapId][layerIdNumber]) {
      const dynamicLayer = _DynamicLayers[currentMapId][layerIdNumber];

      // Eliminar sprites de la capa dinámica
      if (dynamicLayer) {
        while (dynamicLayer.children.length > 0) {
          const sprite = dynamicLayer.removeChildAt(0);
          if (sprite.bitmap) {
            sprite.bitmap.destroy();
            sprite.bitmap = null;
          }
        }

        // Eliminar el contenedor de PixiJS del tilemap
        if (SceneManager._scene && SceneManager._scene._spriteset) {
          SceneManager._scene._spriteset._tilemap.removeChild(dynamicLayer);
        }
      }

      // Limpiar la referencia en _DynamicLayers y _tileIDs
      delete _DynamicLayers[currentMapId][layerIdNumber];
      if (_tileIDs[currentMapId]) {
        delete _tileIDs[currentMapId][layerIdNumber];
      }
    }
  });





  // LIMPIEZA TOTAL


  function FullCleaning() {
    if (debugMode) {
      console.log("Iniciando limpieza de capas...");
    }

    // Eliminar y limpiar las capas dinámicas
    for (let mapId in _DynamicLayers) {
      for (let layerId in _DynamicLayers[mapId]) {
        const dynamicLayer = _DynamicLayers[mapId][layerId];
        if (dynamicLayer) {
          // Usando PIXI para eliminar sprites del contenedor de capas dinámicas
          while (dynamicLayer.children.length > 0) {
            const sprite = dynamicLayer.removeChildAt(0);
            if (sprite.bitmap) {
              sprite.bitmap.destroy();
              sprite.bitmap = null;
            }
          }
          if (SceneManager._scene && SceneManager._scene._spriteset) {
            SceneManager._scene._spriteset._tilemap.removeChild(dynamicLayer);
          }
        }
      }
    }

    // Reiniciar _DynamicLayers
    _DynamicLayers = {};

    // Eliminar y limpiar las capas estáticas
    for (let mapId in _StaticLayers) {
      for (let layerId in _StaticLayers[mapId]) {
        const staticLayer = _StaticLayers[mapId][layerId];
        if (staticLayer) {
          // Limpiar capas estáticas usando métodos de RPG Maker MZ
          if (SceneManager._scene && SceneManager._scene._spriteset) {
            SceneManager._scene._spriteset._tilemap.removeChild(staticLayer);
          }
          staticLayer.bitmap = null;
        }
      }
    }

    // Reiniciar _StaticLayers
    _StaticLayers = {};

    // Limpiar _tileIDs y _macroTileTopLeftCoords
    _tileIDs = {};
    _macroTileTopLeftCoords = {};

    // Limpiar storedPluginCommands
    storedPluginCommands.dynamic = [];
    storedPluginCommands.static = [];

    // Manejo del pool de sprites
    spritePool.dynamic.forEach(sprite => {
      if (sprite.bitmap) {
        sprite.bitmap.destroy();
        sprite.bitmap = null;
      }
    });
    spritePool.dynamic = [];

    // Limpiar imágenes cargadas
    if (debugMode) {
      console.log("Limpiando imágenes cargadas...");
    }

    for (const imagePath in window.loadedImagesData) {
      const imageData = window.loadedImagesData[imagePath];
      if (imageData.bitmap) {
        imageData.bitmap.destroy();
      }
      // Agrega aquí cualquier otra limpieza específica que necesites
    }

    // Limpiar el objeto window.loadedImagesData
    window.loadedImagesData = {};

    // Reiniciar temporizadores y contadores
    temporizadorMovimiento = 0;
    lastSaveTime = 0;

    if (debugMode) {
      console.log("Limpieza de capas dinámicas y estáticas completada.");
    }
  }





  // LIMPIAR EN EL TITULO

  const _Scene_Title_start = Scene_Title.prototype.start;
  Scene_Title.prototype.start = function () {
    _Scene_Title_start.call(this);
    FullCleaning();
  };






  // LIMPIEZA BASICA

  function BasicCleaning() {
    if (debugMode) {
      console.log("Iniciando limpieza básica de capas...");
    }

    // Limpiar las capas dinámicas manteniendo las imágenes
    for (let mapId in _DynamicLayers) {
      for (let layerId in _DynamicLayers[mapId]) {
        const dynamicLayer = _DynamicLayers[mapId][layerId];
        if (dynamicLayer && SceneManager._scene && SceneManager._scene._spriteset) {
          SceneManager._scene._spriteset._tilemap.removeChild(dynamicLayer);
        }
      }
    }

    // Reiniciar _DynamicLayers
    _DynamicLayers = {};

    // Limpiar las capas estáticas manteniendo las imágenes
    for (let mapId in _StaticLayers) {
      for (let layerId in _StaticLayers[mapId]) {
        const staticLayer = _StaticLayers[mapId][layerId];
        if (staticLayer && SceneManager._scene && SceneManager._scene._spriteset) {
          SceneManager._scene._spriteset._tilemap.removeChild(staticLayer);
        }
      }
    }

    // Reiniciar _StaticLayers
    _StaticLayers = {};

    // Limpiar _tileIDs y _macroTileTopLeftCoords
    _tileIDs = {};
    _macroTileTopLeftCoords = {};

    // Reiniciar temporizador de movimiento
    temporizadorMovimiento = 0;

    if (debugMode) {
      console.log("Limpieza básica de capas dinámicas y estáticas completada.");
    }
  }























  // LIMPIA EN CAMBIOS DE MAPA BAJO CONDICIONES


  const configuracionLimpiezaMapas = JSON.parse(parameters['LimpiezaMapas'] || '[]').map(e => {
    const parsed = JSON.parse(e);
    return {
      mapaId: Number(parsed.mapaId),
      limpiar: parsed.limpiar === 'true'
    };
  });

  console.log("Configuración de Limpieza de Mapas procesada:", configuracionLimpiezaMapas);



  const _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function (mapId) {
    _Game_Map_setup.call(this, mapId);
    preloadImagesForMap(mapId);
    console.log(`Cambiando al mapa ID ${mapId}`);

    const configuracionMapaActual = configuracionLimpiezaMapas.find(m => m.mapaId === $gameMap.mapId());
    const configuracionMapaNuevo = configuracionLimpiezaMapas.find(m => m.mapaId === mapId);

    let debeLimpiar = true;

    // Verificar la configuración del mapa actual y del mapa nuevo
    if (configuracionMapaActual) {
      if (!configuracionMapaActual.limpiar) {
        // Si el mapa actual está configurado en false, usar BasicCleaning()
        debeLimpiar = false;
        console.log(`Ejecutando BasicCleaning() para el mapa ID ${mapId} desde el mapa actual`);
        BasicCleaning();
      } else if (!configuracionMapaNuevo || configuracionMapaNuevo.limpiar) {
        // Limpiar si el mapa nuevo está en true o no está en la lista
        console.log(`Ejecutando FullCleaning() para el mapa ID ${mapId}`);
        FullCleaning();
      } else {
        // No limpiar si el mapa nuevo está en false
        console.log(`No se ejecuta limpieza para el mapa ID ${mapId}`);
      }
    } else {
      // Si el mapa actual no está en la lista, verificar el mapa nuevo
      if (configuracionMapaNuevo && !configuracionMapaNuevo.limpiar) {
        // Ejecutar BasicCleaning() si el mapa nuevo está en false
        console.log(`Ejecutando BasicCleaning() para el mapa ID ${mapId}`);
        BasicCleaning();
      } else {
        // Ejecutar FullCleaning() si el mapa nuevo está en true o no está en la lista
        console.log(`Ejecutando FullCleaning() para el mapa ID ${mapId}`);
        FullCleaning();
      }
    }

    _Game_Map_setup.call(this, mapId);
  };











  // CACHE DE IMAGENES

  // Comprobar si los parámetros "ImageSets" están definidos en el PluginManager
  const imageSetParameters = PluginManager.parameters(pluginName);
  const imageSets = imageSetParameters.ImageSets ? JSON.parse(imageSetParameters.ImageSets) : [];

  function normalizePath(path) {
    return path.replace(/\\/g, '/');
  }

  function preloadImagesForMap(mapId) {
    const setsToLoad = imageSets.filter(set => Number(set.MapId) === mapId);

    setsToLoad.forEach(set => {
      let imagePath = normalizePath(set.ImagePath);
      imagePath = imagePath.endsWith('/') ? imagePath : imagePath + '/';
      const imageCount = Number(set.ImageCount);

      for (let i = 1; i <= imageCount; i++) {
        const fileName = String(i);
        const fullImagePath = `${imagePath}${fileName}.png`;

        // Comprobación en window.loadedImagesData para evitar recargas
        if (!window.loadedImagesData.hasOwnProperty(fullImagePath)) {
          const bitmap = ImageManager.loadBitmap(imagePath, fileName);
          bitmap.addLoadListener(() => {
            console.log(`Imagen ${fullImagePath} cargada.`);
            // Almacenar los detalles de la imagen en el objeto global
            window.loadedImagesData[fullImagePath] = {
              path: imagePath,
              fileName: fileName,
              bitmap: bitmap
              // Aquí puedes añadir más propiedades según sea necesario
            };
          });
        } else {
          console.log(`Imagen ${fullImagePath} ya está cargada y en el registro.`);
        }
      }
    });
  }







})();