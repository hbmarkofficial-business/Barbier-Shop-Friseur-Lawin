import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Aken | Barbier Shop Friseur Lawin</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbier Shop Friseur Lawin in Aken für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Aken, Friseursalon"
        />
        <link rel="canonical" href="https://viphaircut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Barbier Shop Friseur Lawin | Premium Barbershop Aken" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Aken."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viphaircut.de" />
        <meta property="og:image" content="https://viphaircut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barbier Shop Friseur Lawin | Premium Barbershop Aken" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://viphaircut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Barbier Shop Friseur Lawin",
            "image": "https://viphaircut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Köthener Str. 46",
              "addressLocality": "Aken",
              "postalCode": "06385",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.8519",
              "longitude": "12.0463"
            },
            "url": "https://viphaircut.de",
            "telephone": "+49 1577 3667656",
            "openingHours": "Mo-Fr 09:30-18:30, Sa 09:30-16:30",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/lawin",
              "https://www.instagram.com/lawin"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

