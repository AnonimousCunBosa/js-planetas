//CONSTANTES DE LA GRAVEDAD DE CADA PLANETA (PARAMETROS DE EXPEDICION )
const gravedad_mercurio = 0.38 ;
const gravedad_venus = 0.91 ;
const gravedad_marte = 0.38 ;
const gravedad_jupiter = 2.53 ;
const gravedad_saturno = 1.06 ;
const gravedad_urano = 0.89 ;
const gravedad_neptuno = 1.14 ;

//CONECTANDO LOS ID 
const input_Masa = document.getElementById('input_Masa') ;
const Select_Planeta = document.getElementById('Select_Planeta');
const btn_Calcular = document.getElementById('btn_Calcular');
const Texto_Resultado = document.getElementById('Texto_Resultado');
const Texto_bitacora = document.getElementById('Texto_bitacora');
const Texto_distancia = document.getElementById('Texto_distancia');
const titulo_planeta = document.getElementById('titulo-planeta');
const Visor_planeta = document.getElementById('Visor_planeta');
const Variaciones_planetas = document.getElementById('Variaciones_planetas');
const Titulo_dimension = document.getElementById('Titulo_dimension');
const Texto_dimension = document.getElementById('Texto_dimension');
const Titulo_superficie = document.getElementById('Titulo_superficie');
const Texto_superficie = document.getElementById('Texto_superficie');
const Titulo_lunas = document.getElementById('Titulo_lunas');
const Texto_lunas = document.getElementById('Texto_lunas');
const Titulo_atmosfera = document.getElementById('Titulo_atmosfera');
const Texto_atmosfera = document.getElementById('Texto_atmosfera');
const Titulo_composicion = document.getElementById('Titulo_composicion');
const Texto_composicion = document.getElementById('Texto_composicion');
const Titulo_orbitaje = document.getElementById('Titulo_orbitaje');
const Texto_orbitaje = document.getElementById('Texto_orbitaje');
const Titulo_masa_volumen = document.getElementById('Titulo_masa_volumen');
const Texto_masa_volumen = document.getElementById('Texto_masa_volumen');
const Titulo_densidad = document.getElementById('Titulo_densidad');
const Texto_densidad = document.getElementById('Texto_densidad');
const Texto_gravedad = document.getElementById('Texto_gravedad');
const Texto_rotacion = document.getElementById('Texto_rotacion');
const Texto_orbital = document.getElementById('Texto_orbital');
const Texto_temperatura = document.getElementById('Texto_temperatura');

