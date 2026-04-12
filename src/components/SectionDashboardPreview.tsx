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
  Sparkles, ArrowRight
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

// ─── E-commerce Dashboard ───

const ecomNav: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package, label: "Orders", active: false },
  { icon: ShoppingCart, label: "Products", active: false },
  { icon: Warehouse, label: "Warehouse", active: false },
  { icon: Truck, label: "Logistics", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
];
const ecomKPIs: KPIData[] = [
  { icon: DollarSign, label: "REVENUE TODAY", value: 128450, prefix: "₱", trend: "+18.3%", trendColor: "green" },
  { icon: Package, label: "ORDERS", value: 287, trend: "+22.1%", trendColor: "green" },
  { icon: Truck, label: "PENDING SHIP", value: 34, trend: "+5 orders", trendColor: "green" },
  { icon: RotateCcw, label: "RETURN RATE", value: 2, suffix: ".1%", trend: "-0.5%", trendColor: "green" },
];
const ecomRevenueData = [
  { day: "1", revenue: 85000 }, { day: "2", revenue: 92000 }, { day: "3", revenue: 78000 },
  { day: "4", revenue: 105000 }, { day: "5", revenue: 98000 }, { day: "6", revenue: 112000 },
  { day: "7", revenue: 125000 }, { day: "8", revenue: 108000 }, { day: "9", revenue: 118000 },
  { day: "10", revenue: 132000 }, { day: "11", revenue: 128000 }, { day: "12", revenue: 141000 },
  { day: "13", revenue: 135000 }, { day: "14", revenue: 148000 }, { day: "15", revenue: 152000 },
  { day: "16", revenue: 138000 }, { day: "17", revenue: 162000 }, { day: "18", revenue: 155000 },
  { day: "19", revenue: 171000 }, { day: "20", revenue: 168000 }, { day: "21", revenue: 178000 },
  { day: "22", revenue: 185000 }, { day: "23", revenue: 172000 }, { day: "24", revenue: 195000 },
  { day: "25", revenue: 188000 }, { day: "26", revenue: 205000 }, { day: "27", revenue: 198000 },
  { day: "28", revenue: 215000 }, { day: "29", revenue: 208000 }, { day: "30", revenue: 225000 },
];
const ecomOrders: ListItem[] = [
  { id: "Order #4521", desc: "Shopee • 2x Items", amount: "₱2,890", time: "2 min ago", status: "new" },
  { id: "Order #4520", desc: "Lazada • 1x Item", amount: "₱1,450", time: "8 min ago", status: "processing" },
  { id: "Order #4519", desc: "TikTok Shop • 3x Items", amount: "₱3,200", time: "15 min ago", status: "shipped" },
  { id: "Return #R-89", desc: "Shopee • Refund", amount: "-₱890", time: "25 min ago", status: "return" },
  { id: "Order #4518", desc: "Website • 1x Item", amount: "₱1,890", time: "40 min ago", status: "shipped" },
];
const ecomChannelData: DonutEntry[] = [
  { name: "Shopee", value: 45, color: "#ffb700" },
  { name: "Lazada", value: 30, color: "#fcd34d" },
  { name: "Website", value: 15, color: "#fde68a" },
  { name: "TikTok Shop", value: 10, color: "#fef3c7" },
];

const EcommerceDashboard = ({ isDark, onDemoClick }: { isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className="flex min-h-[600px] w-full">
      <DashboardSidebar brand={{ letter: "S", name: "ShopHub PH", tagline: "E-commerce Hub" }} nav={ecomNav} isDark={d} onDemoClick={onDemoClick} />
      <div className="flex-1 p-6 flex flex-col gap-5 transition-colors duration-500">
        <TopBar greeting="Good morning, Maria 👋" subtitle="Here's your store performance today" isDark={d} />
        <KPICards data={ecomKPIs} isDark={d} onDemoClick={onDemoClick} />
        <ChartCard title="Revenue - Last 30 Days" subtitle="Trending upward 📈" isDark={d}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={ecomRevenueData}>
              <defs>
                <linearGradient id="ecomGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffb700" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#ffb700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={d ? "#1E2A44" : "#e2e8f0"} />
              <XAxis dataKey="day" stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} />
              <YAxis stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} tickFormatter={(v) => `₱${v / 1000}k`} />
              <Tooltip content={<CustomTooltip isDark={d} />} />
              <Area type="monotone" dataKey="revenue" stroke="#ffb700" strokeWidth={2} fill="url(#ecomGradient)" isAnimationActive={true} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <DataList title="Recent Orders" items={ecomOrders} isDark={d} amountRedStatuses={["return"]} onDemoClick={onDemoClick} />
          <DonutCard title="Sales by Channel" subtitle="Last 30 days" data={ecomChannelData} isDark={d} />
        </div>
        <ActionButtons buttons={[
          { label: "New Product", icon: Plus, primary: true },
          { label: "Process Orders", icon: Package },
          { label: "View Inventory", icon: Warehouse },
        ]} isDark={d} onDemoClick={onDemoClick} />
      </div>
    </div>
  );
};

