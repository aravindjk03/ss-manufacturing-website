import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Users, Scale, CheckCircle, Award, TrendingDown } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function ProgressBar({ value, label, start }: { value: number; label: string; start: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (start) setTimeout(() => setWidth(value), 100);
  }, [start, value]);
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm font-medium mb-2">
        <span className="text-white">{label}</span>
        <span className="text-white font-bold">{value}%</span>
      </div>
      <div className="h-1.5 bg-[#0d1f3c]/10">
        <div
          className="h-full bg-accent transition-all duration-1500 ease-out"
          style={{ width: `${width}%`, transition: "width 1.5s ease-out" }}
        />
      </div>
    </div>
  );
}

function ESGStat({ value, label, inView }: { value: string; label: string; inView: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-8 border border-white/10 bg-[#0d1f3c]/5"
    >
      <div className="text-4xl font-black text-white mb-2">{value}</div>
      <div className="text-sm text-gray-300 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function ESGPage() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });
  const progressRef = useRef(null);
  const progressInView = useInView(progressRef, { once: true });

  return (
    <PageLayout>
      <SEO
        title="ESG & Sustainability"
        description="SSMPL's commitment to Environmental, Social, and Governance excellence — ISO 14001, ISO 45001, ISO 50001 certified operations with measurable progress on emissions, safety, and ethical governance."
        path="/esg"
        keywords="ESG manufacturing India, sustainable automotive, ISO 14001, ISO 45001, ISO 50001, corporate governance, sustainability report"
      />
      {/* HERO */}
      <section className="bg-[#0A1628] pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Responsibility & Impact</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">ESG & Sustainability</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Environmental stewardship, social responsibility, and ethical governance — embedded in every decision we make at SS Manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Our ESG Framework</div>
            <h2 className="text-3xl md:text-4xl font-black text-primary">The Three Pillars of Our Commitment</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Environmental */}
            <motion.div variants={fadeUp} className="border-t-4 border-green-600 bg-card border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-50 border border-green-200 flex items-center justify-center mb-6">
                <Leaf size={26} className="text-green-700" />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-green-700 mb-2">Environmental</div>
              <h3 className="text-2xl font-black text-primary mb-4">Planet First</h3>
              <ul className="space-y-4">
                {[
                  { label: "Waste Reduction", desc: "Structured programmes to minimise production waste and maximise material utilisation." },
                  { label: "Responsible Material Usage", desc: "Sourcing materials from suppliers with verified environmental credentials." },
                  { label: "Pollution Prevention", desc: "Operational controls to prevent air, water, and soil contamination." },
                  { label: "Energy Efficiency", desc: "Monitoring and reducing energy consumption per unit of output." },
                  { label: "Sustainable Operations", desc: "Long-term operational planning aligned with environmental sustainability goals." },
                ].map((item) => (
                  <li key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="font-bold text-sm text-primary mb-1">{item.label}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="border-t-4 border-blue-600 bg-card border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <Users size={26} className="text-blue-700" />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Social</div>
              <h3 className="text-2xl font-black text-primary mb-4">People First</h3>
              <ul className="space-y-4">
                {[
                  { label: "Employee Safety", desc: "Comprehensive health and safety programmes targeting zero incidents." },
                  { label: "Worker Well-being", desc: "Fair wages, safe conditions, and support for employee livelihoods." },
                  { label: "Training & Development", desc: "Continuous skills development and upskilling initiatives for all employees." },
                  { label: "Ethical Workplace", desc: "Anti-discrimination policies and a zero-tolerance approach to workplace misconduct." },
                  { label: "Diversity & Inclusion", desc: "Building a diverse workforce that reflects the communities we operate in." },
                ].map((item) => (
                  <li key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="font-bold text-sm text-primary mb-1">{item.label}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Governance */}
            <motion.div variants={fadeUp} className="border-t-4 border-purple-600 bg-card border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-50 border border-purple-200 flex items-center justify-center mb-6">
                <Scale size={26} className="text-purple-700" />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Governance</div>
              <h3 className="text-2xl font-black text-primary mb-4">Ethics First</h3>
              <ul className="space-y-4">
                {[
                  { label: "Ethical Business Practices", desc: "A culture of integrity where every decision is made with accountability." },
                  { label: "Compliance", desc: "Full compliance with all applicable national and international regulations." },
                  { label: "Transparency", desc: "Open communication with customers, suppliers, and stakeholders." },
                  { label: "Supplier Responsibility", desc: "Holding our supply chain to the same ethical standards we uphold internally." },
                  { label: "Corporate Accountability", desc: "Clear ownership of decisions and outcomes at every level of the organisation." },
                ].map((item) => (
                  <li key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="font-bold text-sm text-primary mb-1">{item.label}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Actions</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our ESG Commitments</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0d1f3c]/10"
          >
            {[
              { icon: Leaf, title: "Sustainable Manufacturing", desc: "Integrating environmental standards into every production process and facility operation." },
              { icon: TrendingDown, title: "Responsible Supply Chain", desc: "Working exclusively with suppliers who meet our environmental and ethical procurement standards." },
              { icon: Users, title: "Employee Welfare", desc: "Comprehensive employee wellness, safety, and professional growth programmes." },
              { icon: Scale, title: "Compliance & Ethics", desc: "Maintaining full regulatory compliance and an uncompromising ethical culture across all functions." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-[#0d1f3c] p-8 group hover:bg-[#0f2347] transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-base mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROGRESS / STATS */}
      <section ref={progressRef} className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Progress Metrics</div>
              <h2 className="text-3xl font-black text-white mb-8">Measuring What Matters</h2>
              <ProgressBar value={30} label="Waste Reduction Target" start={progressInView} />
              <ProgressBar value={25} label="Renewable Energy Integration" start={progressInView} />
              <ProgressBar value={100} label="Ethical Supplier Coverage" start={progressInView} />
              <ProgressBar value={85} label="Employee Safety Training Completion" start={progressInView} />
              <ProgressBar value={95} label="Regulatory Compliance Score" start={progressInView} />
            </motion.div>
            <div ref={statsRef}>
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                <ESGStat value="30%" label="Waste Reduction" inView={inView} />
                <ESGStat value="25%" label="Energy Goal" inView={inView} />
                <ESGStat value="0" label="Safety Incidents" inView={inView} />
                <ESGStat value="100%" label="Ethical Suppliers" inView={inView} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Credentials</div>
            <h2 className="text-3xl md:text-4xl font-black text-primary">Certifications & Compliance</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              We are actively working towards obtaining and maintaining the following certifications as part of our quality and sustainability roadmap.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: "ISO 9001:2015", sub: "Quality Management System", status: "In Progress", color: "border-yellow-400 bg-yellow-50 text-yellow-700" },
              { label: "ISO 14001:2015", sub: "Environmental Management", status: "In Progress", color: "border-green-400 bg-green-50 text-green-700" },
              { label: "IATF 16949", sub: "Automotive Quality Standard", status: "Roadmap 2026", color: "border-blue-400 bg-blue-50 text-blue-700" },
              { label: "Customer Compliance", sub: "OEM-Specific Standards", status: "Compliant", color: "border-accent bg-red-50 text-white" },
            ].map((cert) => (
              <motion.div
                key={cert.label}
                variants={fadeUp}
                className={`border-2 p-6 ${cert.color} text-center`}
                data-testid={`card-cert-${cert.label.toLowerCase().replace(/[: ]/g, "-")}`}
              >
                <Award size={32} className="mx-auto mb-3 opacity-60" />
                <div className="font-black text-lg">{cert.label}</div>
                <div className="text-sm opacity-70 mt-1 mb-4">{cert.sub}</div>
                <div className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider border border-current`}>
                  {cert.status}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
