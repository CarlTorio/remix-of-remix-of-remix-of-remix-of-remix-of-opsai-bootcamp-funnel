import { useEffect } from "react";
import { Clock, Mail, Phone, ArrowLeft, CalendarDays, Rocket } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { firstName?: string; email?: string } | null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen bg-background text-foreground flex items-center justify-center px-4 py-4 overflow-hidden">
      <div className="max-w-2xl w-full text-center space-y-4">

        {/* Main Message */}
        <div className="space-y-1.5">
          <h1 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            Congratulations{state?.firstName ? `, ${state.firstName}` : ""}! 🎉
          </h1>
          <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
            Welcome to the <span className="text-secondary font-semibold">SME Systems Bootcamp</span>! You've just taken your first step to becoming an AI System Builder.
          </p>
        </div>

        {/* Important Date */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-3 space-y-1">
          <div className="flex items-center justify-center gap-2 text-secondary">
            <CalendarDays className="w-4 h-4" />
            <span className="font-heading font-bold text-sm">Bootcamp starts on April 7!</span>
          </div>
          <p className="text-muted-foreground font-body text-xs">Make sure you're ready. More details will be sent to you soon.</p>
        </div>

        {/* What Happens Next - horizontal on md+ */}
        <div className="bg-card border border-border rounded-xl p-4 md:p-5 space-y-3">
          <h2 className="font-heading font-bold text-sm text-foreground text-center">What Happens Next?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
              <p className="font-heading font-semibold text-foreground text-xs">Within 24 Hours</p>
              <p className="text-muted-foreground font-body text-[11px] leading-tight">
                We'll verify your payment and confirm your slot.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              <p className="font-heading font-semibold text-foreground text-xs">Check Your Email</p>
              <p className="text-muted-foreground font-body text-[11px] leading-tight">
                Bootcamp details & access instructions will be sent to you.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-secondary" />
              </div>
              <p className="font-heading font-semibold text-foreground text-xs">We'll Reach Out</p>
              <p className="text-muted-foreground font-body text-[11px] leading-tight">
                Our team will contact you to process your enrollment.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4 text-secondary" />
              </div>
              <p className="font-heading font-semibold text-foreground text-xs">Get Ready to Build</p>
              <p className="text-muted-foreground font-body text-[11px] leading-tight">
                You're about to build powerful AI-driven business systems.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-muted-foreground text-[11px] font-body">
          If you don't hear from us within 24 hours, email us at <span className="text-secondary font-medium">johncarlotorio@gmail.com</span>
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs font-body transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Home
        </button>

        {/* Footer */}
        <div className="border-t border-border pt-3">
          <p className="text-muted-foreground text-[11px] font-body">
            © 2026 LogiCode.ph. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