// APARTADO DE IDIOMAS: traducciones en español e inglés, incluidas las fichas de cada planeta.
const traducciones = {
  "es": {
    "tituloPrincipal": "CALCULA TU PESO",
    "subtituloPrincipal": "EN EL SISTEMA SOLAR",
    "descripcionPrincipal": "Explora tu masa gravitacional a través del cosmo. Una extrapolación física calibrada según las efemérides interplanetarias de la Unión Astronómica Internacional.",
    "expedicion": "PARÁMETROS DE EXPEDICIÓN",
    "masa": "MASA EN LA TIERRA",
    "destino": "DESTINO DEL SISTEMA SOLAR",
    "calcular": "CALCULAR PESO INTERPLANETARIO",
    "bitacora": "BITÁCORA DE VIAJE",
    "resultadosSuperficie": "RESULTADO DE SUPERFICIES",
    "pesoEfectivo": "PESO EQUIVALENTE EFECTIVO",
    "variacionGravedad": "VARIACIÓN GRAVITACIONAL",
    "distanciaViaje": "DISTANCIA DE VIAJE",
    "dimension": "01 / / DIMENSIÓN",
    "superficie": "02 / / SUPERFICIE",
    "lunas": "03 / / LUNAS",
    "composicion": "04 / / COMPOSICIÓN",
    "atmosfera": "05 / / ATMÓSFERA",
    "orbitaSolar": "06 / / ORBITAJE SOLAR",
    "masaVolumen": "07 / / MASA Y VOLUMEN",
    "densidad": "08 / / DENSIDAD",
    "gravedad": "GRAVEDAD EFECTIVA",
    "rotacion": "PERIODO DE ROTACIÓN",
    "anioOrbital": "AÑO ORBITAL",
    "temperatura": "TEMPERATURA MEDIA",
    "planetaTierra": "00 // TIERRA",
    "planetaMercurio": "01 // MERCURIO",
    "planetaVenus": "02 // VENUS",
    "planetaMarte": "03 // MARTE",
    "planetaJupiter": "04 // JÚPITER",
    "planetaSaturno": "05 // SATURNO",
    "planetaUrano": "06 // URANO",
    "planetaNeptuno": "07 // NEPTUNO"
  },
  "en": {
    "tituloPrincipal": "CALCULATE YOUR WEIGHT",
    "subtituloPrincipal": "IN THE SOLAR SYSTEM",
    "descripcionPrincipal": "Explore your gravitational mass across the cosmos. A physical extrapolation calibrated using the International Astronomical Union's interplanetary ephemerides.",
    "expedicion": "EXPEDITION PARAMETERS",
    "masa": "MASS ON EARTH",
    "destino": "SOLAR SYSTEM DESTINATION",
    "calcular": "CALCULATE INTERPLANETARY WEIGHT",
    "bitacora": "TRAVEL LOG",
    "resultadosSuperficie": "SURFACE RESULTS",
    "pesoEfectivo": "EFFECTIVE EQUIVALENT WEIGHT",
    "variacionGravedad": "GRAVITATIONAL VARIATION",
    "distanciaViaje": "TRAVEL DISTANCE",
    "dimension": "01 / / DIMENSION",
    "superficie": "02 / / SURFACE",
    "lunas": "03 / / MOONS",
    "composicion": "04 / / COMPOSITION",
    "atmosfera": "05 / / ATMOSPHERE",
    "orbitaSolar": "06 / / SOLAR ORBIT",
    "masaVolumen": "07 / / MASS AND VOLUME",
    "densidad": "08 / / DENSITY",
    "gravedad": "EFFECTIVE GRAVITY",
    "rotacion": "ROTATION PERIOD",
    "anioOrbital": "ORBITAL YEAR",
    "temperatura": "AVERAGE TEMPERATURE",
    "planetaTierra": "00 // EARTH",
    "planetaMercurio": "01 // MERCURY",
    "planetaVenus": "02 // VENUS",
    "planetaMarte": "03 // MARS",
    "planetaJupiter": "04 // JUPITER",
    "planetaSaturno": "05 // SATURN",
    "planetaUrano": "06 // URANUS",
    "planetaNeptuno": "07 // NEPTUNE",
    "planets": {
      "tierra": {
        "log": "Blue and green planet with an atmosphere rich in oxygen and liquid water. It is home to life as we know it, with diverse ecosystems and species.",
        "title": "EARTH // CRADLE OF HUMANITY // THE ORIGIN",
        "distance": "0 km",
        "dimension": "Mean equatorial diameter (100% / Earth reference value)",
        "superficie": "Total surface area (29.2% land and 70.8% liquid water)",
        "lunas": "The Moon (Selene / its only natural satellite)",
        "atmosphereTitle": "DENSE AND BREATHABLE",
        "atmosfera": "Made of nitrogen (78.1%), oxygen (20.9%), argon (0.93%) and traces of CO₂ and other gases. Standard pressure is 101.3 kPa (1 atmosphere) at sea level.",
        "compositionTitle": "DIFFERENTIATED ROCKY PLANET",
        "composicion": "Continental and oceanic crust, a dense silicate mantle, and a metallic core divided into a liquid outer core and solid inner core (iron 85%, silicate 15%).",
        "orbitaSolar": "Average distance from the Sun (1 AU), orbital period of 365.25 days and average speed of 29.78 km/s",
        "masaVolumen": "Planetary mass (100% / baseline reference value)",
        "densidad": "The Solar System's highest average density, used as the baseline reference (100%)",
        "gravedad": "9.807 m/s²",
        "rotacion": "23 h 56 m 4 s (1 sidereal day)",
        "anioOrbital": "365.25 days (1 year)",
        "temperatura": "15 °C (global average)"
      },
      "mercurio": {
        "log": "The planet closest to the Sun, with extreme temperatures. This scorching, crater-covered world has almost no atmosphere.",
        "title": "MERCURY // THE IRON WORLD // HERMES",
        "distance": "91.7 million km",
        "dimension": "Mean equatorial diameter (38% of Earth's)",
        "superficie": "Total surface area (14.7% of Earth's, about the size of Asia and Africa combined)",
        "lunas": "No natural satellites",
        "atmosphereTitle": "BARELY EXISTING EXOSPHERE",
        "atmosfera": "An extremely thin layer of oxygen (42%), sodium (29%), hydrogen (22%), helium (6%) and potassium, with imperceptible pressure (10⁻¹⁴ bar).",
        "compositionTitle": "ROCKY WITH A GIANT CORE",
        "composicion": "Graphite-rich silicate crust, thin mantle and a large iron core that occupies about 85% of the planet's radius.",
        "orbitaSolar": "Average distance from the Sun (0.387 astronomical units - AU)",
        "masaVolumen": "Second-highest average density in the Solar System (98.3% of Earth's)",
        "densidad": "Average density: 5.43 g/cm³ (98.6% of Earth's)",
        "gravedad": "3.70 m/s²",
        "rotacion": "58 d 15 h 30 m (1 sidereal day)",
        "anioOrbital": "88 days (1 year)",
        "temperatura": "167 °C (global average)"
      },
      "venus": {
        "log": "A scorching world with impact craters and a dense, toxic atmosphere, extreme temperatures and crushing atmospheric pressure.",
        "title": "VENUS // THE DENSEST HELL // APHRODITE",
        "distance": "108.2 million km",
        "dimension": "Mean equatorial diameter (95% of Earth's)",
        "superficie": "Total surface area (90.2% of Earth's, dominated by volcanic plains)",
        "lunas": "No natural satellites",
        "atmosphereTitle": "DENSE AND TOXIC",
        "atmosfera": "Made of carbon dioxide (96.5%), nitrogen (3.5%) and sulfuric acid clouds, with extreme pressure of 92 atm (92 times Earth's).",
        "compositionTitle": "VOLCANIC ROCKY PLANET",
        "composicion": "Silicate crust with volcanoes and plains, a silicate mantle and an iron-sulfur metallic core with an estimated inner radius of 3,000 km.",
        "orbitaSolar": "Average distance from the Sun (0.723 astronomical units - AU)",
        "masaVolumen": "Planetary mass (81.5% of Earth's; Earth is about 1.16 times larger)",
        "densidad": "High average density (95.1% of Earth's)",
        "gravedad": "8.87 m/s²",
        "rotacion": "243 Earth days (retrograde rotation)",
        "anioOrbital": "224.7 Earth days",
        "temperatura": "437 °C to 482 °C"
      },
      "marte": {
        "log": "A reddish planet with a thin atmosphere and cold temperatures. This desert world has giant volcanoes and deep canyons.",
        "title": "MARS // THE RED PLANET // ARES",
        "distance": "227.9 million km",
        "dimension": "Mean equatorial diameter (53% of Earth's)",
        "superficie": "Total surface area (28.4% of Earth's, about equal to all of Earth's land area)",
        "lunas": "Phobos and Deimos (tiny, irregular natural satellites)",
        "atmosphereTitle": "THIN, COLD AND CO₂-RICH",
        "atmosfera": "Mostly carbon dioxide (95.3%), with nitrogen (2.6%), argon (1.9%) and oxygen (0.1%).",
        "compositionTitle": "ROCKY WITH GIANT VOLCANOES",
        "composicion": "Silicate crust with volcanoes and canyons, a silicate mantle and an iron-sulfur metallic core with an estimated inner radius of 1,700 km.",
        "orbitaSolar": "Average distance from the Sun (1.524 astronomical units - AU)",
        "masaVolumen": "Planetary mass (10.7% of Earth's; Earth could contain Mars 6.2 times)",
        "densidad": "Low average density (71.3% of Earth's)",
        "gravedad": "3.71 m/s²",
        "rotacion": "24 h 37 m (1 sidereal day)",
        "anioOrbital": "687 days (1 year)",
        "temperatura": "-63 °C (global average)"
      },
      "jupiter": {
        "log": "The Solar System's largest planet, with a dense atmosphere and giant storms. This gas giant has the Great Red Spot and many moons.",
        "title": "JUPITER // THE GAS GIANT // JUPITER",
        "distance": "778.5 million km",
        "dimension": "Mean equatorial diameter (1,120% of Earth's / 11.2 times Earth's diameter)",
        "superficie": "Total surface area (120.4 times Earth's); for this gas giant, measured at the 1-bar pressure level",
        "lunas": "95 confirmed natural satellites, including the Galilean moons Io, Europa, Ganymede and Callisto. Ganymede is the Solar System's largest moon.",
        "atmosphereTitle": "GIANT AND DENSE",
        "atmosfera": "Mostly hydrogen (90%) and helium (10%), with traces of methane, ammonia, water vapor and other compounds. It has cloud bands and giant storms, including the Great Red Spot.",
        "compositionTitle": "GAS AND METALLIC",
        "composicion": "Outer hydrogen and helium layers, a metallic hydrogen mantle, and a rocky-metallic core estimated at 10-15 Earth masses.",
        "orbitaSolar": "Average distance from the Sun (5.204 astronomical units - AU)",
        "masaVolumen": "Planetary mass (317.8 times Earth's; Earth could fit inside 1,321 times)",
        "densidad": "Low average density (24.1% of Earth's)",
        "gravedad": "24.79 m/s²",
        "rotacion": "9 h 55 m (1 sidereal day)",
        "anioOrbital": "11.86 Earth years (4,333 Earth days)",
        "temperatura": "-110 °C (global average)"
      },
      "saturno": {
        "log": "Famous for its impressive rings and many moons. This gas giant has an atmosphere made mostly of hydrogen and helium.",
        "title": "SATURN // THE RINGED GIANT // SATURN",
        "distance": "1.4 billion km",
        "dimension": "Mean equatorial diameter (914% of Earth's / 9.1 times Earth's diameter, excluding rings)",
        "superficie": "Total surface area (83.6 times Earth's); for this gas giant, measured at the 1-bar pressure level",
        "lunas": "146 natural satellites, including Titan and Enceladus. Titan is the Solar System's second-largest moon; Enceladus has water geysers and geological activity.",
        "atmosphereTitle": "GASEOUS WITH COMPLEX RINGS",
        "atmosfera": "Mostly hydrogen (96.3%) and helium (3.25%), with traces of methane, ammonia, water vapor and other compounds. It has cloud bands and storms, less intense than Jupiter's.",
        "compositionTitle": "GAS AND ICE GIANT",
        "composicion": "Outer hydrogen and helium layers, a metallic hydrogen mantle, and a rocky-metallic core estimated at 10-20 Earth masses.",
        "orbitaSolar": "Average distance from the Sun (9.582 astronomical units - AU)",
        "masaVolumen": "Planetary mass (95.2 times Earth's; Earth could fit inside 764 times)",
        "densidad": "The Solar System's least dense planet, below water's density; average density is 12.5% of Earth's.",
        "gravedad": "10.44 m/s²",
        "rotacion": "10 h 33 m (1 sidereal day)",
        "anioOrbital": "29.45 Earth years (10,759 Earth days)",
        "temperatura": "-140 °C (global average)"
      },
      "urano": {
        "log": "An icy planet with a tilted rotation axis. This giant has an atmosphere of hydrogen, helium and methane, which gives it a blue-green color.",
        "title": "URANUS // THE ICE GIANT // URANUS",
        "distance": "2.9 billion km",
        "dimension": "Mean equatorial diameter (398% of Earth's / 4 times Earth's diameter)",
        "superficie": "Total surface area (15.9 times Earth's); for this ice giant, measured at the 1-bar pressure level",
        "lunas": "Natural satellites include Titania, Oberon, Umbriel, Ariel and Miranda; Miranda has some of the Solar System's deepest canyons and cliffs.",
        "atmosphereTitle": "GASEOUS AND ICY",
        "atmosfera": "Mostly hydrogen (82.5%), helium (15.2%) and methane (2.3%), which absorbs red light and gives Uranus its blue-green color. It also has faint rings and traces of water and ammonia.",
        "compositionTitle": "GAS AND ICE GIANT",
        "composicion": "Outer hydrogen and helium layers, a mantle of liquid water, ammonia and methane, and a rocky-metallic core estimated at 0.5 Earth masses.",
        "orbitaSolar": "Average distance from the Sun (19.191 astronomical units - AU)",
        "masaVolumen": "Planetary mass (14.5 times Earth's; Earth could fit inside 63 times)",
        "densidad": "Low average density (23.0% of Earth's)",
        "gravedad": "8.69 m/s²",
        "rotacion": "17 h 14 m (1 sidereal day)",
        "anioOrbital": "84.01 Earth years (30,687 Earth days)",
        "temperatura": "-195 °C (global average)"
      },
      "neptuno": {
        "log": "A blue, windy planet with extreme weather. This ice giant is known for powerful winds and storms.",
        "title": "NEPTUNE // THE WINDY GIANT // NEPTUNE",
        "distance": "4.5 billion km",
        "dimension": "Mean equatorial diameter (386% of Earth's / 3.9 times Earth's diameter)",
        "superficie": "Total surface area (15 times Earth's); for this ice giant, measured at the 1-bar pressure level",
        "lunas": "Triton is its largest moon, with a retrograde orbit and active liquid-nitrogen geysers.",
        "atmosphereTitle": "DYNAMIC AND DEEP BLUE",
        "atmosfera": "Mostly hydrogen (80%), helium (19%) and methane (1.5%), which absorbs red light and gives Neptune its blue color. It has faint rings, cloud bands and storms, including the Great Dark Spot.",
        "compositionTitle": "DENSE ICE GIANT",
        "composicion": "A supersonic fluid mantle of water, ammonia and methane ices surrounds a solid iron-nickel and silicate core with an estimated inner radius of 13,000 km.",
        "orbitaSolar": "Average distance from the Sun (30.07 astronomical units - AU)",
        "masaVolumen": "Planetary mass (17.1 times Earth's; Earth could fit inside 57 times by volume)",
        "densidad": "The densest of the gas and ice giants (29.7% of Earth's density)",
        "gravedad": "11.15 m/s²",
        "rotacion": "16 h 6 m (1 sidereal day)",
        "anioOrbital": "164.8 Earth years (60,190 Earth days)",
        "temperatura": "-200 °C (global average)"
      }
    }
  }
};

