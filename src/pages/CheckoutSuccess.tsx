import { useEffect } from "react";
import { CheckCircle, Clock, Mail, Phone, ArrowLeft } from "lucide-react";
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
            Payment Submitted{state?.firstName ? `, ${state.firstName}` : ""}! 🎉
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            Your proof of payment for the <span className="text-secondary font-semibold">SME Systems Bootcamp</span> has been received successfully.
          </p>
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
          </div>
        </div>

        {/* Note */}
        <p className="text-muted-foreground text-xs font-body">
          If you don't hear from us within 24 hours, please email us at <span className="text-secondary font-medium">support@opsai.ph</span>
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
            © 2025 OpsAI PH. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
