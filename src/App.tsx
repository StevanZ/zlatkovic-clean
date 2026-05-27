import {
  BedDouble,
  Car,
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
} from 'lucide-react';
import heroImage from './assets/hero-cleaning.png';
import logo from './assets/zlatkovic-clean-logo.png';

const phoneDisplay = '062 814 0770';
const phoneHref = 'tel:+381628140770';
const whatsappHref = 'https://wa.me/381628140770';

const services = [
  {
    icon: Sofa,
    title: 'Ugaone i trosedi',
    text: 'Dubinsko pranje garnitura, fotelja i taburea uz izvlačenje nečistoća iz vlakana.',
  },
  {
    icon: BedDouble,
    title: 'Dušeci i tepisi',
    text: 'Osvežavanje dušeka, manjih tepiha i staza, uz tretman fleka i neprijatnih mirisa.',
  },
  {
    icon: Car,
    title: 'Auto enterijer',
    text: 'Sedišta, patosnice, tapacir i tekstilni delovi enterijera za čistiji i prijatniji auto.',
  },
];

const steps = [
  'Pregled materijala i dogovor oko tretmana',
  'Predtretman fleka i zaprljanih zona',
  'Dubinsko pranje ekstraktor mašinom',
  'Izvlačenje vlage i brzo provetravanje',
];

const prices = [
  ['Trosed', 'od 3.500 RSD'],
  ['Dvosed', 'od 2.500 RSD'],
  ['Fotelja', 'od 1.200 RSD'],
  ['Auto enterijer', '4.000-8.000 RSD'],
];

export default function App() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Početna">
          <img src={logo} alt="Zlatković Clean logo" />
        </a>

        <nav aria-label="Glavna navigacija">
          <a href="#usluge">Usluge</a>
          <a href="#proces">Proces</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="nav-call" href={phoneHref}>
          <Phone />
          Pozovi
        </a>
      </header>

      <section id="top" className="hero" aria-label="Dubinsko čišćenje">
        <img src={heroImage} alt="" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Uskoro krećemo • Promo termini za prve klijente</p>
          <h1>Profesionalno dubinsko pranje za čistiji i zdraviji dom</h1>
          <p className="hero-text">
            Dubinsko pranje ugaonih garnitura, troseda, dušeka, stolica, tepiha i auto
            enterijera uz profesionalnu opremu i dolazak na adresu.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#kontakt">
              <Phone />
              Pozovi i rezerviši termin
            </a>
            <a className="secondary-button" href="#usluge">
              Pogledaj usluge
            </a>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="Prednosti">
        <div>
          <ShieldCheck />
          <span>Bezbedno za dom, decu i ljubimce</span>
        </div>
        <div>
          <Sparkles />
          <span>Profesionalna Karcher oprema</span>
        </div>
        <div>
          <Star />
          <span>Promo ponuda za prve klijente</span>
        </div>
      </section>

      <section id="usluge" className="section services-section">
        <div className="section-heading">
          <p>Usluge</p>
          <h2>Profesionalno dubinsko pranje nameštaja i enterijera</h2>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proces" className="process-section">
        <div className="process-copy">
          <p>Kako radimo</p>
          <h2>Temeljno čišćenje bez komplikovanja</h2>
          <span>
            Koristimo ekstraktor mašinu koja ubrizgava rastvor za pranje i odmah izvlači
            prljavštinu i višak vlage iz tkanine.
          </span>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step}>
              <CheckCircle2 />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="cene" className="section split">
        <div className="section-heading compact">
          <p>Cenovnik</p>
          <h2>Okvirne cene usluga</h2>
          <span>
            Cene su informativne i mogu zavisiti od stanja nameštaja, veličine i lokacije.
          </span>
        </div>
        <div className="price-list">
          {prices.map(([item, price]) => (
            <div className="price-row" key={item}>
              <span>{item}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div>
          <p>Kontakt</p>
          <h2>Pošaljite fotografiju i dobijte procenu</h2>
          <span>
            Napišite šta treba da se čisti, gde se nalazite i pošaljite sliku ako imate fleke
            koje želite posebno da proverimo.
          </span>
        </div>
        <div className="contact-actions">
          <a className="primary-button" href={phoneHref}>
            <Phone />
            {phoneDisplay}
          </a>
          <a className="whatsapp-button" href={whatsappHref}>
            <Sparkles />
            WhatsApp poruka
          </a>
          <p>
            <Clock />
            Rad na teritoriji grada i okoline
          </p>
        </div>
      </section>

      <footer className="footer">
        <img src={logo} alt="Zlatković Clean logo" />
        <p>Čist dom. Zdrav dom. Srećan dom.</p>
        <a href={phoneHref}>{phoneDisplay}</a>
      </footer>
    </main>
  );
}
