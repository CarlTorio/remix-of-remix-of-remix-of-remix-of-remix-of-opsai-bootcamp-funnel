import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ExternalLink, RefreshCw } from "lucide-react";

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
  const [authenticated, setAuthenticated] = useState(false);

  // Simple password gate (not production-grade, but functional)
  const ADMIN_PASS = "opsai2025";

  const fetchReceipts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("receipts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setReceipts(data);
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) fetchReceipts();
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border rounded-xl p-6 w-full max-w-sm space-y-4">
          <h1 className="font-heading font-bold text-xl text-foreground text-center">Admin Access</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && password === ADMIN_PASS && setAuthenticated(true)}
            className="w-full bg-muted/50 border border-border rounded-lg px-3 py-2 text-sm text-foreground"
          />
          <button
            onClick={() => password === ADMIN_PASS && setAuthenticated(true)}
            className="w-full bg-secondary text-secondary-foreground font-heading font-bold text-sm py-2.5 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-heading font-bold text-2xl">Payment Receipts</h1>
          <button
            onClick={fetchReceipts}
            className="flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {loading ? (
          <p className="text-muted-foreground text-sm">Loading...</p>
        ) : receipts.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-muted-foreground">No receipts uploaded yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Date</th>
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Name</th>
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Email</th>
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Phone</th>
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Method</th>
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Status</th>
                  <th className="font-heading font-semibold text-muted-foreground py-3 px-3">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {receipts.map(r => (
                  <tr key={r.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-3 text-muted-foreground whitespace-nowrap">
                      {new Date(r.created_at).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="py-3 px-3 font-semibold">{r.first_name} {r.last_name}</td>
                    <td className="py-3 px-3 text-muted-foreground">{r.email}</td>
                    <td className="py-3 px-3 text-muted-foreground">{r.phone || "—"}</td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-secondary/15 text-secondary text-xs font-semibold px-2 py-0.5 rounded-full capitalize">
                        {r.payment_method}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                        r.status === "pending" ? "bg-amber-500/15 text-amber-400" :
                        r.status === "verified" ? "bg-green-500/15 text-green-400" :
                        "bg-red-500/15 text-red-400"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <a
                        href={r.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-secondary hover:underline text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {r.file_name}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
