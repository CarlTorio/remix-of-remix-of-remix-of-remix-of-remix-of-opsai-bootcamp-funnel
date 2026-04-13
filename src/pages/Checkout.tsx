import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CyanCheck } from "@/components/icons";
import CTAButton from "@/components/CTAButton";

const benefits = [
  "2-Week Live Bootcamp with hands-on system building",
  "System Blueprint Kit to map your workflows",
  "SME Prompt Vault with ready-to-use prompts",
  "No-Code Tool Stack Guide to avoid trial-and-error",
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"gcash" | "bank">("gcash");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner */}
      <div className="w-full bg-secondary py-3 text-center">
        <p className="font-heading font-bold text-secondary-foreground text-sm md:text-base uppercase tracking-wider">
          Limited Slots! Early-Bird Rate — Enroll Now Before It's Gone!
        </p>
      </div>

      {/* Header */}
      <div className="text-center pt-10 pb-8 px-4">
        <h1 className="font-heading font-bold text-2xl md:text-4xl">
          Join The <span className="text-secondary">SME Systems Bootcamp</span> Today!
        </h1>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl px-4 pb-20 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left — Form */}
        <div className="lg:col-span-3 space-y-6">
          {/* Contact Information */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h2 className="font-heading font-bold text-xl text-foreground">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>First Name</Label>
                <Input placeholder="Juan" className="bg-muted/50 border-border" />
              </div>
              <div className="space-y-1.5">
                <Label>Last Name</Label>
                <Input placeholder="Dela Cruz" className="bg-muted/50 border-border" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Email Address</Label>
              <Input type="email" placeholder="juan@email.com" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-1.5">
              <Label>Phone Number</Label>
              <Input type="tel" placeholder="+63 9XX XXX XXXX" className="bg-muted/50 border-border" />
            </div>
          </div>

          {/* Billing Information */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h2 className="font-heading font-bold text-xl text-foreground">Billing Information</h2>
            <div className="space-y-1.5">
              <Label>Full Name (as shown on payment)</Label>
              <Input placeholder="Juan Dela Cruz" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-1.5">
              <Label>Company / Business Name (Optional)</Label>
              <Input placeholder="Your Business Inc." className="bg-muted/50 border-border" />
            </div>
          </div>

          {/* Payment Plan */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h2 className="font-heading font-bold text-xl text-foreground">Payment Plan</h2>
            <div className="flex items-center justify-between bg-muted/30 border border-secondary/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-secondary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <span className="font-body text-foreground">SME Systems Bootcamp — Early Bird</span>
              </div>
              <span className="font-heading font-bold text-secondary text-lg">₱4,886</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h2 className="font-heading font-bold text-xl text-foreground">Payment Method</h2>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod("gcash")}
                className={`rounded-xl border p-4 text-center font-heading font-semibold transition-all ${
                  paymentMethod === "gcash"
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                GCash
              </button>
              <button
                onClick={() => setPaymentMethod("bank")}
                className={`rounded-xl border p-4 text-center font-heading font-semibold transition-all ${
                  paymentMethod === "bank"
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                Bank Transfer
              </button>
            </div>

            {paymentMethod === "gcash" && (
              <div className="bg-muted/30 border border-border rounded-xl p-5 space-y-1 text-sm font-body">
                <p className="text-foreground font-semibold">GCash Details:</p>
                <p className="text-muted-foreground">Name: <span className="text-foreground">OpsAI PH</span></p>
                <p className="text-muted-foreground">Account Number: <span className="text-foreground">0917 XXX XXXX</span></p>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="bg-muted/30 border border-border rounded-xl p-5 space-y-3 text-sm font-body">
                <div className="space-y-1">
                  <p className="text-foreground font-semibold">Bank Transfer Details:</p>
                  <p className="text-muted-foreground">Bank: <span className="text-foreground">Banco de Oro (BDO Unibank, Inc.)</span></p>
                  <p className="text-muted-foreground">Account Name: <span className="text-foreground">OpsAI PH</span></p>
                  <p className="text-muted-foreground">Account Number: <span className="text-foreground">0129 0800 0769</span></p>
                </div>
                <div className="border-t border-border pt-3 space-y-1">
                  <p className="text-muted-foreground">Bank: <span className="text-foreground">Union Bank of the Philippines</span></p>
                  <p className="text-muted-foreground">Account Name: <span className="text-foreground">OpsAI PH</span></p>
                  <p className="text-muted-foreground">Account Number: <span className="text-foreground">1093 5684 5287</span></p>
                </div>
              </div>
            )}

            <p className="text-muted-foreground text-xs font-body">
              Please send your proof of payment by clicking the button below and give us at least 1–2 days to verify your payment and grant access.
            </p>
          </div>

          {/* Submit */}
          <div className="text-center pt-2">
            <CTAButton href="mailto:hello@opsaiph.com?subject=Proof%20of%20Payment%20-%20SME%20Systems%20Bootcamp">
              SUBMIT PROOF OF PAYMENT
            </CTAButton>
          </div>
        </div>

        {/* Right — Order Summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-8 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              {/* Offer badge */}
              <div className="text-center">
                <span className="inline-block bg-secondary/15 text-secondary font-heading font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border border-secondary/30">
                  🔥 Special Early-Bird Offer
                </span>
                <p className="text-muted-foreground text-xs mt-2 font-body">(For fast action-takers only)</p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CyanCheck className="shrink-0 mt-0.5 w-4 h-4" />
                    <p className="text-muted-foreground text-sm font-body">{b}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="text-center pt-2">
                <p className="text-muted-foreground text-sm line-through font-body mb-1">Total Value: ₱200,000+++</p>
                <div className="inline-block bg-secondary rounded-xl px-8 py-3">
                  <p className="font-heading font-extrabold text-secondary-foreground text-xl uppercase tracking-wide">
                    Early-Bird Rate: ₱4,886
                  </p>
                </div>
              </div>

              {/* Urgency */}
              <div className="text-center space-y-1">
                <p className="text-destructive text-xs font-body">
                  🚨 Early bird rate is limited — once it's gone, the price goes up.
                </p>
                <p className="text-foreground text-xs font-body font-semibold italic">
                  Only limited slots available. Secure your spot now before it's too late.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-6 text-center">
        <p className="text-muted-foreground text-xs font-body">
          © 2025 OpsAI PH. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
