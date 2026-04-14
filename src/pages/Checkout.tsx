import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Copy, Check, Upload, Loader2, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CyanCheck } from "@/components/icons";
import CTAButton from "@/components/CTAButton";
import bpiLogo from "@/assets/bpi-logo.png";
import bpiQr from "@/assets/bpi-qr.png";
import gcashQr from "@/assets/gcash-qr.png";
import gcashLogo from "@/assets/gcash-logo.png";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const week1Items = [
  "Identify what's slowing down your operations",
  "Map manual tasks that need to disappear",
  "Define what each department should track",
  "Set up reports and approvals that matter",
  "Design your ideal dashboard layout",
  "Choose the right system and tools for your business",
];

const week2Items = [
  "Build dashboards and forms with real data flow",
  "Set up back-end workflows and approvals",
  "Create usernames, passwords & employee access",
  "Configure user roles and permissions",
  "Implement process logic and automation",
  "Launch the first working version of your internal system",
];

const getTimeLeft = () => {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const diff = endOfDay.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
};

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"gcash" | "bank">("gcash");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({ title: "Please select a file first", variant: "destructive" });
      return;
    }
    if (!firstName || !lastName || !email) {
      toast({ title: "Please fill in your contact information first", variant: "destructive" });
      return;
    }

    setUploading(true);
    try {
      const fileExt = selectedFile.name.split(".").pop();
      const filePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("receipts")
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("receipts")
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase.from("receipts").insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        file_url: urlData.publicUrl,
        file_name: selectedFile.name,
        payment_method: paymentMethod,
      });

      if (dbError) throw dbError;

      setUploaded(true);
      navigate("/checkout/success", { state: { firstName, email } });
    } catch (err: any) {
      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner */}
      <div className="w-full bg-secondary py-2 text-center">
        <p className="font-heading font-bold text-secondary-foreground text-xs uppercase tracking-wider">
          Limited Slots! Early-Bird Rate — Enroll Now Before It's Gone!
        </p>
      </div>

      {/* Header */}
      <div className="text-center pt-6 pb-2 px-4">
        <h1 className="font-heading font-bold text-2xl md:text-3xl">
          Join The <span className="text-secondary">SME Systems Bootcamp</span> Today!
        </h1>
        <div className="mt-3 inline-flex items-center gap-3 rounded-full px-6 py-3" style={{ backgroundColor: '#b8860b' }}>
          <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
          <span className="font-heading font-bold text-white text-base">
            Early-bird rate expires in{" "}
            <span className="tabular-nums text-lg">
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl px-4 pt-6 pb-10 grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Left — Form */}
        <div className="lg:col-span-3 space-y-4">
          {/* Contact Information */}
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h2 className="font-heading font-bold text-base text-foreground">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs">First Name</Label>
                <Input placeholder="Juan" value={firstName} onChange={e => setFirstName(e.target.value)} className="bg-muted/50 border-border h-9 text-sm" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Last Name</Label>
                <Input placeholder="Dela Cruz" value={lastName} onChange={e => setLastName(e.target.value)} className="bg-muted/50 border-border h-9 text-sm" />
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Email Address</Label>
              <Input type="email" placeholder="juan@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-muted/50 border-border h-9 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Phone Number</Label>
              <Input type="tel" placeholder="+63 9XX XXX XXXX" value={phone} onChange={e => setPhone(e.target.value)} className="bg-muted/50 border-border h-9 text-sm" />
            </div>
          </div>

          {/* Payment Plan */}
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h2 className="font-heading font-bold text-base text-foreground">Payment Plan</h2>
            <div className="flex items-center justify-between bg-muted/30 border border-secondary/30 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-secondary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </div>
                <span className="font-body text-foreground text-sm">SME Systems Bootcamp — Early Bird</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body text-muted-foreground line-through text-sm">₱250,000</span>
                <span className="font-heading font-bold text-secondary text-base">₱4,886</span>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <div className="text-center">
              <span className="inline-block bg-accent/15 text-accent font-heading font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-accent/30">
                📚 What You'll Learn in 2 Weeks
              </span>
            </div>

            {/* Week 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-accent/10 text-accent font-heading font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-accent/20">Week 1</span>
                <p className="text-foreground font-heading font-semibold text-xs">Map Your Business Before You Build</p>
              </div>
              {week1Items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CyanCheck className="shrink-0 mt-0.5 w-3.5 h-3.5" />
                  <p className="text-muted-foreground text-xs font-body">{item}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border" />

            {/* Week 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary/10 text-secondary font-heading font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-secondary/20">Week 2</span>
                <p className="text-foreground font-heading font-semibold text-xs">Build Your Real Working System</p>
              </div>
              {week2Items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CyanCheck className="shrink-0 mt-0.5 w-3.5 h-3.5" />
                  <p className="text-muted-foreground text-xs font-body">{item}</p>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="border-t border-border pt-3">
              <p className="text-secondary font-heading font-bold text-[10px] uppercase tracking-wider mb-2">Plus 4 Premium Bonuses Included</p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { icon: "📋", title: "SME Prompt Vault" },
                  { icon: "📐", title: "System Blueprint Kit" },
                  { icon: "🔧", title: "No-Code Tool Stack Guide" },
                  { icon: "🎬", title: "Fast-Track Replay Vault" },
                ].map((bonus, i) => (
                  <div key={i} className="flex items-center gap-2 border border-border/50 rounded-md px-2 py-1.5">
                    <span className="text-xs">{bonus.icon}</span>
                    <p className="text-muted-foreground text-[10px] font-body">{bonus.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Stack */}
            <div className="pt-2 space-y-1 text-xs font-body">
              <div className="flex justify-between text-muted-foreground">
                <span>Bootcamp value:</span>
                <span>₱200,000</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Bonuses value:</span>
                <span>₱25,000</span>
              </div>
              <div className="flex justify-between text-foreground font-heading font-bold text-sm pt-1">
                <span>TOTAL VALUE:</span>
                <span className="line-through text-muted-foreground">₱225,000</span>
              </div>
            </div>

            {/* Final Price */}
            <div className="bg-secondary/15 border border-secondary/40 rounded-lg px-4 py-2 flex items-center justify-between">
              <p className="font-heading font-bold text-secondary text-xs uppercase tracking-wide italic">Your Price Today:</p>
              <p className="font-heading font-extrabold text-secondary text-xl">₱4,886</p>
            </div>

            <div className="text-center space-y-0.5">
              <p className="text-destructive text-[10px] font-body">
                🚨 Early bird rate is limited — once it's gone, the price goes up.
              </p>
              <p className="text-foreground text-[10px] font-body font-semibold italic">
                Only limited slots available. Secure your spot now before it's too late.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Payment + Upload */}
        <div className="lg:col-span-2 self-start">
          <div className="sticky top-6 space-y-4">

            {/* Payment Method */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-3">
              <h2 className="font-heading font-bold text-base text-foreground">Payment Method</h2>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPaymentMethod("gcash")}
                  className={`rounded-lg border p-3 text-center font-heading font-semibold text-sm transition-all ${
                    paymentMethod === "gcash"
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  GCash
                </button>
                <button
                  onClick={() => setPaymentMethod("bank")}
                  className={`rounded-lg border p-3 text-center font-heading font-semibold text-sm transition-all ${
                    paymentMethod === "bank"
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  Bank Transfer
                </button>
              </div>

              {paymentMethod === "gcash" && (
                <div className="bg-muted/30 border border-border rounded-lg p-3 text-xs font-body space-y-3">
                  <div className="space-y-0.5">
                    <p className="text-foreground font-bold flex items-center gap-2">
                      <img src={gcashLogo} alt="GCash" className="h-7" />
                      GCash Details:
                    </p>
                   </div>
                  <p className="text-muted-foreground font-semibold text-center text-sm mt-1">Scan this QR code to pay via GCash</p>
                  <img src={gcashQr} alt="GCash QR Code" className="w-full rounded-lg" />
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="bg-muted/30 border-2 border-secondary/40 rounded-xl p-4 font-body space-y-3">
                  <div className="flex items-center gap-2">
                    <img src={bpiLogo} alt="BPI" className="h-8 w-auto" />
                    <p className="text-foreground font-bold text-sm">Bank Details:</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground text-xs">Bank: <span className="text-foreground font-semibold text-sm">BPI Savings</span></p>
                    <p className="text-muted-foreground text-xs">Account Name: <span className="text-foreground font-semibold text-sm">John Paolo Mercado</span></p>
                    <div className="flex items-center gap-1.5">
                      <p className="text-muted-foreground text-xs">Account Number: <span className="text-secondary font-bold text-sm tracking-wide">0929-3286-71</span></p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("0929328671");
                          const btn = document.getElementById("copy-acct");
                          if (btn) btn.dataset.copied = "true";
                          setTimeout(() => { if (btn) btn.dataset.copied = "false"; }, 2000);
                        }}
                        id="copy-acct"
                        className="group p-1 rounded-md hover:bg-secondary/20 transition-colors data-[copied=true]:text-green-400 text-muted-foreground hover:text-secondary"
                        data-copied="false"
                      >
                        <Copy className="w-3.5 h-3.5 group-data-[copied=true]:hidden" />
                        <Check className="w-3.5 h-3.5 hidden group-data-[copied=true]:block" />
                      </button>
                    </div>
                  </div>
                  <img src={bpiQr} alt="BPI QR Code" className="w-full rounded-lg" />
                </div>
              )}

              <p className="text-muted-foreground text-[10px] font-body">
                Please send your proof of payment by clicking the button below and give us at least 1–2 days to verify your payment and grant access.
              </p>
            </div>

            {/* Upload Receipt */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-3">
              <h2 className="font-heading font-bold text-base text-foreground text-center">Upload Receipt</h2>

              {uploaded ? (
                <div className="flex flex-col items-center gap-2 py-4">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                  <p className="text-foreground font-semibold text-sm">Receipt uploaded successfully!</p>
                  <p className="text-muted-foreground text-xs">We'll verify your payment within 1–2 days.</p>
                </div>
              ) : (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={e => setSelectedFile(e.target.files?.[0] || null)}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border border-dashed border-border rounded-lg p-3 flex items-center justify-center gap-2 hover:border-secondary/50 transition-colors"
                  >
                    <Upload className="w-4 h-4 text-muted-foreground shrink-0" />
                    <p className="text-muted-foreground text-xs font-body truncate">
                      {selectedFile ? selectedFile.name : "Click to select your receipt (image or PDF)"}
                    </p>
                  </button>

                  <button
                    onClick={handleUpload}
                    disabled={uploading || !selectedFile}
                    className="w-full bg-secondary text-secondary-foreground font-heading font-bold text-sm py-3 rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        SUBMIT PROOF OF PAYMENT
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-6 text-center">
        <p className="text-muted-foreground text-xs font-body">
          © 2026 LogiCode.PH. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Checkout;