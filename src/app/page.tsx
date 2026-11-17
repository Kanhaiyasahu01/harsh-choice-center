import Image from "next/image";
import { BottomDock } from "@/components/BottomDock";
import {
  business,
  features,
  serviceCategories,
  services,
} from "@/lib/business";
import { quickActions } from "@/lib/quick-actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InternetCafe"],
  "@id": `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://harshchoicecenter.vercel.app"}/#business`,
  name: business.name,
  alternateName: business.nameHi,
  description:
    "हर्ष चॉइस सेंटर, लारीपारा — आधार अपडेट, पैन, वोटर आईडी, प्रमाण पत्र, बिल भुगतान, प्रिंटिंग, मोबाइल रिपेयर और सभी चॉइस सेंटर डिजिटल सेवाएँ।",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://harshchoicecenter.vercel.app",
  telephone: business.phoneTel,
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  priceRange: "₹",
  knowsAbout: services.map((service) => service.titleEn),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: business.hours.days.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens: business.hours.opens,
    closes: business.hours.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  areaServed: {
    "@type": "Place",
    name: "Laripara, Chherka B, Chhattisgarh",
  },
  hasMap: business.mapsUrl,
  sameAs: [business.mapsUrl],
};

const toneClass = {
  leaf: "bg-[var(--mist)] text-[var(--leaf)]",
  ink: "bg-[var(--ink)]/8 text-[var(--ink)]",
  amber: "bg-[var(--amber)]/20 text-[#8a6500]",
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="app-frame">
        <header className="app-header safe-top text-white">
          <div className="flex h-14 items-center justify-between gap-3 px-4">
            <div className="min-w-0">
              <p className="truncate font-[family-name:var(--font-syne)] text-[15px] font-bold leading-tight">
                {business.name}
              </p>
              <p className="truncate font-[family-name:var(--font-hindi)] text-[11px] text-white/65">
                {business.nameHi} · खुला है
              </p>
            </div>
            <a
              href={`tel:${business.phoneTel}`}
              className="shrink-0 rounded-full bg-[var(--leaf-bright)] px-3.5 py-2 text-xs font-bold text-[var(--ink)] active:scale-95"
            >
              कॉल
            </a>
          </div>
        </header>

        <main className="app-main">
          <section id="top" className="relative overflow-hidden bg-[var(--ink)] text-white">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="डिजिटल और दस्तावेज़ सेवाओं का प्रतिनिधित्व"
                fill
                priority
                className="object-cover opacity-35"
                sizes="430px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,18,0.55)_0%,rgba(8,22,18,0.92)_78%)]" />
            </div>

            <div className="relative z-10 px-4 pb-5 pt-5">
              <div className="animate-rise inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-[var(--leaf-bright)] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--leaf-bright)]" />
                रोज़ 6 बजे – 8 बजे · लारीपारा
              </div>

              <h1 className="animate-rise-delay-1 mt-3 font-[family-name:var(--font-hindi)] text-[1.85rem] font-bold leading-tight tracking-tight">
                {business.nameHi}
              </h1>
              <p className="animate-rise-delay-1 mt-1 font-[family-name:var(--font-syne)] text-sm font-semibold text-white/70">
                Harsh Choice Center
              </p>
              <p className="animate-rise-delay-2 mt-3 font-[family-name:var(--font-hindi)] text-[15px] leading-relaxed text-white/80">
                {business.tagline}
              </p>

              <div className="animate-rise-delay-3 mt-4 grid grid-cols-1 gap-2">
                <a
                  href={`tel:${business.phoneTel}`}
                  className="touch-row flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <div>
                    <p className="font-[family-name:var(--font-hindi)] text-[11px] text-white/55">
                      फोन
                    </p>
                    <p className="text-base font-bold">{business.phoneDisplay}</p>
                  </div>
                  <span className="rounded-full bg-[var(--leaf-bright)] px-3 py-1.5 text-xs font-bold text-[var(--ink)]">
                    टैप करके कॉल
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-white/8 px-3.5 py-3">
                    <p className="font-[family-name:var(--font-hindi)] text-[11px] text-white/55">
                      समय
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm font-bold leading-snug">
                      रोज़ सुबह 6 – रात 8
                    </p>
                  </div>
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-row rounded-2xl bg-white/8 px-3.5 py-3"
                  >
                    <p className="font-[family-name:var(--font-hindi)] text-[11px] text-white/55">
                      पता
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm font-bold leading-snug">
                      45 मेन रोड, 495113
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 pt-5" aria-label="त्वरित सेवाएँ">
            <div className="mb-3 flex items-end justify-between">
              <h2 className="font-[family-name:var(--font-hindi)] text-lg font-bold text-[var(--ink)]">
                तुरंत चुनें
              </h2>
              <a
                href="#services"
                className="text-xs font-semibold text-[var(--leaf)]"
              >
                सभी सेवाएँ
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {quickActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`touch-row flex min-h-[4.5rem] flex-col justify-between rounded-2xl p-3.5 ${toneClass[action.tone]}`}
                >
                  <span className="font-[family-name:var(--font-hindi)] text-[15px] font-bold leading-snug">
                    {action.label}
                  </span>
                  <span className="text-[11px] font-semibold opacity-60">खोलें →</span>
                </a>
              ))}
            </div>
          </section>

          <section id="services" className="px-4 pt-8">
            <h2 className="font-[family-name:var(--font-hindi)] text-xl font-bold text-[var(--ink)]">
              सभी सेवाएँ
            </h2>
            <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm text-[var(--ink)]/60">
              चॉइस सेंटर की पूरी लिस्ट — श्रेणी चुनकर देखें
            </p>

            <div className="chip-scroll mt-4">
              {serviceCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[var(--line)] bg-white px-3.5 py-2 font-[family-name:var(--font-hindi)] text-xs font-semibold text-[var(--ink)] active:bg-[var(--mist)]"
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div className="mt-5 space-y-5">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-24px_rgba(11,26,22,0.55)]"
                >
                  <div className="border-b border-[var(--line)] bg-[var(--sand)] px-4 py-3">
                    <h3 className="font-[family-name:var(--font-hindi)] text-base font-bold text-[var(--ink)]">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-[var(--ink)]/45">{category.titleEn}</p>
                  </div>
                  <ul>
                    {category.items.map((service, index) => (
                      <li
                        key={service.title}
                        className={`touch-row px-4 py-3.5 ${
                          index !== category.items.length - 1
                            ? "border-b border-[var(--line)]"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-[family-name:var(--font-hindi)] text-[15px] font-bold text-[var(--ink)]">
                              {service.title}
                            </p>
                            <p className="mt-0.5 text-[11px] font-medium text-[var(--leaf)]">
                              {service.titleEn}
                            </p>
                            <p className="mt-1.5 font-[family-name:var(--font-hindi)] text-[13px] leading-relaxed text-[var(--ink)]/60">
                              {service.description}
                            </p>
                          </div>
                          <a
                            href={`tel:${business.phoneTel}`}
                            className="mt-0.5 shrink-0 rounded-full bg-[var(--mist)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--leaf)]"
                          >
                            पूछें
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="why-us" className="px-4 pt-8">
            <h2 className="font-[family-name:var(--font-hindi)] text-xl font-bold text-[var(--ink)]">
              क्यों आएँ
            </h2>
            <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm text-[var(--ink)]/60">
              हाईवे पर भरोसेमंद चॉइस सेंटर
            </p>

            <div className="h-scroll mt-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-3xl bg-[var(--ink-soft)] p-4 text-white"
                >
                  <h3 className="font-[family-name:var(--font-hindi)] text-base font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-white/40">{feature.titleEn}</p>
                  <p className="mt-3 font-[family-name:var(--font-hindi)] text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-3xl bg-[var(--mist)] px-4 py-4">
              <p className="font-[family-name:var(--font-hindi)] text-sm font-bold text-[var(--ink)]">
                Google रेटिंग {business.rating.value}★ · {business.rating.count} रिव्यू
              </p>
              <p className="mt-1 font-[family-name:var(--font-hindi)] text-xs text-[var(--ink)]/60">
                आधार, फॉर्म और डिजिटल काम के लिए स्थानीय भरोसा
              </p>
            </div>
          </section>

          <section id="visit" className="px-4 pt-8">
            <h2 className="font-[family-name:var(--font-hindi)] text-xl font-bold text-[var(--ink)]">
              संपर्क व लोकेशन
            </h2>
            <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm text-[var(--ink)]/60">
              लारीपारा में हमसे मिलें
            </p>

            <div className="mt-4 overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-24px_rgba(11,26,22,0.55)]">
              <a
                href={`tel:${business.phoneTel}`}
                className="touch-row flex items-center justify-between border-b border-[var(--line)] px-4 py-4"
              >
                <div>
                  <p className="font-[family-name:var(--font-hindi)] text-[11px] text-[var(--ink)]/45">
                    फोन
                  </p>
                  <p className="text-base font-bold text-[var(--ink)]">
                    {business.phoneDisplay}
                  </p>
                </div>
                <span className="text-xs font-bold text-[var(--leaf)]">कॉल →</span>
              </a>

              <div className="border-b border-[var(--line)] px-4 py-4">
                <p className="font-[family-name:var(--font-hindi)] text-[11px] text-[var(--ink)]/45">
                  समय
                </p>
                <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm font-bold text-[var(--ink)]">
                  {business.hours.labelHi}
                </p>
              </div>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-row block border-b border-[var(--line)] px-4 py-4"
              >
                <p className="font-[family-name:var(--font-hindi)] text-[11px] text-[var(--ink)]/45">
                  पता
                </p>
                <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm font-semibold leading-relaxed text-[var(--ink)]">
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </p>
                <p className="mt-2 text-xs font-bold text-[var(--leaf)]">
                  Maps में खोलें →
                </p>
              </a>

              <div className="px-4 py-4">
                <p className="font-[family-name:var(--font-hindi)] text-[11px] text-[var(--ink)]/45">
                  श्रेणी
                </p>
                <p className="mt-1 font-[family-name:var(--font-hindi)] text-sm font-semibold text-[var(--ink)]">
                  {business.categoryHi}
                </p>
              </div>
            </div>

            <div className="mt-3 overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
              <iframe
                title="Harsh Choice Center map"
                src={business.mapsEmbed}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>

          <footer className="px-4 pb-4 pt-8 text-[var(--ink)]/55">
            <div className="rounded-3xl bg-[var(--ink)] px-4 py-5 text-white">
              <p className="font-[family-name:var(--font-syne)] text-sm font-bold">
                {business.name}
              </p>
              <p className="mt-1 font-[family-name:var(--font-hindi)] text-xs text-white/65">
                {business.address.line1}, {business.address.line2}
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-white/45">
                Google Business Profile के लिए आधिकारिक वेबसाइट। नाम, फोन, पता और समय
                लिस्टिंग से मेल खाते हैं।
              </p>
            </div>
          </footer>
        </main>

        <BottomDock />
      </div>
    </>
  );
}