// CAMBIO: aplica las traducciones desde los objetos de este archivo, sin cargar JSON externo.
let idiomaActual = 'es';
let traduccionesActivas = traducciones.es;
function cambiarIdioma(idioma) {
    traduccionesActivas = traducciones[idioma] || traducciones.es;
    idiomaActual = idioma in traducciones ? idioma : 'es';
    document.documentElement.lang = idiomaActual;
    document.querySelectorAll('[data-texto]').forEach(elemento => {
        const texto = traduccionesActivas[elemento.dataset.texto];
        if (texto) elemento.textContent = texto;
    });
    localStorage.setItem('idioma', idiomaActual);
    // Si ya hay resultados, vuelve a calcular para mostrarlos en el idioma elegido.
    if (Texto_Resultado.innerText !== '--KG') btn_Calcular.click();
}

document.querySelectorAll('[data-language]').forEach(boton => {
    boton.addEventListener('click', () => cambiarIdioma(boton.dataset.language));
});
cambiarIdioma(localStorage.getItem('idioma') || 'es');

//CALCULADORA Y SU EJECUCION
btn_Calcular.addEventListener('click', function() {
    let pesoTierra = parseFloat(input_Masa.value);
    let planetaSeleccionado = Select_Planeta.value;
    
    if (isNaN(pesoTierra) || pesoTierra <= 0) {
        Texto_Resultado.innerText = 'ERROR' ;
        return;
    }
    
//DECLARACION DE VARIABLES PARA EL CALCULO DEL PESO FINAL SEGUN EL PLANETA SELECCIONADO
let pesoFinal;
let mensajeBitacora = '' ; 
let distanciaViaje = '' ;
let tituloPlaneta = '' ;
let modelo3d = '' ;
let variacionGravitacional = '' ;
let tituloDimension = '' ;
let textoDimension = '' ;
let tituloSuperficie = '' ;
let textoSuperficie = '' ;
let tituloLunas = '' ;
let textoLunas = '' ;
let tituloAtmosfera = '' ;
let textoAtmosfera = '' ;
let tituloComposicion = '' ;
let textoComposicion = '' ;
let tituloOrbitaje = '' ;
let textoOrbitaje = '' ;
let tituloMasaVolumen = '' ;
let textoMasaVolumen = '' ;
let tituloDensidad = '' ;
let textoDensidad = '' ;
let textoGravedad = '' ;
let textoRotacion = '' ;
let textoOrbital = '' ;
let textoTemperatura = '' ;

    if (planetaSeleccionado === 'tierra'){//PLANETA TIERRA//
        pesoFinal = pesoTierra ;
        variacionGravitacional = '0%';
        mensajeBitacora = 'Planeta azul y verde, con una atmósfera rica en oxígeno y agua líquida. Es el hogar de la vida tal como la conocemos, con una gran diversidad de ecosistemas y especies.';
        tituloPlaneta = 'TIERRA // CUNA DE LA HUMANIDAD // EL ORIGEN';
        modelo3d = 'modelos_3d/Tierra3d.glb';
        distanciaViaje = '0 km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 / / DIMENSIÓN
        tituloDimension = '12.756 KM';
        textoDimension = 'Diámetro ecuatorial medio (100% / Valor de referencia terráqueo)';
        //02 // SUPERFICIE
        tituloSuperficie = '510,1 MILLONES KM²';
        textoSuperficie = 'Área superficial total (29,2% tierra firme y 70,8% agua líquida)';
        //03 // LUNAS
        tituloLunas = '1 LUNA';
        textoLunas = 'La Luna (Selene / Satélite natural único)';
        //04 // ATMOSFERA
        tituloAtmosfera = 'DENSA Y RESPIRABLE';
        textoAtmosfera = 'Compuesta por nitrógeno (78.1%), oxígeno (20.9%), argón (0.93%) y trazas de CO₂ con otros gases. Con una presión estandar de 101,3 kPa (1 atmósfera) a nivel del mar.';
        //05 // COMPOSICIÓN
        tituloComposicion = 'ROCOSA DIFERENCIADA';
        textoComposicion = 'Corteza continental y oceánica. Manto denso de silicatos y núcleo metálico dividido en externo (líquido) e interno (sólido de Hierro (85%), silicato (15%))';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '149,6 M KM';
        textoOrbitaje = 'Distancia media al sol (1 UA) con un periodo orbital de 365,25 días y una velocidad media de 29,78 km/s';
        //07 // MASA Y VOLUMEN
        tituloMasaVolumen = '5,97 × 10²⁴ KG';
        textoMasaVolumen = 'Masa planetaria (100% / Valor de referencia base)';
        //08 // DENSIDAD
        tituloDensidad = '5,51 G/CM³';
        textoDensidad = 'La densidad media más alta de todo el Sistema Solar, con un valor de referencia base (100%)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '9,807 m/s²';
        //ROTACION
        textoRotacion = '23 h 56m 4s (1 dia sideral)';
        //AÑO ORBITAL
        textoOrbital = '365,25 días (1 año)';
        //TEMPERATURA MEDIA
        textoTemperatura = '15 °C (media global)';  
    } else if (planetaSeleccionado === 'mercurio'){//PLANETA MERCURIO//
        pesoFinal = pesoTierra * gravedad_mercurio ;
        variacionGravitacional = ((gravedad_mercurio - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Planeta más cercano al sol, con temperaturas extremas.Es un mundo abrasador, sin atmósfera apreciable y lleno de cráteres';
        tituloPlaneta = 'MERCURIO // EL MUNDO DE HIERRO // HERMES';
        modelo3d = 'modelos_3d/Mercurio3d.glb';
        distanciaViaje = '91.7 millones de km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '4.879 KM';
        textoDimension = 'Diámetro ecuatorial medio (38% respecto al terráqueo)';
        //02 // SUPERFICIE
        tituloSuperficie = '74,8 MILLONES KM²';
        textoSuperficie = 'Área superficial total (14,7% respecto al terráqueo, equivalente a Asia y África juntas)';
        //03 // LUNAS
        tituloLunas = '0 LUNAS';
        textoLunas = 'Sin satélites naturales';
        //04 // ATMOSFERA
        tituloAtmosfera = 'EXÓSFERA CASI INEXISTENTE';
        textoAtmosfera = 'Capa extremadamente tenue compuesta por oxígeno (42%), sodio (29%), hidrógeno (22%), helio (6%) y potasio, con una presión imperceptible (10⁻¹⁴ bar)';
        //05 // COMPOSICIÓN
        tituloComposicion = 'ROCOSA CON NÚCLEO GIGANTE';
        textoComposicion = 'Corteza de silicatos rica en grafito. Manto delgado y un núcleo metálico de hierro de enorme proporción (ocupa cerca del $85% del radio del planeta)';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '57,9 M KM';
        textoOrbitaje = 'Distancia media al Sol ($0,387 Unidades Astronómicas - UA)';
        //07 // MASA Y VOLUMEN
        tituloMasaVolumen = '3,30 × 10²³ KG';
        textoMasaVolumen = 'Segunda densidad media más alta del Sistema Solar (98,3% respecto a la de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '5,43 G/CM³';
        textoDensidad = 'La densidad media más alta de todo el Sistema Solar, con un valor de referencia base (100%)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '3,70 m/s²';
        //ROTACION
        textoRotacion = '58 d 15 h 30 m (1 día sideral)';
        //AÑO ORBITAL
        textoOrbital = '88 días (1 año)';
        //TEMPERATURA MEDIA
        textoTemperatura = '167 °C (media global)';
    } else if (planetaSeleccionado === 'venus'){//PLANETA VENUS//
        pesoFinal = pesoTierra * gravedad_venus ;
        variacionGravitacional = ((gravedad_venus - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Mundo abrasador y lleno de cráteres de impacto con unna atmósfera densa y tóxica, con temperaturas extremas y presión atmosférica aplastante.';
        tituloPlaneta = 'Venus // EL INFIERNO DENSISIMO // ARES';
        modelo3d = 'modelos_3d/Venus3d.glb';
        distanciaViaje = '108.2 millones de km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '12.104 KM';
        textoDimension = 'Diámetro ecuatorial medio (95% respecto al terráqueo)';
        //02 // SUPERFICIE
        tituloSuperficie = '460,2 millones de km²';
        textoSuperficie = 'Área superficial total (90,2% respecto al terráqueo, dominada por llanuras volcánicas)';
        //03 // LUNAS
        tituloLunas = '0';
        textoLunas = 'Sin satélites naturales';
        //04 // ATMOSFERA
        tituloAtmosfera = 'DENSAMENTE TÓXICA';
        textoAtmosfera = 'Compuesta por dióxido de carbono (96,5%), nitrógeno (3,5%) y nubes de ácido sulfúrico, con una presión extrema de 92 atm (92 veces la terrestre)';
        //05 // COMPOSICION
        tituloComposicion = 'ROCOSA VOLCÁNICA';
        textoComposicion = 'Corteza de silicatos con volcanes y llanuras. Manto de silicatos y núcleo metálico de hierro y azufre, con un radio interno estimado en 3.000 km';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '108,2 M KM';
        textoOrbitaje = 'Distancia media al Sol (0,723 Unidades Astronómicas - UA)';
        //07 // MASAS Y VOLUMEN
        tituloMasaVolumen = '4,87 × 10²⁴ kg';//////
        textoMasaVolumen = 'Masa planetaria (81,5% respecto al terráqueo / cabe 1,16 veces dentro de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '5,43 G/CM³';
        textoDensidad = 'Densidad media elevada (95,1% respecto a la de la Tierra)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '8,87 m/s²';
        //ROTACION
        textoRotacion = '243 Días terrestres (Rotación retrógrada)';
        //AÑO ORBITAL
        textoOrbital = '224,7 Días terrestres';
        //TEMPERATURA MEDIA
        textoTemperatura = '437 °C a 482 °C';
    } else if (planetaSeleccionado === 'marte'){//PLANETA MARTE//
        pesoFinal = pesoTierra * gravedad_marte ;
        variacionGravitacional = ((gravedad_marte - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Planeta rojizo con una atmósfera delgada y temperaturas frías. Es un mundo desértico con volcanes gigantes y cañones profundos.';
        tituloPlaneta = 'MARTE // EL MUNDO ROJO // ARES';
        modelo3d = 'modelos_3d/Marte3d.glb';
        distanciaViaje = '227.9 millones de km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '6.779 KM';
        textoDimension = 'Diámetro ecuatorial medio (53% respecto al terráqueo)';
        //02 // SUPERFICIE
        tituloSuperficie = '144,8 MILLONES KM²'; 
        textoSuperficie = 'Área superficial total (28,4% respecto al terráqueo, equivalente a toda la tierra firme de la Tierra)';
        //03 // LUNAS
        tituloLunas = '2 LUNAS';
        textoLunas = 'Fobos y Deimos (Satélites naturales diminutos y de forma irregular)';
        //04 // ATMOSFERA
        tituloAtmosfera = 'DELGA, FRÍA, TENUE Y RICA EN CO₂';
        textoAtmosfera = 'Compuesta principalmente de dióxido de carbono ($95,3%) con pequeñas cantidades de nitrógeno ($2,6%), argón ($1,9%) y oxígeno ($0,1%)';
        //05 // COMPOSICIÓN
        tituloComposicion = 'ROCOSA CON VOLCANES GIGANTES';
        textoComposicion = 'Corteza de silicatos con volcanes y cañones. Manto de silicatos y núcleo metálico de hierro y azufre, con un radio interno estimado en 1.700 km';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '227,9 M KM';
        textoOrbitaje = 'Distancia media al Sol (1,524 Unidades Astronómicas - UA)';  
        //07 // MASA Y VOLUMEN
        tituloMasaVolumen = '6,42 × 10²³ KG';
        textoMasaVolumen = 'Masa planetaria (10,7% respecto al terráqueo / cabe 6,2 veces dentro de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '3,93 G/CM³';
        textoDensidad = 'Densidad media baja (71,3% respecto a la de la Tierra)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '3,71 m/s²';
        //ROTACION
        textoRotacion = '24 h 37 m (1 día sideral)';
        //AÑO ORBITAL
        textoOrbital = '687 días (1 año)';
        //TEMPERATURA MEDIA
        textoTemperatura = '-63 °C (media global)'; 
    } else if (planetaSeleccionado === 'jupiter'){//PLANETA JUPITER//
        pesoFinal = pesoTierra * gravedad_jupiter ;
        variacionGravitacional = ((gravedad_jupiter - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Planeta más grande del sistema solar, con una atmósfera densa y tormentas gigantes. Es un gigante gaseoso con una gran mancha roja y numerosos satélites.';
        tituloPlaneta = 'JUPITER // EL GIGANTE GASEOSO // JUPITER';
        modelo3d = 'modelos_3d/Jupiter3d.glb';
        distanciaViaje = '778.5 millones de km';  
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '142.984 KM';
        textoDimension = 'Diámetro ecuatorial medio (1.120% respecto al terráqueo / 11,2 veces el diámetro de la Tierra)';  
        //02 // SUPERFICIE
        tituloSuperficie = '61.418 MILLONES KM²';
        textoSuperficie = 'Área superficial total (120,4 veces la de la Tierra / 1200% respecto al terráqueo), al ser un gigante gaseoso, corresponde al nivel donde la presión es de 1 bar';
        //03 // LUNAS
        tituloLunas = '95 LUNAS';
        textoLunas = 'Satélites naturales confirmados, dstacan los 4 satélites galileanos: Ío, Europa, Ganímedes y Calisto (Ganímedes es el satélite más grande del Sistema Solar)';
        //04 // ATMOSFERA
        tituloAtmosfera = 'GIGANTE Y DENSA';
        textoAtmosfera = 'Compuesta principalmente de hidrógeno ($90%) y helio ($10%), con trazas de metano, amoníaco, vapor de agua y otros compuestos. Presenta bandas de nubes y tormentas gigantes, incluida la Gran Mancha Roja';
        //05 // COMPOSICIÓN
        tituloComposicion = 'GASEOSA Y METÁLICA';
        textoComposicion = 'Capa externa de hidrógeno y helio, con un manto de hidrógeno metálico y un núcleo rocoso y metálico estimado en 10-15 veces la masa de la Tierra';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '778,5 M KM';
        textoOrbitaje = 'Distancia media al Sol (5,204 Unidades Astronómicas - UA)';
        //07 // MASA Y VOLUMEN
        tituloMasaVolumen = '1,90 × 10²⁷ KG';
        textoMasaVolumen = 'Masa planetaria (317,8 veces la de la Tierra / cabe 1.321 veces dentro de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '1,33 G/CM³';
        textoDensidad = 'Densidad media baja (24,1% respecto a la de la Tierra)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '24,79 m/s²';
        //ROTACION
        textoRotacion = '9 h 55 m (1 día sideral)';
        //AÑO ORBITAL
        textoOrbital = '11,86 años terrestres (4.333 Días terrestres)';
        //TEMPERATURA MEDIA
        textoTemperatura = '-110 °C (media global)';
    } else if (planetaSeleccionado === 'saturno'){//PLANETA SATURNO//
        pesoFinal = pesoTierra * gravedad_saturno ;
        variacionGravitacional = ((gravedad_saturno - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Famoso por sus impresionantes anillos y numerosas lunas. Es un gigante gaseoso con una atmósfera compuesta principalmente de hidrógeno y helio.';
        tituloPlaneta = 'SATURNO // EL GIGANTE CON ANILLOS // SATURNO';
        modelo3d = 'modelos_3d/Saturno3d.glb';
        distanciaViaje = '1.4 mil millones de km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '116.464 KM';
        textoDimension = 'Diámetro ecuatorial medio (914% respecto al terráqueo / 9,1 veces el diámetro de la Tierra, sin contar los anillos)';
        //02 // SUPERFICIE
        tituloSuperficie = '42.700 MILLONES KM²';
        textoSuperficie = 'Área superficial total (83,6 veces la de la Tierra / 836% respecto al terráqueo), al ser un gigante gaseoso, corresponde al nivel donde la presión es de 1 bar';
        //03 // LUNAS
        tituloLunas = '146 LUNAS';
        textoLunas = 'Posee el sistema de Satélites naturales más numerosos, donde destacan Titán (el segundo satélite más grande del Sistema Solar) y Encélado (con géiseres de agua y actividad geológica)';
        //04 // ATMOSFERA
        tituloAtmosfera = 'GASEOSA CON COMPLEJOS ANILLOS';
        textoAtmosfera = 'Compuesta principalmente de hidrógeno (96.3%) y helio (3.25%), con trazas de metano, amoníaco, vapor de agua y otros compuestos. Presenta bandas de nubes y tormentas, aunque menos intensas que en Júpiter';
        //05 // COMPOSICIÓN
        tituloComposicion = 'GIGANTE DE GAS Y HIELO';
        textoComposicion = 'Capa externa de hidrógeno y helio, con un manto de hidrógeno metálico y un núcleo rocoso y metálico estimado en 10-20 veces la masa de la Tierra';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '1,433,5 M KM';
        textoOrbitaje = 'Distancia media al Sol (9,582 Unidades Astronómicas - UA)';
        //07 // MASA Y VOLUMEN
        tituloMasaVolumen = '5,68 × 10²⁶ KG';
        textoMasaVolumen = 'Masa planetaria (95,2 veces la de la Tierra / cabe 764 veces dentro de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '0,69 G/CM³';
        textoDensidad = 'El planeta menos denso del Sistema Solar (menor que la densidad del agua, flotaría en un océano lo suficientemente grande), Densidad media muy baja (12,5% respecto a la de la Tierra)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '10,44 m/s²';
        //ROTACION
        textoRotacion = '10 h 33 m (1 día sideral)';
        //AÑO ORBITAL
        textoOrbital = '29,45 años terrestres (10.759 Días terrestres)';
        //TEMPERATURA MEDIA
        textoTemperatura = '-140 °C (media global)';
    } else if (planetaSeleccionado === 'urano'){//PLANETA URANO//
        pesoFinal = pesoTierra * gravedad_urano ;
        variacionGravitacional = ((gravedad_urano - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Planeta helado con un eje de rotación inclinado. Es un gigante gaseoso con una atmósfera compuesta principalmente de hidrógeno, helio y metano, lo que le da su color azul verdoso.';
        tituloPlaneta = 'URANO // EL GIGANTE HELADO // URANO';
        modelo3d = 'modelos_3d/Urano3d.glb';
        distanciaViaje = '2.9 mil millones de km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '50.724 KM'; 
        textoDimension = 'Diámetro ecuatorial medio (398% respecto al terráqueo / 4 veces el diámetro de la Tierra)';
        //02 // SUPERFICIE
        tituloSuperficie = '8.083 MILLONES KM²';
        textoSuperficie = 'Área superficial total (15,9 veces la de la Tierra / 159% respecto al terráqueo), al ser un gigante gaseoso, corresponde al nivel donde la presión es de 1 bar';
        //03 // LUNAS
        tituloLunas = '28 LUNAS';
        textoLunas = 'Posee un sistema de Satélites naturales, destacando Titania, Oberón, Umbriel, Ariel y Miranda(posee los cañones y acantilados más profundos del Sistema Solar)';
        //04 // ATMOSFERA
        tituloAtmosfera = 'GASEOSA Y HELADA';
        textoAtmosfera = 'Compuesta principalmente de hidrógeno (82,5%), helio (15,2%) y metano (2,3%),el cual absorbe la luz roja y le otorga su característico tono azul verdoso; cuenta además con un tenue sistema de anillos, con trazas de agua, amoníaco y otros compuestos. Presenta bandas de nubes y tormentas, aunque menos intensas que en Júpiter y Saturno';
        //05 // COMPOSICIÓN
        tituloComposicion = 'GIGANTE DE GAS Y HIELO';
        textoComposicion = 'Capa externa de hidrógeno y helio, con un manto de agua, amoníaco y metano en estado líquido y un núcleo rocoso y metálico estimado en 0,5 veces la masa de la Tierra';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '2,871,0 M KM';
        textoOrbitaje = 'Distancia media al Sol (19,191 Unidades Astronómicas - UA)';
        //07 // MASA Y VOLUMEN
        tituloMasaVolumen = '8,68 × 10²⁵ KG';
        textoMasaVolumen = 'Masa planetaria (14,5 veces la de la Tierra / cabe 63 veces dentro de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '1,27 G/CM³';
        textoDensidad = 'Densidad media baja (23,0% respecto a la de la Tierra)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '8,69 m/s²';
        //ROTACION
        textoRotacion = '17 h 14 m (1 día sideral)';
        //AÑO ORBITAL
        textoOrbital = '84,01 años terrestres (30.687 Días terrestres)';
        //TEMPERATURA MEDIA
        textoTemperatura = '-195 °C (media global)';
    } else if (planetaSeleccionado === 'neptuno'){//PLANETA NEPTUNO//
        pesoFinal = pesoTierra * gravedad_neptuno ;
        variacionGravitacional = ((gravedad_neptuno - 1) * 100).toFixed(1) + '%';
        mensajeBitacora = 'Planeta azul y ventoso, con un clima extremo. Es un gigante gaseoso con una atmósfera compuesta principalmente de hidrógeno, helio y metano, y es conocido por sus fuertes vientos y tormentas.';
        tituloPlaneta = 'NEPTUNO // EL GIGANTE VENTOSO // NEPTUNO';
        modelo3d = 'modelos_3d/Neptuno3d.glb';
        distanciaViaje = '4.5 mil millones de km';
        //CUADROS(SECCIONES) DE INFORMACION DE LA DIMENSION,SUPERFICIE,LUNAS,ATMOSFERA,COMPOSICION,ORBITAJE SOLAR,MASAS Y VOLUMEN,DENSIDAD Y LAS METRICAS DEL PLANETA
        //01 // DIMENSIÓN
        tituloDimension = '49.244 KM';
        textoDimension = 'Diámetro ecuatorial medio (386% respecto al terráqueo / 3,9 veces el diámetro de la Tierra)'; 
        //02 // SUPERFICIE
        tituloSuperficie = '7.618 MILLONES KM²';
        textoSuperficie = 'Área superficial total (15,0 veces la de la Tierra / 150% respecto al terráqueo), al ser un gigante gaseoso, corresponde al nivel donde la presión es de 1 bar';
        //03 // LUNAS
        tituloLunas = '16 LUNAS';
        textoLunas = 'Destaca Tritón, la luna más grande del planeta con órbita retrógrada y géiseres activos de nitrógeno líquido';
        //04 // ATMOSFERA
        tituloAtmosfera = 'DINÁMICA Y AZUL PROFUNDO';
        textoAtmosfera = 'Compuesta principalmente de hidrógeno (80%), helio (19%) y metano (1,5%), el cual absorbe la luz roja y le otorga su característico tono azul; cuenta además con un tenue sistema de anillos, con trazas de agua, amoníaco y otros compuestos. Presenta bandas de nubes y tormentas, siendo la más famosa la Gran Mancha Oscura';
        //05 // COMPOSICION
        tituloComposicion = 'GIGANTE HELADO DENSO';
        textoComposicion = 'Manto fluido supersónico de hielos de agua, amoníaco y metano que rodea un núcleo sólido rocoso de hierro-níquel y silicatos, con un radio interno estimado en 13.000 km';
        //06 // ORBITAJE SOLAR
        tituloOrbitaje = '4.495 M KM';
        textoOrbitaje = 'Distancia media al Sol (30,07 Unidades Astronómicas - UA)';
        //07 // MASAS Y VOLUMEN
        tituloMasaVolumen = '1,02 × 10²⁶ KG';
        textoMasaVolumen = 'Masa planetaria (17,1 veces la masa terrestre / cabe 57 veces el volumen de la Tierra)';
        //08 // DENSIDAD
        tituloDensidad = '1,64 G/CM³';
        textoDensidad = 'El más denso de los gigantes gaseosos y helados (29,7% respecto a la de la Tierra)';
        //SECCION METRICAS CLAVE
        //GRAVEDAD
        textoGravedad = '11,15 m/s²';
        //ROTACION
        textoRotacion = '16 h 6 m (1 día sideral)';
        //AÑO ORBITAL
        textoOrbital = '164,8 años terrestres (60.190 Días terrestres)';
        //TEMPERATURA MEDIA
        textoTemperatura = '-200 °C (media global)';
    }
    //MOSTRANDO LOS RESULTADOS EN EL HTML
    Texto_Resultado.innerText = `${pesoFinal.toFixed(1)} KG`;
    Texto_bitacora.innerText = mensajeBitacora;
    Texto_distancia.innerText = distanciaViaje;
    titulo_planeta.innerText = tituloPlaneta;
    Visor_planeta.src = modelo3d;
    Variaciones_planetas.innerText = variacionGravitacional;
    Titulo_dimension.innerText = tituloDimension;
    Texto_dimension.innerText = tituloDimension;
    Texto_dimension.innerText = textoDimension;
    Titulo_superficie.innerText = tituloSuperficie;
    Texto_superficie.innerText = textoSuperficie;
    Titulo_lunas.innerText = tituloLunas;
    Texto_lunas.innerText = textoLunas;
    Titulo_atmosfera.innerText = tituloAtmosfera;
    Texto_atmosfera.innerText = textoAtmosfera;
    Titulo_composicion.innerText = tituloComposicion;
    Texto_composicion.innerText = textoComposicion;
    Titulo_orbitaje.innerText = tituloOrbitaje;
    Texto_orbitaje.innerText = textoOrbitaje;
    Titulo_masa_volumen.innerText = tituloMasaVolumen;
    Texto_masa_volumen.innerText = textoMasaVolumen;
    Titulo_densidad.innerText = tituloDensidad;
    Texto_densidad.innerText = textoDensidad;
    Texto_gravedad.innerText = textoGravedad;
    Texto_rotacion.innerText = textoRotacion;
    Texto_orbital.innerText = textoOrbital;
    Texto_temperatura.innerText = textoTemperatura;

    // CAMBIO: reemplaza los textos generados para el planeta con sus equivalentes en inglés.
    // Las claves incluyen cada texto variable de los resultados y las métricas.
    if (idiomaActual === 'en' && traduccionesActivas.planets?.[planetaSeleccionado]) {
        const ingles = traduccionesActivas.planets[planetaSeleccionado];
        Texto_bitacora.innerText = ingles.log;
        titulo_planeta.innerText = ingles.title;
        Texto_dimension.innerText = ingles.dimension;
        Texto_superficie.innerText = ingles.surface;
        Texto_lunas.innerText = ingles.moons;
        Titulo_lunas.innerText = ({tierra:'1 MOON', mercurio:'0 MOONS', venus:'0 MOONS', marte:'2 MOONS', jupiter:'95 MOONS', saturno:'146 MOONS', urano:'28 MOONS', neptuno:'16 MOONS'})[planetaSeleccionado];
        Titulo_composicion.innerText = ingles.compositionTitle;
        Texto_composicion.innerText = ingles.composition;
        Titulo_atmosfera.innerText = ingles.atmosphereTitle;
        Texto_atmosfera.innerText = ingles.atmosphere;
        Texto_orbitaje.innerText = ingles.orbit;
        Texto_masa_volumen.innerText = ingles.massVolume;
        Texto_densidad.innerText = ingles.density;
        Texto_gravedad.innerText = ingles.gravity;
        Texto_rotacion.innerText = ingles.rotation;
        Texto_orbital.innerText = ingles.orbitalYear;
        Texto_temperatura.innerText = ingles.temperature;
        Texto_distancia.innerText = ingles.distance;
        titulo_planeta.innerText = ingles.title;
    }


});








