<template>
    <div>
      <AppNavbar currentPage="avisos-legales" />
      <div class="legal-notice">
        <h1>AVISOS LEGALES</h1>
        <div class="policy-section" v-html="policySections[0]"></div>
        <div class="policy-section" v-html="policySections[1]"></div>
        <div class="policy-section" v-html="policySections[2]"></div>
        <div class="policy-section" v-html="policySections[3]"></div>
        <div class="policy-section" v-html="policySections[4]"></div>
        <div class="policy-section" v-html="policySections[5]"></div>
        <div class="policy-section" v-html="policySections[6]"></div>
        <div class="policy-section" v-html="policySections[7]"></div>
        <div class="policy-section" v-html="policySections[8]"></div>
        <div class="policy-section" v-html="policySections[9]"></div>
        <div class="policy-section" v-html="policySections[10]"></div>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/Generales/NavBar/AppNavbar.vue';
  import AppFooter from '@/components/Generales/Footer/AppFooter.vue';
  
  export default {
    name: 'LegalNotice',
    components: {
      AppNavbar,
      AppFooter
    },
    data() {
      return {
        policySections: [
          `
            <div class="content-block">
              <p>En el presente Aviso Legal, el Usuario, podrá encontrar toda la información relativa a las condiciones legales que definen las relaciones entre los usuarios y el responsable de la página web accesible en la dirección URL https://asociacionaisa.org (en adelante, el sitio web), que Asociación de Intervención Social Atlántico AISA pone a disposición de los usuarios de Internet.</p>
              <p>La utilización del sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. En consecuencia, el usuario del sitio web debe leer atentamente el presente Aviso Legal en cada una de las ocasiones en que se proponga utilizar la web, ya que el texto podría sufrir modificaciones a criterio del titular de la web, o a causa de un cambio legislativo, jurisprudencial o en la práctica empresarial.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">1.- DATOS DEL RESPONSABLE TITULAR DEL SITIO WEB.</h2>
              <p>Nombre del titular: Rayco Padrón Quintana</p>
              <p>Domicilio social: Calle Los Realejos Blq 12 portan 1 vivienda 7</p>
              <p>C.I.F.: G-76779255</p>
              <p>Teléfono de contacto: 629340214</p>
              <p>Correo electrónico: intervencionaisa@gmail.com</p>
              <p>Rayco Padrón Quintana es el responsable del Sitio Web y se compromete a cumplir con todos los requisitos nacionales y europeos que regulan el uso de los datos personales de los usuarios.</p>
              <p>Este Sitio Web garantiza la protección y confidencialidad de los datos personales que nos proporcionen de acuerdo con lo dispuesto en el Reglamento General de Protección de Datos de Carácter Personal (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, en la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales, así como en la Ley de Servicios de la Sociedad de la Información y Comercio Electrónico 34/2002 de 11 de Julio (LSSI-CE)</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">2.- OBJETO.</h2>
              <p>El sitio web facilita a los usuarios del mismo el acceso a información y servicios prestados por Asociación de Intervención Social Atlántico AISA a aquellas personas u organizaciones interesadas en los mismos.</p>
              <p>El acceso y la utilización del Sitio Web atribuye la condición de usuario del Sitio Web (en adelante, el “Usuario”) e implica la aceptación de todas las condiciones incluidas en este Aviso Legal así como de sus modificaciones. La prestación del servicio del Sitio Web tiene una duración limitada al momento en el que el Usuario se encuentre conectado al Sitio Web o a alguno de los servicios que a través del mismo se facilitan. Por tanto, el Usuario debe leer atentamente el presente Aviso Legal en cada una de las ocasiones en que se proponga utilizar el Sitio Web, ya que éste y sus condiciones de uso recogidas en el presente Aviso Legal pueden sufrir modificaciones.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">3.- ACCESO Y UTILIZACIÓN DE LA WEB.</h2>
              <p>3.1.- Carácter gratuito del acceso y utilización de la web. El acceso a la web tiene carácter gratuito para los usuarios de la misma, salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.</p>
              <p>3.2.- Registro de usuarios. Con carácter general el acceso y utilización de la web no exige la previa suscripción o registro de los usuarios de la misma.</p>
              <p>3.3.- Los usuarios garantizan y responden, en cualquier caso, de la exactitud, vigencia y autenticidad de los datos personales facilitados, y se comprometen a mantenerlos debidamente actualizados. El usuario acepta proporcionar información completa y correcta en el formulario de contacto o suscripción.</p>
              <p>En ningún caso se recabarán del menor de edad datos relativos a la situación profesional, económica o a la intimidad de los otros miembros de la familia, sin el consentimiento de éstos. Si eres menor de trece años y has accedido a este sitio web sin avisar a tus padres no debes registrarte como usuario.</p>
              <p>En esta web se respetan y cuidan los datos personales de los usuarios. Como usuario debes saber que tus derechos están garantizados.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">4.- CONTENIDOS DE LA WEB.</h2>
              <p>El idioma utilizado por el titular en la web será el castellano. Asociación de Intervención Social Atlántico AISA no se responsabiliza de la no comprensión o entendimiento del idioma de la web por el usuario, ni de sus consecuencias.</p>
              <p>Asociación de Intervención Social Atlántico AISA podrá modificar los contenidos sin previo aviso, así como suprimir y cambiar éstos dentro de la web, como la forma en que se accede a éstos, sin justificación alguna y libremente, no responsabilizándose de las consecuencias que los mismos puedan ocasionar a los usuarios.</p>
              <p>Se prohíbe el uso de los contenidos de la web para promocionar, contratar o divulgar publicidad o información propia o de terceras personas sin la autorización de Asociación de Intervención Social Atlántico AISA, ni remitir publicidad o información valiéndose para ello de los servicios o información que se ponen a disposición de los usuarios, independientemente de si la utilización es gratuita o no.</p>
              <p>Los enlaces o hiperenlaces que incorporen terceros en sus páginas web, dirigidos a esta web, serán para la apertura de la página web completa, no pudiendo manifestar, directa o indirectamente, indicaciones falsas, inexactas o confusas, ni incurrir en acciones desleales o ilícitas en contra de Asociación de Intervención Social Atlántico AISA.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">5.- MEDIDAS DE SEGURIDAD.</h2>
              <p>Los datos personales comunicados por el usuario podrán ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva a Asociación de Intervención Social Atlántico AISA, asumiendo todas las medidas de índole técnica, organizativa y de seguridad que garanticen la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en las normativas vigentes en materia de protección de datos de carácter personal.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">6.- LIMITACIÓN DE RESPONSABILIDAD.</h2>
              <p>Tanto el acceso a la web como el uso no consentido que pueda efectuarse de la información contenida en la misma es de la exclusiva responsabilidad de quien lo realiza. Asociación de Intervención Social Atlántico AISA no responderá de ninguna consecuencia, daño o perjuicio que pudieran derivarse de dicho acceso o uso. Asociación de Intervención Social Atlántico AISA no se hace responsable de los errores de seguridad, que se puedan producir ni de los daños que puedan causarse al sistema informático del usuario (hardware y software), o a los ficheros o documentos almacenados en el mismo, como consecuencia de:</p>
              <ul style="margin-left:20px">
                <li>la presencia de un virus en el ordenador del usuario que sea utilizado para la conexión a los servicios y contenidos de la web.</li>
                <li>un mal funcionamiento del navegador.</li>
                <li>y/o del uso de versiones no actualizadas del mismo.</li>
              </ul>
              <p>Asociación de Intervención Social Atlántico AISA no se hace responsable de la fiabilidad y rapidez de los hiperenlaces que se incorporen en la web para la apertura de otras. Asociación de Intervención Social Atlántico AISA no garantiza la utilidad de estos enlaces, ni se responsabiliza de los contenidos o servicios a los que pueda acceder el usuario por medio de estos enlaces, ni del buen funcionamiento de estas webs.</p>
              <p>Asociación de Intervención Social Atlántico AISA no será responsable de los virus o demás programas informáticos que deterioren o puedan deteriorar los sistemas o equipos informáticos de los usuarios al acceder a su web u otras webs a las que se haya accedido mediante enlaces de esta web.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">7.- EMPLEO DE LA TECNOLOGÍA "COOKIE".</h2>
              <p>El Sitio Web puede emplear cookies o tecnologías similares que se regirán por lo establecido en la Política de Cookies, accesible en todo momento y respetando la confidencialidad e intimidad del usuario, siendo parte integrante del presente Aviso Legal.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">8.- NAVEGACIÓN.</h2>
              <p>Los servidores de Internet pueden recoger datos no identificables, que puedan incluir, direcciones IP, y otros datos que no pueden ser utilizados para identificar al usuario. Su dirección IP se almacenará en los logs de acceso de forma automática y con la única finalidad de permitir el tránsito por Internet, siendo necesario que su equipo facilite esta dirección IP cuando navega por Internet para que las comunicaciones puedan realizarse. Así mismo, la dirección IP podrá ser utilizada para realizar estadísticas, de manera anonimizada, sobre el número de visitantes de esta web y su procedencia, de forma totalmente transparente a su navegación.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">9.- PROPIEDAD INTELECTUAL E INDUSTRIAL.</h2>
              <p>El usuario conoce y acepta que todos los contenidos y/o cualesquiera otros elementos del sitio web son propiedad de Asociación de Intervención Social Atlántico AISA, y se compromete a respetar los derechos de propiedad intelectual e industrial titularidad de Asociación de Intervención Social Atlántico AISA. Cualquier uso de la web o sus contenidos deberá tener un carácter exclusivamente particular.</p>
              <p>Está reservado exclusivamente a Asociación de Intervención Social Atlántico AISA, cualquier otro uso que suponga la copia, reproducción, distribución, transformación, comunicación pública o cualquier otra acción similar, de todo o parte de los contenidos de la web, por lo que ningún usuario podrá llevar a cabo estas acciones sin la autorización previa y por escrito de Asociación de Intervención Social Atlántico AISA.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">10.- LEGISLACIÓN APLICABLE Y JURISDICCIÓN COMPETENTE.</h2>
              <p>El presente Aviso Legal se interpretará y regirá de conformidad con la legislación española. Asociación de Intervención Social Atlántico AISA y los usuarios, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten al de los juzgados y tribunales del domicilio del usuario para cualquier controversia que pudiera derivarse del acceso o uso de la web. En el caso de que el usuario tenga su domicilio fuera de España, Asociación de Intervención Social Atlántico AISA y el usuario, se someten, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales del domicilio de Santa cruz de tenerife.</p>
            </div>
          `
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .legal-notice {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #d9e8eb;
    border-radius: 8px;
  }
  
  .legal-notice h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .policy-section {
    background-color: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .legal-notice h2 {
    margin-top: 0;
    text-align: center;
  }
  
  .legal-notice ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-left: 20px;
  }
  
  .legal-notice p, .legal-notice li {
    margin-bottom: 10px;
  }
  
  .content-block {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .custom-ul {
    margin-left: 20px;
  }
  </style>
  