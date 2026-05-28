import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Shield, Heart, Scale, Ban, Globe, Leaf, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const policies = [
  {
    id: "quality",
    icon: Shield,
    title: "Quality Policy",
    summary: "SS Manufacturing Private Limited is committed to manufacturing automotive safety components that consistently meet or exceed customer requirements, applicable regulatory standards, and international quality benchmarks. We achieve this through a systematic quality management approach, continuous process improvement, and a culture where every employee takes ownership of quality at their workstation. Our objective is zero defects, full traceability, and complete customer satisfaction.",
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Policy",
    summary: "We are committed to conducting our operations in a manner that minimises adverse environmental impact. This includes reducing waste generation at source, optimising energy consumption, preventing pollution, and ensuring responsible disposal of manufacturing by-products. We comply with all applicable environmental laws and regulations, and continuously seek to improve our environmental performance beyond mere compliance.",
  },
  {
    id: "health-safety",
    icon: Heart,
    title: "Health & Safety Policy",
    summary: "The health, safety, and well-being of every person who works in or visits our facility is a non-negotiable priority. We maintain a zero-incident target through rigorous hazard identification, risk assessment, and control measures. All employees receive regular safety training, and we promote a proactive safety culture where near-misses are reported and acted upon without blame.",
  },
  {
    id: "human-rights",
    icon: Users,
    title: "Human Rights Policy",
    summary: "SS Manufacturing Private Limited respects and upholds the fundamental human rights of all individuals connected with our business — employees, contract workers, suppliers, and community members. We prohibit forced labour, child labour, and any form of discrimination. We provide fair wages, safe conditions, and freedom of association. Our human rights commitments are embedded in our supplier code of conduct and procurement practices.",
  },
  {
    id: "anti-bribery",
    icon: Ban,
    title: "Anti-Bribery Policy",
    summary: "We maintain a zero-tolerance approach to bribery and corruption in all forms. No employee, contractor, or representative of SS Manufacturing may offer, give, receive, or solicit anything of value to improperly influence a business or government decision. We comply with the Prevention of Corruption Act and all applicable anti-bribery regulations. All business transactions must be documented transparently and approved through proper channels.",
  },
  {
    id: "ethical-sourcing",
    icon: Globe,
    title: "Ethical Sourcing Policy",
    summary: "We are committed to sourcing raw materials, components, and services from suppliers who uphold ethical labour practices, environmental standards, and business integrity. Our supplier selection process includes ethical screening, and we expect all suppliers to comply with our Supplier Code of Conduct. We will not knowingly source from suppliers involved in human rights violations, environmental damage, or corruption.",
  },
  {
    id: "esg",
    icon: Scale,
    title: "ESG Policy",
    summary: "Our Environmental, Social, and Governance (ESG) policy formalises our commitment to sustainable, responsible, and transparent business practices. We integrate ESG considerations into our strategic planning, operational decisions, and performance measurement. We report on ESG metrics annually and continuously raise our ambition in alignment with global best practices. ESG is not a separate function — it is how we run our business.",
  },
  {
    id: "supplier-code",
    icon: FileText,
    title: "Supplier Code of Conduct",
    summary: "All suppliers and business partners of SS Manufacturing Private Limited are required to adhere to our Supplier Code of Conduct. This code sets out minimum requirements for labour practices, environmental management, anti-corruption, data privacy, and health and safety. We conduct periodic supplier assessments and require corrective action plans for any non-conformances. We believe responsible supply chains are foundational to sustainable growth.",
  },
];

export default function PoliciesPage() {
  return (
    <PageLayout>
      <SEO
        title="Policies"
        description="SSMPL corporate policies — quality, environment, health & safety, energy, information security, anti-bribery, human rights, and code of conduct governing our operations."
        path="/policies"
        keywords="corporate policies, quality policy, ISO 27001, ISO 37001 anti-bribery, code of conduct, human rights policy"
      />
      {/* HERO */}
      <section className="bg-[#0A1628] pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Governance</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Policies</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Our policies govern every decision we make — from the factory floor to the boardroom. They reflect our commitment to quality, ethics, and responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-3xl leading-relaxed text-base"
          >
            SS Manufacturing Private Limited operates under a comprehensive policy framework designed to ensure quality, safety, environmental responsibility, and ethical conduct across all our operations. The policies below define our minimum standards and commitments — to our employees, our customers, our suppliers, and the communities we operate in.
          </motion.p>
        </div>
      </section>

      {/* POLICIES ACCORDION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {policies.map((policy, i) => (
                <AccordionItem
                  key={policy.id}
                  value={policy.id}
                  className="border border-border bg-card hover:border-accent transition-colors data-[state=open]:border-accent"
                  data-testid={`accordion-policy-${policy.id}`}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-muted border border-border flex items-center justify-center shrink-0 group-data-[state=open]:bg-accent group-data-[state=open]:border-accent transition-colors">
                        <policy.icon size={18} className="text-muted-foreground group-data-[state=open]:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs text-white font-bold tracking-widest uppercase mb-0.5">Policy {String(i + 1).padStart(2, "0")}</div>
                        <div className="font-black text-primary text-base">{policy.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{policy.summary}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white font-semibold text-xs tracking-wide"
                        data-testid={`button-download-policy-${policy.id}`}
                      >
                        <Download size={12} className="mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-12 bg-[#0A1628]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <FileText size={22} className="text-white" />
          </div>
          <h3 className="text-xl font-black text-white mb-4">Policy Updates & Availability</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            All policies are reviewed annually and updated to reflect regulatory changes, operational improvements, and evolving best practices. Complete policy documents are available to customers, auditors, and suppliers upon formal request. Contact us to obtain full policy documentation.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