// ─── Retail Dashboard ───

const retailNav: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Store, label: "Branches", active: false },
  { icon: Boxes, label: "Stock", active: false },
  { icon: Wallet, label: "Collections", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Users, label: "Team", active: false },
];
const retailKPIs: KPIData[] = [
  { icon: BarChart3, label: "TOTAL SALES", value: 892450, prefix: "₱", trend: "+15.2%", trendColor: "green" },
  { icon: Store, label: "BRANCHES", value: 12, trend: "11 active", trendColor: "neutral" },
  { icon: Wallet, label: "COLLECTIONS", value: 654200, prefix: "₱", trend: "73% of target", trendColor: "green" },
  { icon: Boxes, label: "STOCK VALUE", value: 0, displayStatic: "₱2.4M", trend: "Stable", trendColor: "neutral" },
];
const retailBranchData = [
  { branch: "SM North", sales: 145000 }, { branch: "BGC", sales: 132000 },
  { branch: "Makati", sales: 118000 }, { branch: "Ortigas", sales: 98000 },
  { branch: "Alabang", sales: 92000 }, { branch: "QC", sales: 85000 },
  { branch: "Cebu", sales: 78000 }, { branch: "Davao", sales: 65000 },
  { branch: "Iloilo", sales: 52000 }, { branch: "Cagayan", sales: 48000 },
  { branch: "Baguio", sales: 42000 }, { branch: "Pampanga", sales: 37000 },
];
const retailCollections: ListItem[] = [
  { id: "SM North Branch", desc: "Daily collection", amount: "₱45,200", time: "1 hour ago", status: "received" },
  { id: "BGC Branch", desc: "Sales remittance", amount: "₱38,900", time: "2 hours ago", status: "received" },
  { id: "Stock Transfer", desc: "QC → Makati", amount: "₱12,400", time: "3 hours ago", status: "in-transit" },
  { id: "Makati Branch", desc: "Pending deposit", amount: "₱28,500", time: "4 hours ago", status: "pending" },
  { id: "Ortigas Branch", desc: "Daily collection", amount: "₱32,100", time: "5 hours ago", status: "received" },
];
const retailTopData: DonutEntry[] = [
  { name: "SM North", value: 25, color: "#ffb700" },
  { name: "BGC", value: 22, color: "#fcd34d" },
  { name: "Makati", value: 18, color: "#fde68a" },
  { name: "Others (9)", value: 35, color: "#fef3c7" },
];

const RetailDashboard = ({ isDark, onDemoClick }: { isDark: boolean; onDemoClick: () => void }) => {
  const d = isDark;
  return (
    <div className="flex min-h-[600px] w-full">
      <DashboardSidebar brand={{ letter: "B", name: "BranchMaster", tagline: "Multi-Branch Ops" }} nav={retailNav} isDark={d} onDemoClick={onDemoClick} />
      <div className="flex-1 p-6 flex flex-col gap-5 transition-colors duration-500">
        <TopBar greeting="Good morning, Rodel 👋" subtitle="Here's your branch network overview" isDark={d} />
        <KPICards data={retailKPIs} isDark={d} onDemoClick={onDemoClick} />
        <ChartCard title="Sales per Branch" subtitle="This month's performance" isDark={d}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={retailBranchData}>
              <CartesianGrid strokeDasharray="3 3" stroke={d ? "#1E2A44" : "#e2e8f0"} />
              <XAxis dataKey="branch" stroke={d ? "#6B7280" : "#94a3b8"} fontSize={9} />
              <YAxis stroke={d ? "#6B7280" : "#94a3b8"} fontSize={11} tickFormatter={(v) => `₱${v / 1000}k`} />
              <Tooltip content={<CustomTooltip isDark={d} />} />
              <Bar dataKey="sales" fill="#ffb700" radius={[6, 6, 0, 0]} isAnimationActive={true} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <DataList title="Recent Collections" items={retailCollections} isDark={d} onDemoClick={onDemoClick} />
          <DonutCard title="Top Performing Branches" subtitle="Revenue share" data={retailTopData} isDark={d} />
        </div>
        <ActionButtons buttons={[
          { label: "Add Stock", icon: Plus, primary: true },
          { label: "Transfer Items", icon: ArrowRightLeft },
          { label: "Generate Report", icon: FileText },
        ]} isDark={d} onDemoClick={onDemoClick} />
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
