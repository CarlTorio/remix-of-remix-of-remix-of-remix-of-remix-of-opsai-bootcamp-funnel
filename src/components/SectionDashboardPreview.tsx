import { useState, useEffect, useRef } from "react";
import {
  Sun, Moon,
  UtensilsCrossed, ShoppingCart, Store, Briefcase,
  LayoutDashboard, ShoppingBag, Package, Users, BarChart3,
  DollarSign, Receipt, AlertCircle, TrendingUp, TrendingDown,
  Plus, PlusCircle, Printer,
  Warehouse, Truck, RotateCcw, Boxes, Wallet, Minus,
  ArrowRightLeft, FolderKanban, CheckSquare, FileText,
  UserCircle, UserPlus, FilePlus, Clock,
  Sparkles, ArrowRight,
  Search, MessageSquare, Star, Settings, MoreVertical,
  Palette, ChevronRight, RefreshCw, Bell, ChevronDown, ArrowUpDown
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
  AreaChart, Area, LineChart, Line
} from "recharts";
import type { LucideIcon } from "lucide-react";

// ─── CountUp Component ───

function CountUp({ value, prefix = "", suffix = "", duration = 1500 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (value <= 0) { setDisplayValue(value); return; }
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span style={{ fontVariantNumeric: "tabular-nums" }}>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
}

// ─── Shared Sub-Components ───

const CustomTooltip = ({ active, payload, label, isDark }: any) => {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  return (
    <div className={`${isDark ? "bg-[#1E2A44] border-[#2A3A5C]" : "bg-white border-slate-200"} border rounded-lg px-3 py-2 shadow-lg`}>
      <p className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{label}</p>
      <p className="text-xs text-[#ffb700] font-bold">₱{val.toLocaleString()}</p>
    </div>
  );
};

interface NavItem { icon: LucideIcon; label: string; active: boolean }
interface BrandInfo { letter: string; name: string; tagline: string }

const DashboardSidebar = ({ brand, nav, isDark, onDemoClick }: { brand: BrandInfo; nav: NavItem[]; isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className={`w-48 p-4 hidden md:flex flex-col gap-1 transition-colors duration-500 ${d ? "bg-[#131A2E] border-r border-[#1E2A44]" : "bg-white border-r border-slate-200"}`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-[#ffb700] rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-lg">{brand.letter}</span>
        </div>
        <div>
          <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>{brand.name}</div>
          <div className={`text-[10px] ${d ? "text-gray-500" : "text-slate-400"}`}>{brand.tagline}</div>
        </div>
      </div>
      {nav.map((item) => {
        const Icon = item.icon;
        return (
          <button key={item.label} onClick={onDemoClick} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors cursor-pointer ${
            item.active ? "bg-[#ffb700]/15 text-[#ffb700] font-semibold" : d ? "text-gray-500 hover:bg-[#1A2238]" : "text-slate-500 hover:bg-slate-100"
          }`}>
            <Icon className="w-4 h-4" /> {item.label}
          </button>
        );
      })}
    </div>
  );
};

interface KPIData { icon: LucideIcon; label: string; value: number; prefix?: string; suffix?: string; displayStatic?: string; trend: string; trendColor: string }

const KPICards = ({ data, isDark, onDemoClick }: { data: KPIData[]; isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {data.map((kpi) => {
        const Icon = kpi.icon;
        const isRed = kpi.trendColor === "red";
        const isNeutral = kpi.trendColor === "neutral";
        return (
          <div key={kpi.label} onClick={onDemoClick} className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
            d ? "bg-[#131A2E] border-[#1E2A44] hover:border-[#ffb700]/40" : "bg-white border-slate-200 hover:border-[#ffb700]/40"
          }`}>
            <div className="w-9 h-9 rounded-lg bg-[#ffb700]/10 flex items-center justify-center mb-3">
              <Icon className="w-4 h-4 text-[#ffb700]" />
            </div>
            <div className={`uppercase tracking-wider text-[10px] ${d ? "text-gray-500" : "text-slate-500"}`}>{kpi.label}</div>
            <div className={`text-2xl font-bold ${d ? "text-white" : "text-slate-900"}`}>
              {kpi.displayStatic ? kpi.displayStatic : <CountUp value={kpi.value} prefix={kpi.prefix || ""} suffix={kpi.suffix || ""} />}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {isRed ? <TrendingDown className="w-3 h-3 text-red-500" /> : isNeutral ? <Minus className="w-3 h-3 text-slate-500" /> : <TrendingUp className="w-3 h-3 text-green-500" />}
              <span className={`text-[11px] font-medium ${isRed ? "text-red-500" : isNeutral ? (d ? "text-gray-400" : "text-slate-500") : "text-green-500"}`}>{kpi.trend}</span>
              {!isNeutral && <span className={`text-[10px] ${d ? "text-gray-600" : "text-slate-400"}`}>vs yesterday</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ListItem { id: string; desc: string; amount: string; time: string; status: string }

const statusMap: Record<string, { light: string; dark: string }> = {
  new: { light: "bg-blue-100 text-blue-700", dark: "bg-blue-500/20 text-blue-400" },
  preparing: { light: "bg-orange-100 text-orange-700", dark: "bg-orange-500/20 text-orange-400" },
  ready: { light: "bg-green-100 text-green-700", dark: "bg-green-500/20 text-green-400" },
  served: { light: "bg-slate-100 text-slate-600", dark: "bg-slate-700 text-slate-400" },
  processing: { light: "bg-orange-100 text-orange-700", dark: "bg-orange-500/20 text-orange-400" },
  shipped: { light: "bg-green-100 text-green-700", dark: "bg-green-500/20 text-green-400" },
  return: { light: "bg-red-100 text-red-700", dark: "bg-red-500/20 text-red-400" },
  received: { light: "bg-green-100 text-green-700", dark: "bg-green-500/20 text-green-400" },
  "in-transit": { light: "bg-blue-100 text-blue-700", dark: "bg-blue-500/20 text-blue-400" },
  pending: { light: "bg-orange-100 text-orange-700", dark: "bg-orange-500/20 text-orange-400" },
  paid: { light: "bg-green-100 text-green-700", dark: "bg-green-500/20 text-green-400" },
  delivered: { light: "bg-green-100 text-green-700", dark: "bg-green-500/20 text-green-400" },
  review: { light: "bg-orange-100 text-orange-700", dark: "bg-orange-500/20 text-orange-400" },
  renewed: { light: "bg-purple-100 text-purple-700", dark: "bg-purple-500/20 text-purple-400" },
};

const DataList = ({ title, items, isDark, amountRedStatuses = [], onDemoClick }: { title: string; items: ListItem[]; isDark: boolean; amountRedStatuses?: string[]; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className={`col-span-1 md:col-span-2 p-5 rounded-xl border ${d ? "bg-[#131A2E] border-[#1E2A44]" : "bg-white border-slate-200"}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>{title}</div>
        <span onClick={onDemoClick} className="text-xs text-[#ffb700] cursor-pointer hover:underline">View all →</span>
      </div>
      {items.map((item, i) => {
        const st = statusMap[item.status] || statusMap.new;
        const isRedAmount = amountRedStatuses.includes(item.status);
        return (
          <div key={i} onClick={onDemoClick} className={`flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg cursor-pointer transition-colors ${
            i < items.length - 1 ? (d ? "border-b border-[#1E2A44]" : "border-b border-slate-100") : ""
          } ${d ? "hover:bg-[#1A2238]" : "hover:bg-slate-50"}`}>
            <div>
              <div className={`text-sm font-semibold ${d ? "text-white" : "text-slate-900"}`}>{item.id}</div>
              <div className={`text-xs ${d ? "text-gray-500" : "text-slate-500"}`}>{item.desc}</div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <div className={`text-sm font-bold ${isRedAmount ? "text-red-500" : "text-[#ffb700]"}`} style={{ fontVariantNumeric: "tabular-nums" }}>{item.amount}</div>
              <div className={`text-[10px] ${d ? "text-gray-600" : "text-slate-400"}`}>{item.time}</div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase ${d ? st.dark : st.light}`}>{item.status}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface DonutEntry { name: string; value: number; color: string }

const DonutCard = ({ title, subtitle, data, isDark }: { title: string; subtitle: string; data: DonutEntry[]; isDark: boolean }) => {
  const d = isDark;
  return (
    <div className={`p-5 rounded-xl border ${d ? "bg-[#131A2E] border-[#1E2A44]" : "bg-white border-slate-200"}`}>
      <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>{title}</div>
      <div className={`text-xs mb-3 ${d ? "text-gray-500" : "text-slate-500"}`}>{subtitle}</div>
      <div className="w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value" isAnimationActive={true}>
              {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {data.map((cat) => (
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
  );
};

interface ActionBtn { label: string; icon: LucideIcon; primary?: boolean }

const ActionButtons = ({ buttons, isDark, onDemoClick }: { buttons: ActionBtn[]; isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map((btn) => {
        const Icon = btn.icon;
        return (
          <button key={btn.label} onClick={onDemoClick} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
            btn.primary ? "bg-[#ffb700] text-black" : d ? "bg-[#1E2A44] text-gray-300 border border-[#2A3A5C]" : "bg-white text-slate-700 border border-slate-200"
          }`}>
            <Icon className="w-4 h-4" /> {btn.label}
          </button>
        );
      })}
    </div>
  );
};

const ChartCard = ({ title, subtitle, isDark, children }: { title: string; subtitle: string; isDark: boolean; children: React.ReactNode }) => {
  const d = isDark;
  return (
    <div className={`p-5 rounded-xl border ${d ? "bg-[#131A2E] border-[#1E2A44]" : "bg-white border-slate-200"}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>{title}</div>
          <div className={`text-xs ${d ? "text-gray-500" : "text-slate-500"}`}>{subtitle}</div>
        </div>
        <div className={`px-2.5 py-1 rounded-full text-[10px] ${d ? "bg-[#1E2A44] text-gray-400" : "bg-slate-100 text-slate-500"}`}>Last updated: now</div>
      </div>
      <div className="w-full h-[220px]">{children}</div>
    </div>
  );
};

const TopBar = ({ greeting, subtitle, isDark }: { greeting: string; subtitle: string; isDark: boolean }) => {
  const d = isDark;
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className={`text-lg font-semibold ${d ? "text-white" : "text-slate-900"}`}>{greeting}</div>
        <div className={`text-xs ${d ? "text-gray-500" : "text-slate-500"}`}>{subtitle}</div>
      </div>
      <div className={`px-3 py-1.5 rounded-full text-xs ${d ? "bg-[#1E2A44] text-gray-400" : "bg-slate-100 text-slate-600"}`}>
        📅 Today — {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

// ─── Dashboard Data ───

const fnbNav: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingBag, label: "Orders", active: false },
  { icon: UtensilsCrossed, label: "Menu", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: Users, label: "Suppliers", active: false },
  { icon: BarChart3, label: "Reports", active: false },
];
const fnbKPIs: KPIData[] = [
  { icon: DollarSign, label: "TODAY'S SALES", value: 47850, prefix: "₱", trend: "+12.5%", trendColor: "green" },
  { icon: ShoppingBag, label: "ORDERS", value: 143, trend: "+8.2%", trendColor: "green" },
  { icon: Receipt, label: "AVG TICKET", value: 335, prefix: "₱", trend: "+4.1%", trendColor: "green" },
  { icon: AlertCircle, label: "LOW STOCK", value: 7, suffix: " items", trend: "-2 items", trendColor: "red" },
];
const fnbHourlyData = [
  { hour: "7AM", sales: 2400 }, { hour: "8AM", sales: 3800 }, { hour: "9AM", sales: 2900 },
  { hour: "10AM", sales: 3200 }, { hour: "11AM", sales: 4100 }, { hour: "12PM", sales: 6800 },
  { hour: "1PM", sales: 5900 }, { hour: "2PM", sales: 3400 }, { hour: "3PM", sales: 2800 },
  { hour: "4PM", sales: 3100 }, { hour: "5PM", sales: 4200 }, { hour: "6PM", sales: 5500 },
  { hour: "7PM", sales: 7200 }, { hour: "8PM", sales: 5800 }, { hour: "9PM", sales: 3900 },
  { hour: "10PM", sales: 2100 },
];
const fnbOrders: ListItem[] = [
  { id: "Table 5", desc: "2x Coffee, 1x Cake", amount: "₱890", time: "2 min ago", status: "new" },
  { id: "Table 12", desc: "Family Meal Set", amount: "₱1,450", time: "5 min ago", status: "preparing" },
  { id: "Take-out #142", desc: "3x Iced Latte", amount: "₱540", time: "8 min ago", status: "ready" },
  { id: "Table 3", desc: "Breakfast combo", amount: "₱680", time: "12 min ago", status: "served" },
  { id: "Delivery #89", desc: "Lunch special x2", amount: "₱1,200", time: "15 min ago", status: "served" },
];
const fnbCategoryData: DonutEntry[] = [
  { name: "Main Dishes", value: 45, color: "#ffb700" },
  { name: "Drinks", value: 30, color: "#fcd34d" },
  { name: "Desserts", value: 25, color: "#fde68a" },
];

const FnBDashboard = ({ isDark, onDemoClick }: { isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className="flex min-h-[600px] w-full">
      <DashboardSidebar brand={{ letter: "K", name: "Kape Ni Ana", tagline: "POS System" }} nav={fnbNav} isDark={d} onDemoClick={onDemoClick} />
      <div className="flex-1 p-6 flex flex-col gap-5 transition-colors duration-500">
        <TopBar greeting="Good morning, Juan 👋" subtitle="Here's what's happening at your restaurant today" isDark={d} />
        <KPICards data={fnbKPIs} isDark={d} onDemoClick={onDemoClick} />
        <ChartCard title="Sales by Hour" subtitle="Today's performance" isDark={d}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fnbHourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke={d ? "#1E2A44" : "#e2e8f0"} />
              <XAxis dataKey="hour" stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} />
              <YAxis stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} tickFormatter={(v) => `₱${v / 1000}k`} />
              <Tooltip content={<CustomTooltip isDark={d} />} />
              <Bar dataKey="sales" fill="#ffb700" radius={[6, 6, 0, 0]} isAnimationActive={true} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <DataList title="Recent Orders" items={fnbOrders} isDark={d} onDemoClick={onDemoClick} />
          <DonutCard title="Menu Categories" subtitle="Today's sales mix" data={fnbCategoryData} isDark={d} />
        </div>
        <ActionButtons buttons={[
          { label: "New Order", icon: Plus, primary: true },
          { label: "Add Menu Item", icon: PlusCircle },
          { label: "Print Report", icon: Printer },
        ]} isDark={d} onDemoClick={onDemoClick} />
      </div>
    </div>
  );
};

// ─── E-commerce Dashboard (Green Theme) ───

const ecomDonutData: DonutEntry[] = [
  { name: "Shopee", value: 55, color: "#a3e635" },
  { name: "Lazada", value: 25, color: "#84cc16" },
  { name: "Website", value: 12, color: "#d9f99d" },
  { name: "TikTok", value: 8, color: "#ecfccb" },
];

const profitData = Array.from({ length: 20 }, (_, i) => ({
  day: i,
  value: 80 + Math.sin(i * 0.5) * 15 + i * 2 + (i % 3) * 4,
}));

const ecomCustomers = [
  { name: "Danny Liu", email: "danny@gmail.com", orders: 1023, value: "₱37,431", avatarColor: "#f43f5e" },
  { name: "Bella Deviant", email: "bella@gmail.com", orders: 963, value: "₱30,423", avatarColor: "#f59e0b" },
  { name: "Darrell Steward", email: "darrell@gmail.com", orders: 843, value: "₱28,549", avatarColor: "#10b981" },
];

const EcommerceDashboard = ({ isDark, onDemoClick }: { isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  const card = `rounded-xl ${d ? "bg-[#131B2E] border border-[#1E2A44]" : "bg-white border border-slate-200"}`;

  const ecomNavItems = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: ShoppingCart, label: "Orders", active: false },
    { icon: Package, label: "Products", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
  ];
  const ecomSettingsNav = [
    { icon: MessageSquare, label: "Messages" },
    { icon: Star, label: "Reviews" },
    { icon: Settings, label: "Settings" },
  ];
  const ecomKPIs = [
    { label: "Net Revenue", value: 3131021, prefix: "₱", trend: "+0.4%", subtitle: "vs last month", color: "green" },
    { label: "ARR", value: 1511121, prefix: "₱", trend: "+32%", subtitle: "vs last quarter", color: "green" },
    { label: "Revenue Goal", value: 71, suffix: "%", trend: "₱1.1M target", subtitle: "", color: "neutral", isGauge: true },
    { label: "New Orders", value: 18221, trend: "+11%", subtitle: "vs last month", color: "green" },
  ];
  const notifications = [
    { icon: Users, text: "56 new users registered", time: "Just now" },
    { icon: ShoppingBag, text: "132 orders placed", time: "59 minutes ago" },
    { icon: DollarSign, text: "Funds withdrawn", time: "12 hours ago" },
  ];
  const activities = [
    { icon: Palette, text: "Changed the style", time: "Just now" },
    { icon: Plus, text: "177 products added", time: "47 minutes ago" },
  ];
  const contacts = [
    { name: "Sarah Kim", color: "#f43f5e", highlight: false },
    { name: "James Cruz", color: "#3b82f6", highlight: false },
    { name: "Nataniel Donowan", color: "#a3e635", highlight: true },
  ];
  const salesBreakdown = [
    { label: "Shopee", value: "₱55,640", color: "#a3e635" },
    { label: "Lazada", value: "₱11,420", color: "#84cc16" },
    { label: "Website", value: "₱1,840", color: "#d9f99d" },
    { label: "TikTok", value: "₱2,120", color: "#ecfccb" },
  ];

  return (
    <div className={`grid grid-cols-12 gap-3 h-full p-4 transition-colors duration-500 ${d ? "bg-[#0A0F1A]" : "bg-[#F8FAFC]"}`}>
      {/* LEFT SIDEBAR */}
      <div className={`col-span-2 hidden lg:flex flex-col gap-1 p-3 rounded-xl ${card}`}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
            <span className="text-black font-bold text-sm">S</span>
          </div>
          <span className={`text-xs font-bold ${d ? "text-white" : "text-slate-900"}`}>ShopHub PH</span>
        </div>
        <div className={`flex items-center gap-2 rounded-lg px-2 py-1.5 mb-3 ${d ? "bg-[#1E2A44]" : "bg-slate-100"}`}>
          <Search className="w-3 h-3 text-gray-500" />
          <span className="text-[10px] text-gray-500 flex-1">Search...</span>
          <span className={`text-[9px] px-1 rounded ${d ? "bg-[#2A3A5C] text-gray-500" : "bg-slate-200 text-slate-500"}`}>⌘K</span>
        </div>
        <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-1 mt-2">Dashboards</div>
        {ecomNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} onClick={onDemoClick} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] cursor-pointer transition-colors ${
              item.active ? "bg-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(163,230,53,0.3)]" : d ? "text-gray-500 hover:bg-[#1E2A44]" : "text-slate-500 hover:bg-slate-100"
            }`}>
              <Icon className="w-3.5 h-3.5" /> {item.label}
            </button>
          );
        })}
        <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-1 mt-3">Settings</div>
        {ecomSettingsNav.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} onClick={onDemoClick} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] cursor-pointer transition-colors ${d ? "text-gray-500 hover:bg-[#1E2A44]" : "text-slate-500 hover:bg-slate-100"}`}>
              <Icon className="w-3.5 h-3.5" /> {item.label}
            </button>
          );
        })}
      </div>

      {/* MAIN AREA */}
      <div className="col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col gap-3">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <div className={`text-base font-bold ${d ? "text-white" : "text-slate-900"}`}>Overview</div>
            <div className="text-[10px] text-gray-500">Dashboards / Overview</div>
          </div>
          <div className={`px-2 py-1 rounded-md text-[10px] ${d ? "bg-[#1E2A44] text-gray-400" : "bg-slate-100 text-slate-600"}`}>Today ▾</div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {ecomKPIs.map((kpi) => (
            <div key={kpi.label} onClick={onDemoClick} className={`p-3 rounded-xl cursor-pointer hover:-translate-y-0.5 transition-all ${card} relative`}>
              <div className={`text-[10px] uppercase tracking-wider ${d ? "text-gray-500" : "text-slate-500"}`}>{kpi.label}</div>
              <div className={`text-xl font-bold mt-1 ${d ? "text-white" : "text-slate-900"}`}>
                <CountUp value={kpi.value} prefix={kpi.prefix || ""} suffix={kpi.suffix || ""} />
              </div>
              {kpi.isGauge ? (
                <svg className="absolute top-3 right-3" width="36" height="36" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" stroke={d ? "#1E2A44" : "#e2e8f0"} strokeWidth={4} fill="none" />
                  <circle cx="20" cy="20" r="16" stroke="#a3e635" strokeWidth={4} fill="none" strokeDasharray={`${71 * 1.005}, 100.5`} strokeLinecap="round" transform="rotate(-90 20 20)" />
                </svg>
              ) : (
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-lime-400" />
                  <span className="text-[10px] text-lime-400 font-medium">{kpi.trend}</span>
                </div>
              )}
              {kpi.subtitle && <div className="text-[9px] text-gray-500 mt-0.5">{kpi.subtitle}</div>}
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-12 gap-3">
          {/* Sales Overview */}
          <div className={`col-span-12 md:col-span-7 p-4 ${card}`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>Sales Overview</span>
              <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" onClick={onDemoClick} />
            </div>
            <div className="flex gap-4">
              <div className="w-[120px] h-[120px] relative flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={ecomDonutData} innerRadius={42} outerRadius={58} paddingAngle={2} dataKey="value" isAnimationActive>
                      {ecomDonutData.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-base font-bold ${d ? "text-white" : "text-slate-900"}`}>102k</span>
                  <span className="text-[9px] text-gray-500">Weekly Visits</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-gray-500">Number of Sales</div>
                <div className={`text-lg font-bold mb-2 ${d ? "text-white" : "text-slate-900"}`} style={{ fontVariantNumeric: "tabular-nums" }}>₱71,020</div>
                <div className="grid grid-cols-2 gap-2">
                  {salesBreakdown.map((s) => (
                    <div key={s.label} className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <span className="text-[10px] text-gray-500">{s.label}</span>
                      <span className={`text-[11px] font-bold ml-auto ${d ? "text-white" : "text-slate-900"}`} style={{ fontVariantNumeric: "tabular-nums" }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right mini cards */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className={`p-3 ${card} cursor-pointer`} onClick={onDemoClick}>
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="w-3 h-3 text-lime-400" />
                  <span className="text-[9px] text-gray-500">New customers</span>
                </div>
                <div className={`text-lg font-bold ${d ? "text-white" : "text-slate-900"}`}><CountUp value={862} /></div>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-red-400 font-medium">-8%</span>
                  <span className="text-[9px] text-gray-500">Last Week</span>
                </div>
              </div>
              <div className={`p-3 ${card} cursor-pointer`} onClick={onDemoClick}>
                <div className="flex items-center gap-1 mb-1">
                  <BarChart3 className="w-3 h-3 text-lime-400" />
                  <span className="text-[9px] text-gray-500">Total profit</span>
                </div>
                <div className={`text-lg font-bold ${d ? "text-white" : "text-slate-900"}`}>₱25.6k</div>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-green-400 font-medium">+42%</span>
                  <span className="text-[9px] text-gray-500">Weekly Profit</span>
                </div>
              </div>
            </div>
            {/* Profit chart */}
            <div className={`p-3 flex-1 ${card}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-xs font-semibold ${d ? "text-white" : "text-slate-900"}`}>Total Profit</div>
                  <div className="text-[9px] text-gray-500">February 2024</div>
                </div>
                <span className="text-base font-bold text-lime-400" style={{ fontVariantNumeric: "tabular-nums" }}>₱136,755.77</span>
              </div>
              <div className="w-full h-[70px] mt-1" style={{ filter: "drop-shadow(0 0 8px rgba(163,230,53,0.4))" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={profitData}>
                    <defs>
                      <linearGradient id="greenGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a3e635" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="#a3e635" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#a3e635" strokeWidth={2} fill="url(#greenGlow)" isAnimationActive />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Customer list */}
        <div className={`p-4 ${card} hidden md:block`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-bold ${d ? "text-white" : "text-slate-900"}`}>Customer List</span>
            <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" onClick={onDemoClick} />
          </div>
          <div className="flex items-center text-[10px] text-gray-500 uppercase tracking-wider mb-1 px-1">
            <span className="flex-1">Name</span>
            <span className="w-16 text-center">Orders</span>
            <span className="w-20 text-right">Total Value</span>
          </div>
          {ecomCustomers.map((c, i) => (
            <div key={i} onClick={onDemoClick} className={`flex items-center py-2 px-1 rounded-lg cursor-pointer transition-colors ${
              i < ecomCustomers.length - 1 ? (d ? "border-b border-[#1E2A44]" : "border-b border-slate-100") : ""
            } ${d ? "hover:bg-[#1A2238]" : "hover:bg-slate-50"}`}>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: c.avatarColor }}>
                  {c.name[0]}
                </div>
                <div>
                  <div className={`text-[11px] font-semibold ${d ? "text-white" : "text-slate-900"}`}>{c.name}</div>
                  <div className="text-[9px] text-gray-500">{c.email}</div>
                </div>
              </div>
              <span className="w-16 text-center text-[11px]" style={{ fontVariantNumeric: "tabular-nums", color: d ? "#e2e8f0" : "#334155" }}>{c.orders.toLocaleString()}</span>
              <span className={`w-20 text-right text-[11px] font-bold ${d ? "text-white" : "text-slate-900"}`} style={{ fontVariantNumeric: "tabular-nums" }}>{c.value}</span>
            </div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="p-3 rounded-xl bg-lime-400 relative overflow-hidden cursor-pointer" onClick={onDemoClick}>
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-lime-300 rounded-full opacity-50" />
          <div className="absolute -right-1 -bottom-3 w-8 h-8 bg-lime-300 rounded-full opacity-30" />
          <div className="relative">
            <div className="text-[10px] font-semibold text-black">💎 Premium Plan</div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-black">₱30/month</span>
              <span className="bg-black text-lime-400 text-[10px] px-3 py-1 rounded-full font-bold">Get Started →</span>
            </div>
            <div className="text-[9px] text-black/70">Upgrade your dashboard</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className={`col-span-3 hidden xl:flex flex-col gap-3 p-3 rounded-xl ${card}`}>
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold ${d ? "text-white" : "text-slate-900"}`}>Notifications</span>
            <span className="bg-lime-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full">5</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
        </div>
        {notifications.map((n, i) => {
          const Icon = n.icon;
          return (
            <div key={i} className={`flex items-start gap-2 py-2 ${i < notifications.length - 1 ? (d ? "border-b border-[#1E2A44]" : "border-b border-slate-100") : ""}`}>
              <div className="w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-lime-400" />
              </div>
              <div>
                <div className={`text-[10px] ${d ? "text-gray-300" : "text-slate-700"}`}>{n.text}</div>
                <div className="text-[9px] text-gray-500">{n.time}</div>
              </div>
            </div>
          );
        })}

        {/* Activities */}
        <div className={`text-xs font-bold mt-2 ${d ? "text-white" : "text-slate-900"}`}>Activities</div>
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="flex items-start gap-2 py-1.5">
              <div className="w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-lime-400" />
              </div>
              <div>
                <div className={`text-[10px] ${d ? "text-gray-300" : "text-slate-700"}`}>{a.text}</div>
                <div className="text-[9px] text-gray-500">{a.time}</div>
              </div>
            </div>
          );
        })}

        {/* Contacts */}
        <div className={`text-xs font-bold mt-2 ${d ? "text-white" : "text-slate-900"}`}>Contacts</div>
        {contacts.map((c) => (
          <div key={c.name} className={`flex items-center gap-2 py-1.5 px-1 rounded ${c.highlight ? "bg-lime-400/10" : ""}`}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: c.color }}>
              {c.name[0]}
            </div>
            <span className={`text-[10px] ${d ? "text-gray-300" : "text-slate-700"}`}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Retail Dashboard (Blue Theme) ───

const salesWaveData = Array.from({ length: 20 }, (_, i) => ({
  point: i,
  value: 80 + Math.sin(i * 0.6) * 20 + i * 1.5 + (i % 3) * 4,
}));

const weeklyTrend = [
  { week: "W1", sales: 1800000 },
  { week: "W2", sales: 2100000 },
  { week: "W3", sales: 1950000 },
  { week: "W4", sales: 2400000 },
  { week: "W5", sales: 2650000 },
  { week: "W6", sales: 2847560 },
];

const branchList = [
  { name: "SM North", location: "Quezon City", sales: "₱145,200", change: "+8.4%", up: true },
  { name: "BGC Central", location: "Taguig", sales: "₱132,800", change: "+12.1%", up: true },
  { name: "Makati Hub", location: "Makati", sales: "₱118,450", change: "-2.3%", up: false },
  { name: "Ortigas", location: "Pasig", sales: "₱98,320", change: "+5.7%", up: true },
];

const RetailDashboard = ({ isDark, onDemoClick }: { isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  const card = `rounded-xl ${d ? "bg-[#131B2E] border border-[#1E2A44]" : "bg-white border border-slate-200"}`;

  const retailNavItems = [
    { icon: LayoutDashboard, active: true, label: "Dashboard" },
    { icon: Store, active: false, label: "Branches" },
    { icon: Boxes, active: false, label: "Stock" },
    { icon: Wallet, active: false, label: "Collections" },
    { icon: BarChart3, active: false, label: "Reports" },
    { icon: Users, active: false, label: "Team" },
  ];

  const BlueTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className={`${d ? "bg-[#1E2A44] border-[#2A3A5C]" : "bg-white border-slate-200"} border rounded-lg px-3 py-2 shadow-lg`}>
        <p className={`text-xs font-semibold ${d ? "text-white" : "text-slate-900"}`}>{label}</p>
        <p className="text-xs text-blue-500 font-bold">₱{payload[0].value.toLocaleString()}</p>
      </div>
    );
  };

  return (
    <div className={`flex gap-3 h-full p-4 transition-colors duration-500 ${d ? "bg-[#0B0F1A]" : "bg-[#F1F5F9]"}`}>
      {/* THIN ICON SIDEBAR */}
      <div className={`w-14 flex-shrink-0 hidden md:flex flex-col items-center gap-1 p-2 rounded-xl ${card}`}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        {retailNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} title={item.label} onClick={onDemoClick} className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
              item.active ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]" : d ? "text-gray-500 hover:bg-[#1E2A44] hover:text-blue-400" : "text-slate-500 hover:bg-slate-100 hover:text-blue-600"
            }`}>
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
        <button title="Settings" onClick={onDemoClick} className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all mt-auto ${d ? "text-gray-500 hover:bg-[#1E2A44] hover:text-blue-400" : "text-slate-500 hover:bg-slate-100 hover:text-blue-600"}`}>
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col gap-3 min-w-0">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <div className={`text-lg font-bold ${d ? "text-white" : "text-slate-900"}`}>Branch Network Overview</div>
            <div className="text-[10px] text-gray-500">Last update: 2 min ago</div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onDemoClick} className={`w-8 h-8 rounded-md flex items-center justify-center ${d ? "bg-[#1E2A44] border border-[#2A3A5C]" : "bg-white border border-slate-200"} cursor-pointer`}>
              <RefreshCw className={`w-4 h-4 ${d ? "text-gray-400" : "text-slate-500"}`} />
            </button>
            <button onClick={onDemoClick} className={`w-8 h-8 rounded-md flex items-center justify-center relative ${d ? "bg-[#1E2A44] border border-[#2A3A5C]" : "bg-white border border-slate-200"} cursor-pointer`}>
              <Bell className={`w-4 h-4 ${d ? "text-gray-400" : "text-slate-500"}`} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button onClick={onDemoClick} className="bg-blue-500 text-white text-[10px] px-3 py-1.5 rounded-md font-semibold cursor-pointer hover:bg-blue-600 transition-colors">+ Add Branch</button>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">R</span>
            </div>
          </div>
        </div>

        {/* Middle row: 3 cards */}
        <div className="grid grid-cols-12 gap-3">
          {/* Total Sales */}
          <div className={`col-span-12 md:col-span-5 p-4 ${card} relative overflow-hidden`}>
            <div className="text-[9px] uppercase tracking-widest text-gray-500">Total Sales (All Branches)</div>
            <div className={`text-3xl font-bold mt-1 ${d ? "text-white" : "text-slate-900"}`}>
              <CountUp value={892450} prefix="₱" />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded text-[10px] font-semibold">+15.2%</span>
              <span className="text-[9px] text-gray-500">vs last week</span>
            </div>
            <div className="w-full h-[120px] mt-3" style={{ filter: "drop-shadow(0 0 6px rgba(59,130,246,0.5))" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesWaveData}>
                  <defs>
                    <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2.5} fill="url(#blueGlow)" isAnimationActive />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Branch Performance */}
          <div className={`col-span-12 md:col-span-4 p-4 ${card}`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-bold ${d ? "text-white" : "text-slate-900"}`}>Branch Performance</span>
              <span className="text-[9px] text-gray-500">This Week ▾</span>
            </div>
            {branchList.map((b, i) => (
              <div key={i} onClick={onDemoClick} className={`flex items-center justify-between py-2 px-2 -mx-2 rounded cursor-pointer transition-colors ${
                i < branchList.length - 1 ? (d ? "border-b border-[#1E2A44]" : "border-b border-slate-100") : ""
              } ${d ? "hover:bg-[#1A2238]" : "hover:bg-slate-50"}`}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Store className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div>
                    <div className={`text-[11px] font-semibold ${d ? "text-white" : "text-slate-900"}`}>{b.name}</div>
                    <div className="text-[9px] text-gray-500">{b.location}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[11px] font-bold ${d ? "text-white" : "text-slate-900"}`} style={{ fontVariantNumeric: "tabular-nums" }}>{b.sales}</span>
                  <span className={`flex items-center gap-0.5 text-[9px] ${b.up ? "text-green-500" : "text-red-500"}`}>
                    {b.up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                    {b.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className={`col-span-12 md:col-span-3 p-4 ${card}`}>
            <div className={`text-xs font-bold mb-3 ${d ? "text-white" : "text-slate-900"}`}>Quick Actions</div>
            <div className={`flex gap-1 p-1 rounded-lg mb-3 ${d ? "bg-[#0B0F1A]" : "bg-slate-100"}`}>
              <button className="bg-blue-500 text-white text-[10px] px-3 py-1.5 rounded-md font-semibold flex-1">Transfer</button>
              <button onClick={onDemoClick} className="text-gray-500 text-[10px] px-3 py-1.5 flex-1 cursor-pointer">Restock</button>
              <button onClick={onDemoClick} className="text-gray-500 text-[10px] px-3 py-1.5 flex-1 cursor-pointer">Report</button>
            </div>
            <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-1">From Branch</div>
            <div className={`flex items-center justify-between p-2 rounded-lg mb-3 ${d ? "bg-[#0B0F1A] border border-[#1E2A44]" : "bg-slate-50 border border-slate-200"}`}>
              <div className="flex items-center gap-1.5">
                <Store className="w-3 h-3 text-blue-500" />
                <div>
                  <div className={`text-[11px] font-semibold ${d ? "text-white" : "text-slate-900"}`}>SM North</div>
                  <div className="text-[8px] text-gray-500">Available: ₱145,200</div>
                </div>
              </div>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </div>
            <div className="flex justify-center mb-3">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ArrowUpDown className="w-3 h-3 text-blue-500" />
              </div>
            </div>
            <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-1">To Branch</div>
            <div className={`flex items-center justify-between p-2 rounded-lg ${d ? "bg-[#0B0F1A] border border-[#1E2A44]" : "bg-slate-50 border border-slate-200"}`}>
              <div className="flex items-center gap-1.5">
                <Store className="w-3 h-3 text-blue-500" />
                <div>
                  <div className={`text-[11px] font-semibold ${d ? "text-white" : "text-slate-900"}`}>Makati Hub</div>
                  <div className="text-[8px] text-gray-500">Available: ₱118,450</div>
                </div>
              </div>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </div>
            <button onClick={onDemoClick} className="w-full mt-3 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors">
              Transfer Now <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-12 gap-3">
          {/* Weekly Sales Trend */}
          <div className={`col-span-12 md:col-span-8 p-4 ${card}`}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider">Total Weekly Sales</div>
                <div className="flex items-center gap-2">
                  <span className={`text-xl font-bold ${d ? "text-white" : "text-slate-900"}`} style={{ fontVariantNumeric: "tabular-nums" }}>₱2,847,560</span>
                  <span className="bg-green-500/20 text-green-500 text-[9px] px-1.5 py-0.5 rounded font-semibold">+12.4%</span>
                </div>
              </div>
              <div className={`flex gap-1 p-1 rounded-lg ${d ? "bg-[#0B0F1A]" : "bg-slate-100"}`}>
                <button onClick={onDemoClick} className="text-gray-500 text-[9px] px-2 py-1 cursor-pointer">Day</button>
                <button className="bg-blue-500 text-white text-[9px] px-2 py-1 rounded-md font-semibold">Week</button>
                <button onClick={onDemoClick} className="text-gray-500 text-[9px] px-2 py-1 cursor-pointer">Month</button>
              </div>
            </div>
            <div className="w-full h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke={d ? "#1E2A44" : "#e2e8f0"} />
                  <XAxis dataKey="week" fontSize={9} stroke={d ? "#6B7280" : "#94a3b8"} />
                  <YAxis fontSize={9} stroke={d ? "#6B7280" : "#94a3b8"} tickFormatter={(v) => `₱${(v / 1000000).toFixed(1)}M`} />
                  <Tooltip content={<BlueTooltip />} />
                  <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2.5} dot={{ fill: "#3b82f6", r: 3 }} activeDot={{ r: 5 }} isAnimationActive />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Featured Alert */}
          <div className="col-span-12 md:col-span-4 p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden cursor-pointer" onClick={onDemoClick}>
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
            <div className="absolute -right-2 -bottom-6 w-14 h-14 bg-white/5 rounded-full" />
            <div className="relative">
              <span className="bg-white/20 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">📊 LIVE</span>
              <div className="text-3xl font-bold text-white mt-2">11/12</div>
              <div className="text-[10px] text-blue-100">Branches Active</div>
              <div className="text-[9px] text-blue-100 leading-relaxed mt-2">⚠️ Pampanga branch offline since 3PM</div>
              <button onClick={onDemoClick} className="w-full mt-3 py-2 rounded-lg bg-white text-blue-600 font-bold text-[10px] flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 transition-colors">
                View Branch Status <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Agency Dashboard ───

const agencyNav: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Clients", active: false },
  { icon: FolderKanban, label: "Projects", active: false },
  { icon: CheckSquare, label: "Tasks", active: false },
  { icon: FileText, label: "Invoices", active: false },
  { icon: UserCircle, label: "Team", active: false },
];
const agencyKPIs: KPIData[] = [
  { icon: TrendingUp, label: "MONTHLY REVENUE", value: 385000, prefix: "₱", trend: "+9.4%", trendColor: "green" },
  { icon: FolderKanban, label: "ACTIVE PROJECTS", value: 18, trend: "3 due this week", trendColor: "neutral" },
  { icon: FileText, label: "PENDING INVOICES", value: 124500, prefix: "₱", trend: "5 clients", trendColor: "neutral" },
  { icon: Users, label: "CLIENT RETENTION", value: 87, suffix: "%", trend: "+3%", trendColor: "green" },
];
const agencyRevenueData = [
  { month: "Nov", revenue: 245000 }, { month: "Dec", revenue: 268000 },
  { month: "Jan", revenue: 285000 }, { month: "Feb", revenue: 312000 },
  { month: "Mar", revenue: 348000 }, { month: "Apr", revenue: 385000 },
];
const agencyActivity: ListItem[] = [
  { id: "ABC Corp", desc: "Invoice paid in full", amount: "₱85,000", time: "30 min ago", status: "paid" },
  { id: "XYZ Brand", desc: "New project kicked off", amount: "₱120,000", time: "2 hours ago", status: "new" },
  { id: "TechStart PH", desc: "Milestone 2 delivered", amount: "₱45,000", time: "4 hours ago", status: "delivered" },
  { id: "GreenLeaf Co", desc: "Pending client review", amount: "₱28,500", time: "1 day ago", status: "review" },
  { id: "FoodMart", desc: "Contract renewed", amount: "₱65,000", time: "2 days ago", status: "renewed" },
];
const agencyServiceData: DonutEntry[] = [
  { name: "Branding", value: 40, color: "#ffb700" },
  { name: "Web Dev", value: 30, color: "#fcd34d" },
  { name: "Marketing", value: 20, color: "#fde68a" },
  { name: "Other", value: 10, color: "#fef3c7" },
];

const AgencyDashboard = ({ isDark, onDemoClick }: { isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className="flex min-h-[600px] w-full">
      <DashboardSidebar brand={{ letter: "C", name: "Craft Digital", tagline: "Agency OS" }} nav={agencyNav} isDark={d} onDemoClick={onDemoClick} />
      <div className="flex-1 p-6 flex flex-col gap-5 transition-colors duration-500">
        <TopBar greeting="Good morning, Paolo 👋" subtitle="Here's your agency pipeline today" isDark={d} />
        <KPICards data={agencyKPIs} isDark={d} onDemoClick={onDemoClick} />
        <ChartCard title="Revenue Trend" subtitle="Last 6 months" isDark={d}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={agencyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={d ? "#1E2A44" : "#e2e8f0"} />
              <XAxis dataKey="month" stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} />
              <YAxis stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} tickFormatter={(v) => `₱${v / 1000}k`} />
              <Tooltip content={<CustomTooltip isDark={d} />} />
              <Line type="monotone" dataKey="revenue" stroke="#ffb700" strokeWidth={3} dot={{ fill: "#ffb700", r: 5 }} activeDot={{ r: 7 }} isAnimationActive={true} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <DataList title="Recent Activity" items={agencyActivity} isDark={d} onDemoClick={onDemoClick} />
          <DonutCard title="Revenue by Service" subtitle="This month" data={agencyServiceData} isDark={d} />
        </div>
        <ActionButtons buttons={[
          { label: "New Client", icon: UserPlus, primary: true },
          { label: "Create Invoice", icon: FilePlus },
          { label: "Log Time", icon: Clock },
        ]} isDark={d} onDemoClick={onDemoClick} />
      </div>
    </div>
  );
};

// ─── Main Section ───

const tabs = [
  { id: 0, icon: UtensilsCrossed, label: "F&B / Restaurant" },
  { id: 1, icon: ShoppingCart, label: "E-commerce" },
  { id: 2, icon: Store, label: "Retail / Distribution" },
  { id: 3, icon: Briefcase, label: "Service / Agency" },
];

const SectionDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDemoClick = () => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setShowToast(true);
    toastTimeoutRef.current = setTimeout(() => setShowToast(false), 2500);
  };

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

          <div className="p-2 md:p-3">
            <div className={`rounded-2xl overflow-hidden transition-colors duration-500 relative ${isDark ? "bg-[#0F1420]" : "bg-[#F8FAFC]"}`}>
              <div key={activeTab} className="animate-fadeIn">
                {activeTab === 0 && <FnBDashboard isDark={isDark} onDemoClick={handleDemoClick} />}
                {activeTab === 1 && <EcommerceDashboard isDark={isDark} onDemoClick={handleDemoClick} />}
                {activeTab === 2 && <RetailDashboard isDark={isDark} onDemoClick={handleDemoClick} />}
                {activeTab === 3 && <AgencyDashboard isDark={isDark} onDemoClick={handleDemoClick} />}
              </div>

              {showToast && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slideUp">
                  <div className="flex items-center gap-2 bg-[#ffb700] text-black px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(255,183,0,0.5)] text-sm font-semibold whitespace-nowrap">
                    <Sparkles className="w-4 h-4" />
                    This is a live demo — build your own inside the bootcamp
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Helper text + CTA below frame */}
        <p className="mt-8 text-sm text-gray-500">
          👆 Click any tab, button, or card above to explore. This is exactly what you'll build in Week 1 of the bootcamp.
        </p>
        <div className="mt-6">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 bg-[#ffb700] text-black font-bold text-base md:text-lg tracking-wide px-10 py-4 rounded-full shadow-[0_10px_40px_rgba(255,183,0,0.4)] hover:bg-[#ffc733] hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(255,183,0,0.5)] transition-all duration-300 cursor-pointer"
          >
            I WANT TO BUILD THIS
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionDashboardPreview;
