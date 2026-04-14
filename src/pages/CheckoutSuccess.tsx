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
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-8">

        {/* Main Message */}
        <div className="space-y-3">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Congratulations{state?.firstName ? `, ${state.firstName}` : ""}! 🎉
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            Welcome to the <span className="text-secondary font-semibold">SME Systems Bootcamp</span>! You've just taken your first step in your journey to becoming an AI System Builder.
          </p>
        </div>

        {/* Important Date */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-center gap-2 text-secondary">
            <CalendarDays className="w-5 h-5" />
            <span className="font-heading font-bold text-base">Mark Your Calendar</span>
          </div>
          <p className="text-foreground font-heading font-bold text-xl">Bootcamp starts on April 7!</p>
          <p className="text-muted-foreground font-body text-sm">Make sure you're ready. More details will be sent to you soon.</p>
        </div>

        {/* What Happens Next */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5 text-left">
          <h2 className="font-heading font-bold text-lg text-foreground text-center">What Happens Next?</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Within 24 Hours</p>
                <p className="text-muted-foreground font-body text-sm">
                  Our team will verify your payment and contact you personally to confirm your slot.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Check Your Email</p>
                <p className="text-muted-foreground font-body text-sm">
                  {state?.email ? (
                    <>We'll send your bootcamp details and access instructions to <span className="text-foreground font-medium">{state.email}</span>.</>
                  ) : (
                    "We'll send your bootcamp details and access instructions to the email you provided."
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">We'll Reach Out</p>
                <p className="text-muted-foreground font-body text-sm">
                  A member of our team will contact you to process your enrollment and provide everything you need to get started.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                <Rocket className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Get Ready to Build</p>
                <p className="text-muted-foreground font-body text-sm">
                  Prepare yourself — you're about to learn how to build powerful AI-driven business systems from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-muted-foreground text-xs font-body">
          If you don't hear from us within 24 hours, please email us at <span className="text-secondary font-medium">johncarlotorio@gmail.com</span>
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Footer */}
        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground text-xs font-body">
            © 2025 LogiCode.ph. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
