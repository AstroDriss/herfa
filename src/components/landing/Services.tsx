const Services = () => {
  return (
    <section className="section" id="services">
      <h2 className="font-bold my-4">Services clés</h2>
      <div className="services-grid">
        <div className="service-item">
          <img src="/images/11.jpg" alt="" />
          <div className="service-content">
            <p className="service-count">01</p>
            <div>
              <h3 className="font-bold my-[1em]">Recherche Facile</h3>
              <p className="my-[1em]">
                Trouvez rapidement un artisan qualifié selon votre besoin :
                spécialité, région, budget, délais…
              </p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <img src="/images/8.jpg" alt="" />
          <div className="service-content">
            <p className="service-count">02</p>
            <div>
              <h3 className="font-bold my-[1em]">Profil Complet</h3>
              <p className="my-[1em]">
                Chaque artisan dispose d&apos;un profil complet : description,
                photos de projets réalisés, avis clients et niveaux de
                disponibilité.
              </p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <img src="/images/12.jpg" alt="" />
          <div className="service-content">
            <p className="service-count">03</p>
            <div>
              <h3 className="font-bold my-[1em]">Support Artisans</h3>
              <p className="my-[1em]">
                Accompagnement digital et accès à de nouveaux clients.
              </p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <img src="/images/13.jpg" alt="" />
          <div className="service-content">
            <p className="service-count">04</p>
            <div>
              <h3 className="font-bold my-[1em]">Messagerie Directe</h3>
              <p className="my-[1em]">
                Discutez facilement avec les artisans depuis la plateforme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
