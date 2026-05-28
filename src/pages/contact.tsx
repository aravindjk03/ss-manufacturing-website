import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  product: z.string().min(1, "Please select a product interest"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", product: "", message: "" },
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for reaching out. Our team will contact you within 1-2 business days.",
    });
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Get in touch with SS Manufacturing Private Limited — Chennai-area automotive safety component manufacturer. OEM inquiries, supplier partnerships, and corporate communication welcome."
        path="/contact"
        keywords="contact SSMPL, automotive supplier inquiry, OEM partnership, Chennai manufacturer contact, Kanchipuram"
      />
      {/* HERO */}
      <section className="bg-[#0A1628] pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Reach Us</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-xl text-lg">
              Discuss your seat belt or safety component requirements with our team. Located near Kanchipuram — close to India's major OEM hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-8">
              <div>
                <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Get In Touch</div>
                <h2 className="text-2xl font-black text-primary mb-4">Talk to Our Team</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you're a procurement officer from HMI, RNAIPL, or KMI, or a new OEM looking to qualify a supplier — we'd welcome the conversation.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: <>SS Manufacturing Private Limited<br />Near Kanchipuram<br />Tamil Nadu, India</>,
                    sub: "7 km from R&N · 40 km from HMI",
                  },
                  { icon: Phone, title: "Phone", content: <>+91 44 XXXX XXXX</>, sub: "Business inquiries only" },
                  { icon: Mail, title: "Email", content: <>info@ssmanufacturing.in</>, sub: "Response within 1 business day" },
                  { icon: Clock, title: "Business Hours", content: <>Monday — Saturday<br />9:00 AM — 6:00 PM IST</>, sub: null },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 border border-border bg-card">
                    <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm mb-1">{item.title}</div>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                      {item.sub && <p className="text-xs text-muted-foreground/60 mt-1">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* OEM proximity */}
              <div className="border border-border bg-[#0A1628] p-6">
                <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Strategic Location</div>
                <div className="space-y-3">
                  {[
                    { label: "R&N Facility", distance: "7 km" },
                    { label: "HMI (Hyundai Motor India)", distance: "40 km" },
                    { label: "Chennai Port (Export)", distance: "~60 km" },
                  ].map((loc) => (
                    <div key={loc.label} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                      <span className="text-sm text-gray-300">{loc.label}</span>
                      <span className="text-white font-black text-sm">{loc.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="border border-border bg-muted h-44 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <MapPin size={28} className="text-white" />
                <div className="font-bold text-primary text-sm">Near Kanchipuram, Tamil Nadu</div>
                <div className="text-xs text-muted-foreground">SSMPL India Plant</div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="border border-border bg-card p-8 md:p-10">
                <h2 className="text-2xl font-black text-primary mb-2">Send Us an Inquiry</h2>
                <p className="text-muted-foreground text-sm mb-8">Fill in the form and our team will respond within 1–2 business days.</p>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6 text-sm">
                    Inquiry submitted successfully. We'll be in touch shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" {...register("name")} data-testid="input-name" className="border-border focus:border-white" />
                      {errors.name && <p className="text-white text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Company *</Label>
                      <Input id="company" placeholder="Your company name" {...register("company")} data-testid="input-company" className="border-border focus:border-white" />
                      {errors.company && <p className="text-white text-xs mt-1">{errors.company.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Email Address *</Label>
                      <Input id="email" type="email" placeholder="email@company.com" {...register("email")} data-testid="input-email" className="border-border focus:border-white" />
                      {errors.email && <p className="text-white text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" {...register("phone")} data-testid="input-phone" className="border-border focus:border-white" />
                      {errors.phone && <p className="text-white text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="product" className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Product Interest *</Label>
                    <Select onValueChange={(val) => setValue("product", val, { shouldValidate: true })}>
                      <SelectTrigger data-testid="select-product" className="border-border">
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retractors">Seat Belt Retractors (SD9 / SR2 / SD3 / SB3)</SelectItem>
                        <SelectItem value="buckles">Buckle Systems (SB15 / SB20 / SB30)</SelectItem>
                        <SelectItem value="height-adjusters">Height Adjusters (SH8 / SH9)</SelectItem>
                        <SelectItem value="webbing">Seat Belt Webbing</SelectItem>
                        <SelectItem value="complete-system">Complete Seat Belt Assembly</SelectItem>
                        <SelectItem value="general">General Inquiry / Supplier Qualification</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.product && <p className="text-white text-xs mt-1">{errors.product.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements, vehicle model, annual volumes, or any specifications..."
                      rows={5}
                      {...register("message")}
                      data-testid="textarea-message"
                      className="border-border focus:border-white resize-none"
                    />
                    {errors.message && <p className="text-white text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 tracking-wide" data-testid="button-submit-inquiry">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">Submit Inquiry <Send size={16} /></span>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by SS Manufacturing (SSMPL) regarding your inquiry.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUICK CTA */}
      <section className="py-16 bg-[#0A1628]">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Fast Track</div>
          <h2 className="text-2xl font-black text-white mb-4">Need a Quick Response?</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm">
            For urgent OEM requirements, email us directly at <span className="text-white font-semibold">info@ssmanufacturing.in</span>
          </p>
          <a href="mailto:info@ssmanufacturing.in">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8" data-testid="button-email-direct">
              Email Us Directly <ArrowRight size={14} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
