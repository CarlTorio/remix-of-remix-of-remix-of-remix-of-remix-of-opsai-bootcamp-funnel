import { useState } from "react";
import {
  Sun, Moon,
  UtensilsCrossed, ShoppingCart, Store, Briefcase,
  LayoutDashboard, ShoppingBag, Package, Users, BarChart3,
  DollarSign, Receipt, AlertCircle, TrendingUp, TrendingDown,
  Plus, PlusCircle, Printer
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const tabs = [
  { id: 0, icon: UtensilsCrossed, label: "F&B / Restaurant" },
  { id: 1, icon: ShoppingCart, label: "E-commerce" },
  { id: 2, icon: Store, label: "Retail / Distribution" },
  { id: 3, icon: Briefcase, label: "Service / Agency" },
];

const fnbNav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingBag, label: "Orders", active: false },
  { icon: UtensilsCrossed, label: "Menu", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: Users, label: "Suppliers", active: false },
  { icon: BarChart3, label: "Reports", active: false },
];

const fnbKPIs = [
  { icon: DollarSign, label: "TODAY'S SALES", value: "₱47,850", trend: "+12.5%", trendColor: "green" },
  { icon: ShoppingBag, label: "ORDERS", value: "143", trend: "+8.2%", trendColor: "green" },
  { icon: Receipt, label: "AVG TICKET", value: "₱335", trend: "+4.1%", trendColor: "green" },
  { icon: AlertCircle, label: "LOW STOCK", value: "7 items", trend: "-2 items", trendColor: "red" },
];

const fnbHourlyData = [
  { hour: "7AM", sales: 2400 }, { hour: "8AM", sales: 3800 }, { hour: "9AM", sales: 2900 },
  { hour: "10AM", sales: 3200 }, { hour: "11AM", sales: 4100 }, { hour: "12PM", sales: 6800 },
  { hour: "1PM", sales: 5900 }, { hour: "2PM", sales: 3400 }, { hour: "3PM", sales: 2800 },
  { hour: "4PM", sales: 3100 }, { hour: "5PM", sales: 4200 }, { hour: "6PM", sales: 5500 },
  { hour: "7PM", sales: 7200 }, { hour: "8PM", sales: 5800 }, { hour: "9PM", sales: 3900 },
  { hour: "10PM", sales: 2100 },
];

const fnbOrders = [
  { table: "Table 5", items: "2x Coffee, 1x Cake", amount: "₱890", time: "2 min ago", status: "new" },
  { table: "Table 12", items: "Family Meal Set", amount: "₱1,450", time: "5 min ago", status: "preparing" },
  { table: "Take-out #142", items: "3x Iced Latte", amount: "₱540", time: "8 min ago", status: "ready" },
  { table: "Table 3", items: "Breakfast combo", amount: "₱680", time: "12 min ago", status: "served" },
  { table: "Delivery #89", items: "Lunch special x2", amount: "₱1,200", time: "15 min ago", status: "served" },
];

const fnbCategoryData = [
  { name: "Main Dishes", value: 45, color: "#ffb700" },
  { name: "Drinks", value: 30, color: "#fcd34d" },
  { name: "Desserts", value: 25, color: "#fde68a" },
];

const statusStyles: Record<string, { light: string; dark: string }> = {
  new: { light: "bg-blue-100 text-blue-700", dark: "bg-blue-500/20 text-blue-400" },
  preparing: { light: "bg-orange-100 text-orange-700", dark: "bg-orange-500/20 text-orange-400" },
  ready: { light: "bg-green-100 text-green-700", dark: "bg-green-500/20 text-green-400" },
  served: { light: "bg-slate-100 text-slate-600", dark: "bg-slate-700 text-slate-400" },
};

const CustomTooltip = ({ active, payload, label, isDark }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={`${isDark ? "bg-[#1E2A44] border-[#2A3A5C]" : "bg-white border-slate-200"} border rounded-lg px-3 py-2 shadow-lg`}>
      <p className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{label}</p>
      <p className="text-xs text-[#ffb700] font-bold">₱{payload[0].value.toLocaleString()}</p>
    </div>
  );
};

