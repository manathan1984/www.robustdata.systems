import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robust Data Systems — Data systems. Dependable.",
  description: "Independent consulting for storage engines and data stores, focused on performance, tunability, self-tuning systems, and indexing.",
};

const services = [
  { number: "01", title: "Storage engine architecture", copy: "Evaluate or design storage internals around the latency, throughput, memory, durability, and cost profile your application requires." },
  { number: "02", title: "Performance & tunability", copy: "Benchmark, diagnose, and tune systems while making their workload-dependent tradeoffs and control knobs explicit." },
  { number: "03", title: "Indexing & access methods", copy: "Choose and shape LSM trees, B+ trees, bitmap indexes, Bloom filters, and data layouts to serve real access patterns." },
  { number: "04", title: "Privacy & observability", copy: "Design retention and deletion guarantees into the storage layer—and the instrumentation needed to measure, audit, and verify system behavior." },
  { number: "05", title: "Adaptive data systems", copy: "Design self-tuning capabilities that respond deliberately to changing workloads, data properties, and hardware." },
];

const principles = [
  ["Workload before mechanism", "We begin with the application, its access patterns, and its constraints—not a favorite technology."],
  ["Tradeoffs, measured", "We quantify the cost of reads, writes, memory, space, and maintenance before recommending a design."],
  ["Adaptation where it pays", "We add tunability and self-tuning only where changing conditions make it valuable."],
  ["Make guarantees observable", "Performance, retention, and deletion behavior should be measurable in operation—not assumed from design."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Robust Data Systems, home"><span className="brandMark" aria-hidden="true">R</span><span>Robust Data Systems</span></a>
        <div className="navLinks"><a href="#services">Expertise</a><a href="#approach">Approach</a><a href="#experience">Experience</a><a className="navCta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a></div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> 18 years in data systems</div>
        <h1>Data systems.<br /><em>Dependable.</em></h1>
        <div className="heroFoot">
          <p>Independent expertise in storage engines and data stores—performance, tunability, self-tuning, and indexing aligned with application needs.</p>
          <a className="circleLink" href="#services" aria-label="Explore our services"><span>Explore</span><span aria-hidden="true">↓</span></a>
        </div>
        <div className="signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </section>

      <section className="intro" aria-label="About Robust Data Systems">
        <p className="sectionLabel">The core idea</p>
        <p className="statement">A data store succeeds when its internal tradeoffs match the workload above it, the hardware below it, and the guarantees it must provide throughout the data lifecycle.</p>
      </section>

      <section className="services" id="services">
        <div className="sectionHead"><p className="sectionLabel">Where we go deep</p><h2>Systems expertise.<br />Applied precisely.</h2></div>
        <div className="serviceList">
          {services.map((service) => <article className="service" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p></article>)}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approachTitle"><p className="sectionLabel light">Our approach</p><h2>Rigorous thinking.<br /><em>Practical delivery.</em></h2></div>
        <div className="principles">
          {principles.map(([title, copy], index) => <div className="principle" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experienceIntro">
          <p className="sectionLabel">Research-backed practice</p>
          <h2>Research behind<br /><em>the practice.</em></h2>
        </div>
        <div className="credentials">
          <article><span>Research focus</span><h3>Storage engines, data structures, data stewardship, and hardware/software co-design</h3></article>
          <article><span>Recognition</span><h3>Multiple NSF awards and industry research grants</h3></article>
          <article><span>Perspective</span><h3>Academic and industry research across Boston University, Harvard, EPFL, Meta, and IBM</h3></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel">Start a conversation</p><h2>Have a hard data problem?</h2>
        <a href="mailto:info@robustdata.systems">Tell us about it <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top"><span className="brandMark" aria-hidden="true">R</span><span>Robust Data Systems</span></a>
        <p>Data systems · Storage engines · Performance · Indexing</p><p>© {new Date().getFullYear()} Robust Data Systems LLC</p>
      </footer>
    </main>
  );
}
