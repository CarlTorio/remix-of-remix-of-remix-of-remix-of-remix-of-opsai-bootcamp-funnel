import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ExternalLink, RefreshCw, Users, Clock, CheckCircle, CreditCard, Eye, BarChart3, EyeOff } from "lucide-react";

type Receipt = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  file_url: string;
  file_name: string;
  payment_method: string;
  status: string;
  created_at: string;
};

const Admin = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem("admin_remembered") === "true";
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [totalVisitors, setTotalVisitors] = useState(0);

  const ADMIN_PASS = "logicode2026";

  const fetchReceipts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("receipts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setReceipts(data);
    setLoading(false);
  };

  const fetchVisitorCount = async () => {
    const { count } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true });
    setTotalVisitors(count || 0);
  };

  useEffect(() => {
    if (authenticated) {
      fetchReceipts();
      fetchVisitorCount();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-sm space-y-5 shadow-lg">
          <div className="text-center space-y-1">
            <h1 className="font-heading font-bold text-2xl text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground text-sm">Enter password to continue</p>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter admin password"
              value={password}
              onChange={e => { setPassword(e.target.value); setLoginError(false); }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  if (password === ADMIN_PASS) setAuthenticated(true);
                  else setLoginError(true);
                }
              }}
              className={`w-full bg-muted/50 border rounded-lg px-4 py-3 pr-11 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 ${loginError ? "border-red-500" : "border-border"}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {loginError && (
            <p className="text-red-500 text-xs font-body -mt-2">Wrong password. Please try again.</p>
          )}
          <button
            onClick={() => {
              if (password === ADMIN_PASS) setAuthenticated(true);
              else setLoginError(true);
            }}
            className="w-full bg-secondary text-secondary-foreground font-heading font-bold text-sm py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const totalRegistrations = receipts.length;
  const pendingCount = receipts.filter(r => r.status === "pending").length;
  const verifiedCount = receipts.filter(r => r.status === "verified").length;
  const gcashCount = receipts.filter(r => r.payment_method === "gcash").length;
  const bankCount = receipts.filter(r => r.payment_method === "bank").length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-xl sm:text-2xl">OpsAI Admin Panel</h1>
            <p className="text-muted-foreground text-xs sm:text-sm">SME Systems Bootcamp — Registrations</p>
          </div>
          <button
            onClick={() => { fetchReceipts(); fetchVisitorCount(); }}
            disabled={loading}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-1">
            <div className="flex items-center gap-2 text-blue-400">
              <BarChart3 className="w-4 h-4" />
              <span className="text-xs font-medium">Total Visitors</span>
            </div>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-blue-400">{totalVisitors}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-xs font-medium">Total Registrations</span>
            </div>
            <p className="font-heading font-bold text-2xl sm:text-3xl">{totalRegistrations}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">Pending</span>
            </div>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-amber-400">{pendingCount}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-1">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium">Verified</span>
            </div>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-green-400">{verifiedCount}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-4 h-4" />
              <span className="text-xs font-medium">GCash / Bank</span>
            </div>
            <p className="font-heading font-bold text-2xl sm:text-3xl">{gcashCount} <span className="text-base text-muted-foreground">/</span> {bankCount}</p>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-muted-foreground mb-2" />
            <p className="text-muted-foreground text-sm">Loading registrations...</p>
          </div>
        ) : receipts.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <Users className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-muted-foreground">No registrations yet.</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">#</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Date</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Name</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Email</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Phone</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Method</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Status</th>
                    <th className="font-heading font-semibold text-muted-foreground py-3 px-4 text-left text-xs uppercase tracking-wider">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {receipts.map((r, i) => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{i + 1}</td>
                      <td className="py-3 px-4 text-muted-foreground whitespace-nowrap text-xs">
                        {new Date(r.created_at).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" })}
                        <br />
                        <span className="text-[10px] text-muted-foreground/60">
                          {new Date(r.created_at).toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold whitespace-nowrap">{r.first_name} {r.last_name}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{r.email}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{r.phone || "—"}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block bg-secondary/15 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                          {r.payment_method}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                          r.status === "pending" ? "bg-amber-500/15 text-amber-400" :
                          r.status === "verified" ? "bg-green-500/15 text-green-400" :
                          "bg-red-500/15 text-red-400"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setPreviewUrl(r.file_url)}
                            className="inline-flex items-center gap-1 text-secondary hover:underline text-xs"
                            title="Preview receipt"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            View
                          </button>
                          <a
                            href={r.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-xs"
                            title="Open in new tab"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Receipt Preview Modal */}
      {previewUrl && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewUrl(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl overflow-hidden max-w-lg w-full max-h-[85vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-heading font-bold text-sm">Receipt Preview</h3>
              <button onClick={() => setPreviewUrl(null)} className="text-muted-foreground hover:text-foreground text-xl leading-none">&times;</button>
            </div>
            <div className="overflow-auto flex-1 p-4 flex items-center justify-center bg-muted/20">
              <img src={previewUrl} alt="Receipt" className="max-w-full max-h-[70vh] rounded-lg object-contain" />
            </div>
            <div className="p-3 border-t border-border text-center">
              <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-secondary text-xs font-semibold hover:underline inline-flex items-center gap-1">
                <ExternalLink className="w-3 h-3" /> Open full size
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
