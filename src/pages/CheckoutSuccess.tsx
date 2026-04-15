import { useEffect } from "react";
import { Copy, Check, ArrowLeft, CalendarDays, Clock, Mail, Phone, Rocket } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

interface SuccessState {
  firstName?: string;
  email?: string;
  enrollmentReference?: string;
  paymentMethod?: "gcash" | "bank";
}

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as SuccessState | null;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyRef = () => {
    if (state?.enrollmentReference) {
      navigator.clipboard.writeText(state.enrollmentReference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen text-foreground flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0A0F1E" }}>
      <div className="max-w-2xl w-full space-y-6">

        {/* Success Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00E5FF, #1E40AF)" }}>
            <Check className="w-8 h-8 text-[#0A0F1E]" />
          </div>
          <h1 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
            Enrollment <span style={{ color: "#00E5FF" }}>Confirmed!</span>
          </h1>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mx-auto">
            {state?.firstName ? `Congratulations, ${state.firstName}!` : "Congratulations!"} You've secured your slot in the <span style={{ color: "#00E5FF" }} className="font-semibold">SME Systems Bootcamp</span>.
          </p>
        </div>

        {/* Enrollment Reference */}
        {state?.enrollmentReference && (
          <div className="rounded-xl border-2 border-[#00E5FF]/30 p-5 text-center" style={{ background: "linear-gradient(135deg, rgba(0,229,255,0.08), rgba(30,64,175,0.08))" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-heading font-bold mb-2">Your Enrollment Reference</p>
            <div className="flex items-center justify-center gap-3">
              <p className="font-heading font-black text-2xl md:text-3xl tracking-wider" style={{ color: "#00E5FF" }}>
                {state.enrollmentReference}
              </p>
              <button onClick={copyRef} className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-[#00E5FF]">
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-muted-foreground text-xs mt-2 font-body">
              ⚠️ Include this reference when sending your payment
            </p>
          </div>
        )}

        {/* Payment Instructions */}
        <div className="bg-card rounded-xl border border-border p-5 space-y-4">
          <h2 className="font-heading font-black text-sm uppercase tracking-wider text-foreground text-center">
            Payment Instructions
          </h2>

          {state?.paymentMethod === "bank" ? (
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
                <p className="font-heading font-bold text-sm text-foreground">Bank Transfer Details</p>
                <div className="space-y-1 text-sm font-body">
                  <p className="text-muted-foreground">Bank: <span className="text-foreground font-semibold">BPI Savings</span></p>
                  <p className="text-muted-foreground">Account Name: <span className="text-foreground font-semibold">John Paolo Mercado</span></p>
                  <p className="text-muted-foreground">Account No: <span className="font-bold" style={{ color: "#00E5FF" }}>0929-3286-71</span></p>
                  <p className="text-muted-foreground">Amount: <span className="text-foreground font-bold">₱4,886</span></p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
                <p className="font-heading font-bold text-sm text-foreground">GCash Details</p>
                <div className="space-y-1 text-sm font-body">
                  <p className="text-muted-foreground">GCash Number: <span className="font-bold" style={{ color: "#00E5FF" }}>0917-XXX-XXXX</span></p>
                  <p className="text-muted-foreground">Account Name: <span className="text-foreground font-semibold">John Paolo Mercado</span></p>
                  <p className="text-muted-foreground">Amount: <span className="text-foreground font-bold">₱4,886</span></p>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-lg border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-3">
            <p className="text-xs font-body text-center" style={{ color: "#00E5FF" }}>
              📌 Don't forget to include your enrollment reference <strong>{state?.enrollmentReference || "SMEB-XXXXXX-XXXX"}</strong> in your payment note/message
            </p>
          </div>
        </div>

        {/* Bootcamp Date */}
        <div className="rounded-xl border border-secondary/30 p-4 text-center" style={{ background: "rgba(30,64,175,0.1)" }}>
          <div className="flex items-center justify-center gap-2" style={{ color: "#00E5FF" }}>
            <CalendarDays className="w-4 h-4" />
            <span className="font-heading font-black text-sm uppercase tracking-wider">Bootcamp starts on April 28!</span>
          </div>
          <p className="text-muted-foreground font-body text-xs mt-1">More details will be sent to your email.</p>
        </div>

        {/* What Happens Next */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h2 className="font-heading font-black text-sm uppercase tracking-wider text-foreground text-center mb-4">What Happens Next</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Clock, title: "Within 24 Hours", desc: "We'll verify your payment and confirm your slot." },
              { icon: Mail, title: "Check Email", desc: "Bootcamp details & access instructions sent to you." },
              { icon: Phone, title: "We'll Reach Out", desc: "Our team will contact you to finalize enrollment." },
              { icon: Rocket, title: "Get Ready", desc: "You're about to build AI-driven business systems." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-1.5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,229,255,0.1)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#00E5FF" }} />
                </div>
                <p className="font-heading font-bold text-foreground text-xs">{title}</p>
                <p className="text-muted-foreground font-body text-[11px] leading-tight">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Note */}
        <p className="text-center text-muted-foreground text-xs font-body">
          Questions? Email us at <span style={{ color: "#00E5FF" }} className="font-medium">johncarltorio@gmail.com</span>
        </p>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold px-6 py-3 rounded-xl transition-all uppercase tracking-wider"
            style={{ background: "linear-gradient(135deg, #00E5FF, #1E40AF)", color: "#0A0F1E" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-4 text-center">
          <p className="text-muted-foreground text-[11px] font-body">© 2026 LogiCode.ph. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
