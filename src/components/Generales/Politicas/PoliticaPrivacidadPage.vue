<template>
    <div>
      <AppNavbar currentPage="politica-privacidad" />
      <div class="privacy-policy">
        <h1>POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h1>
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
    name: 'PrivacyPolicy',
    components: {
      AppNavbar,
      AppFooter
    },
    data() {
      return {
        policySections: [
          `
            <div class="content-block">
              <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales, por el que se deroga la directiva 95/46/CE (en adelante, RGPD), de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y comercio electrónico (en adelante, LSSI-CE) y de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (en adelante, LOPDGDD), Asociación de Intervención Social Atlántico AISA garantiza la protección y confidencialidad de los datos personales, de cualquier tipo que nos proporcionen nuestros clientes, de acuerdo con lo dispuesto en el Reglamento General de Protección de Datos de Carácter Personal.</p>
              <p>Los datos facilitados serán tratados en los términos establecidos en el RGPD, en ese sentido Asociación de Intervención Social Atlántico AISA ha adoptado los niveles de protección que legalmente se exigen, y ha instalado todas las medidas técnicas a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado por terceros, expuestos a continuación. No obstante, el usuario debe ser consciente de que las medidas de seguridad en Internet no son inexpugnables.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Responsable del tratamiento</h2>
              <p>Denominación: Asociación de Intervención Social Atlántico AISA</p>
              <p>CIF: G-76779255</p>
              <p>Dirección: Calle Los Realejos Blq 12 portan 1 vivienda 7</p>
              <p>Teléfono: 629340214</p>
              <p>Correo electrónico: intervencionaisa@gmail.com</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Finalidad del tratamiento</h2>
              <p>Todos los datos facilitados por nuestros clientes y/o visitantes en la web de Asociación de Intervención Social Atlántico AISA o a su personal, serán incluidos en registro de actividades de tratamiento de datos de carácter personal, creado y mantenido bajo la resposabilidad de Asociación de Intervención Social Atlántico AISA, imprescindibles para prestar los servicios solicitados por los usuarios, o para resolver las dudas o cuestiones planteadas por nuestros visitantes. Nuestra política es no elaborar perfiles sobre los usuarios de nuestros servicios.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Legitimidad del tratamiento</h2>
               <ul style="margin-left:20px">
                <li>Relación contractual: Es la que aplica cuando compra uno de nuestros productos o contrata alguno de nuestros servicios.</li>
                <li>Interés legítimo: Para atender a las consultas y reclamaciones que nos plantee y para gestionar el cobro de las cantidades adeudadas.</li>
                <li>Su consentimiento: Si es usuario de nuestra web, mediante la marcación de la casilla que figura en el formulario de contacto, nos autoriza a que le remitamos las comunicaciones necesarias para dar respuesta a la consulta o solicitud de información planteada.</li>
              </ul>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Destinatarios</h2>
              <p>No cedemos sus datos personales a nadie, a excepción de aquellas entidades públicas o privadas a las cuales estemos obligados a facilitar sus datos personales con motivo del cumplimiento de alguna ley. Por poner un ejemplo, la Ley Tributaria obliga a facilitar a la Agencia Tributaria determinada información sobre operaciones económicas que superen una determinada cantidad.</p>
              <p>En el caso de que, al margen de los supuestos comentados, necesitemos dar a conocer su información personal a otras entidades, le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir a este respecto.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Comunicación</h2>
              <p>No realizaremos transferencias internacionales de sus datos personales para ninguna de las finalidades indicadas.</p>
              <p>(NOTA INTERNA: ESTE PÁRRAFO SE HA DE CAMBIAR POR EL RESPONSABLE SI REALMENTE SE PRODUCEN TRANSFERENCIAS INTERNACIONALES. TE RECOMENDAMOS SOLICITAR ASESORAMIENTO SI NO SABES CÓMO REFLEJARLO CORRECTAMENTE PARA CUMPLIR CON LA NORMATIVA)</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Conservación</h2>
              <p>Solo conservaremos sus datos personales durante el tiempo que resulte necesario para lograr los fines para los que fueron recabados. A la hora de determinar el oportuno periodo de conservación, examinamos los riesgos que conlleva el tratamiento, así como nuestras obligaciones contractuales, legales y normativas, las políticas internas de conservación de datos y nuestros intereses de negocio legítimos descritos en el presente Aviso de Privacidad y Política de Cookies.</p>
              <p>En este sentido, Asociación de Intervención Social Atlántico AISA conservará los datos personales una vez terminada su relación con Ud., debidamente bloqueados, durante el plazo de prescripción de las acciones que pudieran derivarse de la relación mantenida con el interesado.</p>
              <p>Una vez bloqueados, sus datos resultarán inaccesibles para Asociación de Intervención Social Atlántico AISA, y no serán tratados excepto para su puesta a disposición a las Administraciones públicas, Jueces y Tribunales, para la atención de las posibles responsabilidades nacidas de los tratamientos, así como para el ejercicio y defensa de reclamaciones ante la Agencia Española de Protección de Datos.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Seguridad</h2>
              <p>Empleamos todos los esfuerzos razonables para mantener la confidencialidad de la información personal que se trate en nuestros sistemas. Mantenemos estrictos niveles de seguridad para proteger los datos de carácter personal que procesamos frente a pérdidas fortuitas y a accesos, tratamientos o revelaciones no autorizados, habida cuenta del estado de la tecnología, la naturaleza y los riesgos a que están expuestos los datos. No obstante, no podemos responsabilizarnos del uso que Ud. haga de los datos (incluido usuario y contraseña) que utilice en nuestra web. Nuestro personal sigue estrictas normas de privacidad y en el caso de que contratemos a terceros para prestar servicios de soporte, les exigimos que acaten las mismas normas y nos permitan auditarles para verificar su cumplimiento.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Sus derechos</h2>
              <p>Le informamos que podrá ejercer los siguientes derechos:</p>
               <ul style="margin-left:20px">
                <li>Derecho de acceso a sus datos personales, para saber cuáles están siendo objeto de tratamiento y las operaciones de tratamiento llevadas a cabo con ellos;</li>
                <li>Derecho de rectificación de cualquier dato personal inexacto;</li>
                <li>Derecho de supresión de sus datos personales, cuando esto sea posible (por ejemplo, por imperativo legal);</li>
                <li>Derecho de limitación del tratamiento de sus datos personales cuando la exactitud, la legalidad o la necesidad del tratamiento de los datos resulte dudosa, en cuyo caso, podremos conservarlos para el ejercicio o la defensa de reclamaciones.</li>
                <li>Derecho de oposición al tratamiento de sus datos personales, cuando la base legal que nos habilite para su tratamiento de las indicadas sea nuestro interés legítimo. «Nombre_Empresa» dejará de tratar tus datos salvo que tenga un interés legítimo o sea necesario para la defensa de reclamaciones.</li>
                <li>Derecho a la portabilidad de sus datos, cuando la base legal que nos habilite para su tratamiento sea la existencia de una relación contractual o su consentimiento.</li>
                <li>Derecho a revocar el consentimiento otorgado a Asociación de Intervención Social Atlántico AISA</li>
              </ul>
              <p>Para ejercitar sus derechos, puede hacerlo de manera gratuita y en cualquier momento contactando con nosotros en la dirección Calle Los Realejos Blq 12 portan 1 vivienda 7, adjuntando copia de su DNI.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Tutela de derechos</h2>
              <p>En caso de que entienda que sus derechos han sido desatendidos por nuestra entidad, puede formular una reclamación en la Agencia Española de Protección de Datos, a través de alguno de los medios siguientes:</p>
               <ul style="margin-left:20px">
                <li>Sede electrónica: <a href="https://www.aepd.es">https://www.aepd.es</a></li>
                <li>Correo postal: Agencia Española de Protección de Datos, C/ Jorge Juan, 6, 28001, Madrid</li>
                <li>Teléfono: 901.100.099 y 912.663.517</li>
              </ul>
              <p>Formular una reclamación en la Agencia Española de Protección de Datos no conlleva ningún coste y no es necesaria la asistencia de abogado ni procurador.</p>
            </div>
          `,
          `
            <div class="content-block">
              <h2 style="text-align:center">Actualizaciones</h2>
              <p>Asociación de Intervención Social Atlántico AISA se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales que puedan afectar el cumplimiento de la misma.</p>
            </div>
          `
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .privacy-policy {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #d9e8eb;
    border-radius: 8px;
  }
  
  .privacy-policy h1 {
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
  
  .privacy-policy h2 {
    margin-top: 0;
  }
  
  .privacy-policy ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-left: 20px;
  }
  
  .privacy-policy p, .privacy-policy li {
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
  