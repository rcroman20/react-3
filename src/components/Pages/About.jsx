import React from 'react';
import './Pages.css'

function About() {
  return (
    <section className='about' id="about">
      <h2>Acerca de Tracker Budget</h2>
      <p>
        <strong>Tracker Budget: Tu solución integral para la gestión financiera.</strong>
        <br />
        ¿Estás listo para tomar el control de tus finanzas personales de manera eficiente y sin complicaciones? Tracker Budget es la herramienta ideal para ti. Con una interfaz intuitiva y funcionalidades personalizables, podrás gestionar tus ingresos y egresos de forma sencilla y efectiva.
      </p>
      <br />
      <p>
        <strong>Características destacadas:</strong>
        <ul>
          <li>Categorización automática de gastos</li>
          <li>Integración directa con tus cuentas bancarias</li>
          <li>Generación de reportes financieros personalizados</li>
          <li>Reportes mensuales detallados</li>
        </ul>
      </p>
      <br />
      <p>
        <strong>¿Por qué elegir Tracker Budget?</strong> Porque creemos firmemente que la administración de tus finanzas debe ser sencilla, transparente y accesible. Nuestra aplicación te ofrece las herramientas necesarias para gestionar tu dinero de manera inteligente, alcanzar tus metas financieras y vivir con mayor seguridad financiera.
      </p>
    </section>
  );
}

export default About;
