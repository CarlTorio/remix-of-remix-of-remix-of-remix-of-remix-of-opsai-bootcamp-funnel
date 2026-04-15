import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, Users, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"gcash" | "bank">("gcash");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "First name is required";
    if (!surname.trim()) e.surname = "Surname is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email address";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^09\d{9}$/.test(phone)) e.phone = "Use format: 09XXXXXXXXX";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);

    try {
      const now = new Date();
      const batchMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

      const tempRef = `TEMP-${Date.now()}`;
      const { data, error } = await supabase
        .from("enrollments")
        .insert({
          first_name: firstName.trim(),
          surname: surname.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          payment_method: paymentMethod,
          amount: 4886,
          batch_month: batchMonth,
          enrollment_reference: tempRef,
        })
        .select("enrollment_reference")
        .single();

      if (error) throw error;

      const enrollmentRef = data.enrollment_reference;

      // Send to Pancake POS
      try {
        await supabase.functions.invoke("send-enrollment-to-pancake", {
          body: {
            first_name: firstName.trim(),
            surname: surname.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            payment_method: paymentMethod,
            enrollment_reference: enrollmentRef,
            batch_month: batchMonth,
          },
        });
      } catch (pancakeErr) {
        console.error("Pancake sync failed:", pancakeErr);
      }

      navigate("/checkout/success", {
        state: {
          firstName: firstName.trim(),
          email: email.trim(),
          enrollmentReference: enrollmentRef,
          paymentMethod,
        },
      });
    } catch (err: any) {
      toast({
        title: "Enrollment failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: "#0A0F1E" }}>
      {/* Top Banner */}
      <div className="w-full py-2.5 text-center" style={{ background: "linear-gradient(90deg, #1E40AF, #00E5FF)" }}>
        <p className="font-heading font-black text-white text-xs uppercase tracking-[0.2em]">
          LIMITED SLOTS — SECURE YOUR SPOT NOW
        </p>
      </div>

      {/* Header */}
      <div className="text-center pt-8 pb-4 px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF] font-heading font-bold mb-2">ENROLLMENT FORM</p>
        <h1 className="font-heading font-black text-2xl md:text-4xl uppercase tracking-tight text-foreground">
          SME Systems <span style={{ color: "#00E5FF" }}>Bootcamp</span>
        </h1>
        <p className="text-muted-foreground font-body text-sm mt-2 max-w-md mx-auto">
          14-day live coaching program · 6 Zoom sessions · Coach JC
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-4 pb-12 space-y-5">

        {/* Order Summary */}
        <div className="rounded-xl border border-[#00E5FF]/20 p-5" style={{ background: "linear-gradient(135deg, rgba(30,64,175,0.15), rgba(0,229,255,0.05))" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-heading font-bold mb-3">Order Summary</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading font-bold text-foreground text-sm">SME Systems Bootcamp</p>
              <p className="text-muted-foreground text-xs">14 days · 6 live classes · Monthly batch</p>
            </div>
            <p className="font-heading font-black text-xl" style={{ color: "#00E5FF" }}>₱4,886</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card rounded-xl border border-border p-5 space-y-4">
          <h2 className="font-heading font-black text-sm uppercase tracking-wider text-foreground">Contact Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">First Name *</Label>
              <Input
                placeholder="Juan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-muted/30 border-border h-10 text-sm"
              />
              {errors.firstName && <p className="text-destructive text-xs">{errors.firstName}</p>}
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Surname *</Label>
              <Input
                placeholder="Dela Cruz"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="bg-muted/30 border-border h-10 text-sm"
              />
              {errors.surname && <p className="text-destructive text-xs">{errors.surname}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">Email Address *</Label>
            <Input
              type="email"
              placeholder="juan@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-muted/30 border-border h-10 text-sm"
            />
            {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">Phone Number * (09XXXXXXXXX)</Label>
            <Input
              type="tel"
              placeholder="09171234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-muted/30 border-border h-10 text-sm"
            />
            {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-card rounded-xl border border-border p-5 space-y-4">
          <h2 className="font-heading font-black text-sm uppercase tracking-wider text-foreground">Payment Method</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentMethod("gcash")}
              className={`rounded-xl border-2 p-4 text-center font-heading font-bold text-sm transition-all ${
                paymentMethod === "gcash"
                  ? "border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF]"
                  : "border-border bg-muted/20 text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              GCash
            </button>
            <button
              onClick={() => setPaymentMethod("bank")}
              className={`rounded-xl border-2 p-4 text-center font-heading font-bold text-sm transition-all ${
                paymentMethod === "bank"
                  ? "border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF]"
                  : "border-border bg-muted/20 text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              Bank Transfer
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full py-4 rounded-xl font-heading font-black text-sm uppercase tracking-[0.15em] transition-all disabled:opacity-50"
          style={{
            background: "linear-gradient(135deg, #00E5FF, #1E40AF)",
            color: "#0A0F1E",
          }}
        >
          {submitting ? "PROCESSING..." : "SECURE MY SLOT"}
        </button>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Shield, label: "Secure" },
            { icon: Users, label: "100 Slots" },
            { icon: Lock, label: "Encrypted" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 py-2">
              <Icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground text-[10px] font-heading uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
