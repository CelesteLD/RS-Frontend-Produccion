<template>
  <div>
    <AppNavbar currentPage="politica-cookies" />
    <div class="cookies-policy">
      <h1>POLÍTICA DE COOKIES</h1>
      <div class="policy-section" v-html="policySections[0]"></div>
      <div class="policy-section" v-html="policySections[1]"></div>
      <div class="policy-section" v-html="policySections[2]"></div>
      <div class="policy-section" v-html="policySections[3]"></div>
      <div class="policy-section" v-html="policySections[4]"></div>
      <div class="policy-section" v-html="policySections[5]"></div>
      <div class="policy-section" v-html="policySections[6]"></div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import AppNavbar from '@/components/Generales/NavBar/AppNavbar.vue';
import AppFooter from '@/components/Generales/Footer/AppFooter.vue';

export default {
  name: 'CookiesPolicy',
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      policySections: [
        `
          <div class="content-block">
            <p>En la web <a href="https://asociacionaisa.org">https://asociacionaisa.org</a> (en adelante, el Sitio Web) utilizamos cookies para facilitar la relación de los visitantes con nuestro contenido y para permitir elaborar estadísticas sobre las visitantes que recibimos.</p>
            <p>Le informamos que podemos utilizar cookies con la finalidad de facilitar su navegación a través del Sitio Web, distinguirle de otros usuarios, proporcionarle una mejor experiencia en el uso del mismo, e identificar problemas para mejorar nuestro Sitio Web.</p>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">¿Qué son las cookies?</h2>
            <p>Se denominan cookies a unos pequeños archivos que se graban en el navegador utilizado por cada visitante de nuestra web para que el servidor pueda recordar la visita de ese usuario con posterioridad cuando vuelva a acceder a nuestros contenidos. Esta información no revela su identidad, ni dato personal alguno, ni accede al contenido almacenado en su pc, pero sí que permite a nuestro sistema identificarle a usted como un usuario determinado que ya visitó la web con anterioridad, visualizó determinadas páginas, etc. y además permite guardar sus preferencias personales e información técnica.</p>
            <p>En cumplimiento de la Directiva 2009/136/CE, desarrollada en nuestro ordenamiento por el apartado segundo del artículo 22 de la LSSI, siguiendo las directrices de la AEPD, procedemos a informarle detalladamente del uso que se realiza en nuestra web.</p>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">Tipos de cookies según la entidad que las gestiona</h2>
            <ul style="margin-left:20px">
              <li>Cookies propias: Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor.</li>
              <li>Cookies de terceros: Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos.</li>
            </ul>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">Tipos de cookies según el plazo de tiempo que permanecen activas</h2>
            <ul style="margin-left:20px">
              <li>Cookies de sesión: Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.</li>
              <li>Cookies persistentes: Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
            </ul>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">Tipos de cookies según su finalidad</h2>
            <ul style="margin-left:20px">
              <li>Cookies técnicas: Aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
              <li>Cookies de personalización: Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario.</li>
              <li>Cookies publicitarias: Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web.</li>
              <li>Cookies de publicidad comportamental: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
              <li>Cookies de análisis: Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</li>
            </ul>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">Gestión de cookies</h2>
            <p>Actualmente, la mayoría de los navegadores vienen configurados por defecto para bloquear la instalación de cookies de publicidad o terceros en su equipo. El usuario puede ampliar las restricciones de origen, impidiendo la entrada de cualquier tipo de cookie, o eliminar dichas restricciones, aceptando la entrada de cualquier tipo de cookies. Si está interesado en admitir cookies de publicidad o de terceros, podrá configurar su navegador a tal fin.</p>
            <p>La aceptación realizada por el usuario, haciendo click en el botón de ACEPTAR mostrado en la información inicial sobre cookies, implica que está consintiendo expresamente al responsable para su utilización, pudiendo ejercer sus derechos y revocar su consentimiento en cualquier momento, a través de solicitud a Asociación de Intervención Social Atlántico AISA.</p>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">Configuración de cookies en navegadores</h2>
            <p>Para permitir, conocer, bloquear o eliminar las cookies instaladas en su equipo puede hacerlo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
            <ul style="margin-left:20px">
              <li><strong>Internet Explorer:</strong> Herramientas -> Opciones de Internet -> Privacidad -> Configuración. Para más información, puede consultar el soporte de Microsoft o la Ayuda del navegador.</li>
              <li><strong>Firefox:</strong> Herramientas -> Opciones -> Privacidad -> Historial -> Configuración Personalizada. Para más información, puede consultar el soporte de Mozilla o la Ayuda del navegador.</li>
              <li><strong>Chrome:</strong> Configuración -> Mostrar opciones avanzadas -> Privacidad -> Configuración de contenido. Para más información, puede consultar el soporte de Google o la Ayuda del navegador.</li>
              <li><strong>Safari:</strong> Preferencias -> Seguridad. Para más información, puede consultar el soporte de Apple o la Ayuda del navegador.</li>
            </ul>
          </div>
        `,
        `
          <div class="content-block">
            <h2 style="text-align:center">Actualización de la política de cookies</h2>
            <p>Es posible que actualicemos la Política de Cookies de nuestro Sitio Web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro Sitio Web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.</p>
          </div>
        `
      ]
    };
  }
};
</script>

<style scoped>
.cookies-policy {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #d9e8eb;
  border-radius: 8px;
}

.cookies-policy h1 {
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

.cookies-policy h2 {
  margin-top: 0;
}

.cookies-policy ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-left: 20px;
}

.cookies-policy p, .cookies-policy li {
  margin-bottom: 10px;
}

.content-block {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
</style>