const FnBDashboard = ({ isDark }: { isDark: boolean }) => {
  const d = isDark;
  return (
    <div className="flex min-h-[600px] w-full">
      {/* Sidebar */}
      <div className={`w-48 p-4 hidden md:flex flex-col gap-1 transition-colors duration-500 ${d ? "bg-[#131A2E] border-r border-[#1E2A44]" : "bg-white border-r border-slate-200"}`}>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[#ffb700] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">K</span>
          </div>
          <div>
            <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>Kape Ni Ana</div>
            <div className={`text-[10px] ${d ? "text-gray-500" : "text-slate-400"}`}>POS System</div>
          </div>
        </div>
        {fnbNav.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors cursor-pointer ${
              item.active ? "bg-[#ffb700]/15 text-[#ffb700] font-semibold" : d ? "text-gray-500 hover:bg-[#1A2238]" : "text-slate-500 hover:bg-slate-100"
            }`}>
              <Icon className="w-4 h-4" /> {item.label}
            </button>
          );
        })}
      </div>

      {/* Main */}
      <div className="flex-1 p-6 flex flex-col gap-5 transition-colors duration-500">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <div className={`text-lg font-semibold ${d ? "text-white" : "text-slate-900"}`}>Good morning, Juan 👋</div>
            <div className={`text-xs ${d ? "text-gray-500" : "text-slate-500"}`}>Here's what's happening at your restaurant today</div>
          </div>
          <div className={`px-3 py-1.5 rounded-full text-xs ${d ? "bg-[#1E2A44] text-gray-400" : "bg-slate-100 text-slate-600"}`}>
            📅 Today — {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fnbKPIs.map((kpi) => {
            const Icon = kpi.icon;
            const isRed = kpi.trendColor === "red";
            return (
              <div key={kpi.label} className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                d ? "bg-[#131A2E] border-[#1E2A44] hover:border-[#ffb700]/40" : "bg-white border-slate-200 hover:border-[#ffb700]/40"
              }`}>
                <div className="w-9 h-9 rounded-lg bg-[#ffb700]/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#ffb700]" />
                </div>
                <div className={`uppercase tracking-wider text-[10px] ${d ? "text-gray-500" : "text-slate-500"}`}>{kpi.label}</div>
                <div className={`text-2xl font-bold ${d ? "text-white" : "text-slate-900"}`} style={{ fontVariantNumeric: "tabular-nums" }}>{kpi.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {isRed ? <TrendingDown className="w-3 h-3 text-red-500" /> : <TrendingUp className="w-3 h-3 text-green-500" />}
                  <span className={`text-[11px] font-medium ${isRed ? "text-red-500" : "text-green-500"}`}>{kpi.trend}</span>
                  <span className={`text-[10px] ${d ? "text-gray-600" : "text-slate-400"}`}>vs yesterday</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sales by Hour Chart */}
        <div className={`p-5 rounded-xl border ${d ? "bg-[#131A2E] border-[#1E2A44]" : "bg-white border-slate-200"}`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>Sales by Hour</div>
              <div className={`text-xs ${d ? "text-gray-500" : "text-slate-500"}`}>Today's performance</div>
            </div>
            <div className={`px-2.5 py-1 rounded-full text-[10px] ${d ? "bg-[#1E2A44] text-gray-400" : "bg-slate-100 text-slate-500"}`}>Last updated: now</div>
          </div>
          <div className="w-full h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fnbHourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={d ? "#1E2A44" : "#e2e8f0"} />
                <XAxis dataKey="hour" stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} />
                <YAxis stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} tickFormatter={(v) => `₱${v / 1000}k`} />
                <Tooltip content={<CustomTooltip isDark={d} />} />
                <Bar dataKey="sales" fill="#ffb700" radius={[6, 6, 0, 0]} isAnimationActive={true} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Recent Orders */}
          <div className={`col-span-1 md:col-span-2 p-5 rounded-xl border ${d ? "bg-[#131A2E] border-[#1E2A44]" : "bg-white border-slate-200"}`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>Recent Orders</div>
              <span className="text-xs text-[#ffb700] cursor-pointer hover:underline">View all →</span>
            </div>
            {fnbOrders.map((order, i) => {
              const st = statusStyles[order.status];
              return (
                <div key={i} className={`flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg cursor-pointer transition-colors ${
                  i < fnbOrders.length - 1 ? (d ? "border-b border-[#1E2A44]" : "border-b border-slate-100") : ""
                } ${d ? "hover:bg-[#1A2238]" : "hover:bg-slate-50"}`}>
                  <div>
                    <div className={`text-sm font-semibold ${d ? "text-white" : "text-slate-900"}`}>{order.table}</div>
                    <div className={`text-xs ${d ? "text-gray-500" : "text-slate-500"}`}>{order.items}</div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    <div className="text-sm font-bold text-[#ffb700]" style={{ fontVariantNumeric: "tabular-nums" }}>{order.amount}</div>
                    <div className={`text-[10px] ${d ? "text-gray-600" : "text-slate-400"}`}>{order.time}</div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase ${d ? st.dark : st.light}`}>{order.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Menu Categories */}
          <div className={`p-5 rounded-xl border ${d ? "bg-[#131A2E] border-[#1E2A44]" : "bg-white border-slate-200"}`}>
            <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>Menu Categories</div>
            <div className={`text-xs mb-3 ${d ? "text-gray-500" : "text-slate-500"}`}>Today's sales mix</div>
            <div className="w-full h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={fnbCategoryData} innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value" isAnimationActive={true}>
                    {fnbCategoryData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              {fnbCategoryData.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className={`text-xs ${d ? "text-gray-400" : "text-slate-600"}`}>{cat.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[#ffb700]">{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#ffb700] text-black transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
            <Plus className="w-4 h-4" /> New Order
          </button>
          <button className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
            d ? "bg-[#1E2A44] text-gray-300 border border-[#2A3A5C]" : "bg-white text-slate-700 border border-slate-200"
          }`}>
            <PlusCircle className="w-4 h-4" /> Add Menu Item
          </button>
          <button className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
            d ? "bg-[#1E2A44] text-gray-300 border border-[#2A3A5C]" : "bg-white text-slate-700 border border-slate-200"
          }`}>
            <Printer className="w-4 h-4" /> Print Report
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <section
      className="w-full py-24 px-6 mt-12 relative"
      style={{
        background: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at top, rgba(255,183,0,0.05), transparent 60%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-[#ffb700] rounded-full animate-pulse" />
          <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">
            SEE WHAT YOU CAN BUILD
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          Real Systems, <span className="text-[#ffb700]">Built By Owners</span> Like You
        </h2>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Click through 4 sample dashboards built inside the bootcamp. This is the kind of system you'll build yourself — no developers, no{" "}
          <span className="text-[#ffb700] font-semibold">₱500,000+</span> software.
        </p>

        <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-b from-[#1a1a24] to-[#0f0f16] border border-[#ffb700]/20 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(255,183,0,0.08)]">
          {/* Top Controls Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#ffb700]/15">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-500 text-xs font-mono">sample-dashboard.ops-ai.ph</span>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              {isDark ? "Dark" : "Light"}
            </button>
          </div>

          {/* Tabs Row */}
          <div className="flex flex-wrap gap-2 p-4 border-b border-[#ffb700]/15 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#ffb700] text-black shadow-[0_4px_20px_rgba(255,183,0,0.4)]"
                      : "bg-transparent text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Inner Dashboard Area */}
          <div className="p-2 md:p-3">
            <div
              className={`rounded-2xl overflow-hidden transition-colors duration-500 ${
                isDark ? "bg-[#0F1420]" : "bg-[#F8FAFC]"
              }`}
            >
              {activeTab === 0 ? (
                <FnBDashboard isDark={isDark} />
              ) : (
                <div className={`min-h-[600px] flex items-center justify-center`}>
                  <span className={`text-sm ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                    {tabs[activeTab].label} dashboard loading...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDashboardPreview;
