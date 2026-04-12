import {
  Users, Search, Plus, MoreHorizontal, Settings,
  ChevronDown, Filter, ArrowUpDown, EyeOff,
  Table2, Star, UserPlus, Clock, Archive, Layers
} from "lucide-react";

interface HRDashboardProps {
  isDark: boolean;
  onDemoClick: () => void;
}

const hrViews = [
  { icon: Table2, label: "All Employees", count: 47, active: true },
  { icon: Star, label: "Top Performers", count: 12, active: false },
  { icon: UserPlus, label: "New Hires", count: 5, active: false },
  { icon: Clock, label: "Pending Review", count: 8, active: false },
  { icon: Archive, label: "On Leave", count: 3, active: false },
];

const filters = [
  { icon: Filter, label: "Filter", highlighted: false },
  { icon: ArrowUpDown, label: "Sort", highlighted: false },
  { icon: Layers, label: "Group: Department", highlighted: true },
  { icon: EyeOff, label: "Hide: 2 fields", highlighted: false },
];

const engineering = [
  { name: "Maria Santos", email: "maria@cocompany.ph", position: "Senior Dev", status: "Active", salary: "₱85,000", hire: "Jan 2023", avatar: "MS", color: "#f43f5e" },
  { name: "Juan Cruz", email: "juan@cocompany.ph", position: "Tech Lead", status: "Active", salary: "₱120,000", hire: "Mar 2022", avatar: "JC", color: "#06b6d4" },
  { name: "Anna Reyes", email: "anna@cocompany.ph", position: "Junior Dev", status: "Probation", salary: "₱45,000", hire: "Aug 2025", avatar: "AR", color: "#a3e635" },
];

const operations = [
  { name: "Carlos Mendoza", email: "carlos@cocompany.ph", position: "Ops Manager", status: "Active", salary: "₱75,000", hire: "Jun 2021", avatar: "CM", color: "#8b5cf6" },
  { name: "Lisa Tan", email: "lisa@cocompany.ph", position: "Coordinator", status: "Active", salary: "₱42,000", hire: "Feb 2024", avatar: "LT", color: "#f59e0b" },
];

const marketing = [
  { name: "Patricia Luna", email: "patricia@cocompany.ph", position: "Brand Manager", status: "Active", salary: "₱68,000", hire: "Sep 2023", avatar: "PL", color: "#10b981" },
  { name: "Mike Garcia", email: "mike@cocompany.ph", position: "Designer", status: "On Leave", salary: "₱48,000", hire: "Apr 2024", avatar: "MG", color: "#3b82f6" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-500/15 text-green-600 dark:text-green-400",
  Probation: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  "On Leave": "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  "At Risk": "bg-red-500/15 text-red-600 dark:text-red-400",
};

function getStatusStyle(status: string, isDark: boolean) {
  const base = statusStyles[status] || "";
  return base.replace(/dark:text-\S+/g, (m) => (isDark ? m.replace("dark:", "") : ""));
}

const StatusPill = ({ status, isDark }: { status: string; isDark: boolean }) => {
  const colorMap: Record<string, string> = {
    Active: isDark ? "bg-green-500/15 text-green-400" : "bg-green-500/15 text-green-600",
    Probation: isDark ? "bg-amber-500/15 text-amber-400" : "bg-amber-500/15 text-amber-600",
    "On Leave": isDark ? "bg-blue-500/15 text-blue-400" : "bg-blue-500/15 text-blue-600",
    "At Risk": isDark ? "bg-red-500/15 text-red-400" : "bg-red-500/15 text-red-600",
  };
  return (
    <span className={`px-2 py-0.5 rounded-md text-[9px] font-semibold ${colorMap[status] || ""}`}>
      {status}
    </span>
  );
};

const TableHeaders = ({ isDark }: { isDark: boolean }) => (
  <div className={`grid grid-cols-12 gap-2 px-2 py-2 border-b min-w-[500px] ${isDark ? "border-violet-900/20" : "border-slate-200"}`}>
    {["Name", "Position", "Status", "Salary", "Hire Date", ""].map((h, i) => (
      <div
        key={h || "menu"}
        className={`text-[9px] uppercase tracking-widest text-gray-500 font-semibold ${
          i === 0 ? "col-span-3" : i === 5 ? "col-span-1" : "col-span-2"
        }`}
      >
        {h}
      </div>
    ))}
  </div>
);

const EmployeeRow = ({
  emp,
  isDark,
  isLast,
  onClick,
}: {
  emp: (typeof engineering)[0];
  isDark: boolean;
  isLast: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`grid grid-cols-12 gap-2 px-2 py-2 cursor-pointer group rounded transition-colors min-w-[500px] ${
      !isLast ? `border-b ${isDark ? "border-violet-900/10" : "border-slate-100"}` : ""
    } ${isDark ? "hover:bg-violet-900/10" : "hover:bg-violet-50"}`}
  >
    <div className="col-span-3 flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] text-white font-bold shrink-0 hover:scale-110 transition-transform"
        style={{ backgroundColor: emp.color }}
      >
        {emp.avatar}
      </div>
      <div className="flex flex-col min-w-0">
        <span className={`text-[11px] font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{emp.name}</span>
        <span className="text-[9px] text-gray-500 truncate">{emp.email}</span>
      </div>
    </div>
    <div className={`col-span-2 flex items-center text-[10px] ${isDark ? "text-gray-300" : "text-slate-700"}`}>{emp.position}</div>
    <div className="col-span-2 flex items-center">
      <StatusPill status={emp.status} isDark={isDark} />
    </div>
    <div className={`col-span-2 flex items-center text-[10px] font-semibold tabular-nums ${isDark ? "text-white" : "text-slate-900"}`}>{emp.salary}</div>
    <div className="col-span-2 flex items-center text-[10px] text-gray-500">{emp.hire}</div>
    <div className="col-span-1 flex items-center justify-end">
      <MoreHorizontal className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </div>
);

interface GroupProps {
  label: string;
  dotColor: string;
  count: string;
  total: string;
  employees: (typeof engineering);
  isDark: boolean;
  onClick: () => void;
}

const EmployeeGroup = ({ label, dotColor, count, total, employees, isDark, onClick }: GroupProps) => (
  <div>
    <div className="flex items-center gap-2 cursor-pointer mb-1" onClick={onClick}>
      <ChevronDown className="w-3 h-3 text-gray-500" />
      <div className={`w-2 h-2 rounded-sm`} style={{ backgroundColor: dotColor }} />
      <span className={`text-[11px] font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{label}</span>
      <span className="text-[10px] text-gray-500">({count})</span>
      <span className="text-[10px] text-gray-500 ml-auto tabular-nums">{total}</span>
    </div>
    <TableHeaders isDark={isDark} />
    {employees.map((emp, i) => (
      <EmployeeRow key={emp.name} emp={emp} isDark={isDark} isLast={i === employees.length - 1} onClick={onClick} />
    ))}
  </div>
);

const HRDashboard = ({ isDark, onDemoClick }: HRDashboardProps) => {
  return (
    <div className={`flex flex-col h-full w-full transition-colors duration-500 ${isDark ? "bg-[#0F0A1A]" : "bg-[#FAFAFA]"}`}>
      {/* ROW 1: TOP BAR */}
      <div className={`flex items-center justify-between px-3 md:px-5 py-3 border-b ${isDark ? "border-violet-900/20" : "border-slate-200"}`}>
        <div>
          <div className="flex items-center gap-1">
            <Users className="w-5 h-5 text-violet-500 mr-2" />
            <span className="text-[10px] text-gray-500">Workspace</span>
            <span className="text-gray-400 text-[10px]">/</span>
            <span className="text-[10px] text-gray-500">Talent OS</span>
            <span className="text-gray-400 text-[10px]">/</span>
            <span className={`text-[10px] font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Employees</span>
          </div>
          <h2 className={`text-lg font-bold mt-1 ${isDark ? "text-white" : "text-slate-900"}`}>Employee Database 👥</h2>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md ${isDark ? "bg-[#1A1428]" : "bg-slate-100"}`}>
            <Search className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] text-gray-500">Search employees...</span>
          </div>
          <button onClick={onDemoClick} className={`text-[10px] px-2.5 py-1.5 rounded-md border ${isDark ? "border-violet-700 text-violet-400" : "border-slate-300 text-slate-600"}`}>
            Share
          </button>
          <button onClick={onDemoClick} className="bg-violet-500 hover:bg-violet-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors">
            <Plus className="w-3 h-3" />
            New Employee
          </button>
          <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center text-[10px] text-white font-bold ring-2 ring-violet-300">
            J
          </div>
        </div>
      </div>

      {/* ROW 2: VIEW TABS */}
      <div className={`flex items-center gap-3 md:gap-4 px-3 md:px-5 py-2 border-b overflow-x-auto no-scrollbar ${isDark ? "border-violet-900/20" : "border-slate-200"}`}>
        {hrViews.map((v) => {
          const VIcon = v.icon;
          return (
            <div
              key={v.label}
              onClick={onDemoClick}
              className={`flex items-center gap-1.5 text-[11px] cursor-pointer transition-colors pb-2 -mb-px ${
                v.active
                  ? `font-semibold border-b-2 border-violet-500 ${isDark ? "text-violet-400" : "text-violet-600"}`
                  : `text-gray-500 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`
              }`}
            >
              <VIcon className="w-3.5 h-3.5" />
              {v.label}
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${isDark ? "bg-[#1A1428]" : "bg-slate-200"} text-gray-500`}>
                {v.count}
              </span>
            </div>
          );
        })}
      </div>

      {/* ROW 3: FILTER BAR */}
      <div className={`flex items-center justify-between px-3 md:px-5 py-2 border-b overflow-x-auto no-scrollbar ${isDark ? "border-violet-900/20" : "border-slate-200"}`}>
        <div className="flex items-center gap-1.5">
          {filters.map((f) => {
            const FIcon = f.icon;
            return (
              <div
                key={f.label}
                onClick={onDemoClick}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] cursor-pointer transition-colors ${
                  f.highlighted
                    ? "bg-violet-500/10 text-violet-600 dark:text-violet-400"
                    : isDark
                    ? "bg-[#1A1428] text-gray-400 hover:bg-violet-900/30"
                    : "bg-slate-100 text-gray-600 hover:bg-violet-100"
                } ${f.highlighted && isDark ? "!text-violet-400" : ""}`}
              >
                <FIcon className="w-3 h-3" />
                {f.label}
                <ChevronDown className="w-2.5 h-2.5" />
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <div onClick={onDemoClick} className={`w-7 h-7 rounded-md flex items-center justify-center cursor-pointer ${isDark ? "hover:bg-[#1A1428]" : "hover:bg-slate-100"} text-gray-500`}>
            <Settings className="w-3.5 h-3.5" />
          </div>
          <div onClick={onDemoClick} className={`w-7 h-7 rounded-md flex items-center justify-center cursor-pointer ${isDark ? "hover:bg-[#1A1428]" : "hover:bg-slate-100"} text-gray-500`}>
            <MoreHorizontal className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-gray-500">47 employees</span>
        </div>
      </div>

      {/* ROW 4: TABLE GROUPS */}
      <div className="flex-1 overflow-y-auto overflow-x-auto px-3 md:px-5 py-3 flex flex-col gap-3 dashboard-scroll">
        <EmployeeGroup
          label="Engineering"
          dotColor="#8b5cf6"
          count="15"
          total="₱945,000/mo"
          employees={engineering}
          isDark={isDark}
          onClick={onDemoClick}
        />
        <EmployeeGroup
          label="Operations"
          dotColor="#f97316"
          count="12"
          total="₱680,000/mo"
          employees={operations}
          isDark={isDark}
          onClick={onDemoClick}
        />
        <EmployeeGroup
          label="Marketing"
          dotColor="#ec4899"
          count="8"
          total="₱520,000/mo"
          employees={marketing}
          isDark={isDark}
          onClick={onDemoClick}
        />
      </div>

      {/* BOTTOM STATUS BAR */}
      <div className={`px-5 py-2.5 border-t flex items-center justify-between ${isDark ? "border-violet-900/20 bg-[#0D0818]" : "border-slate-200 bg-[#F5F5F5]"}`}>
        <span className="text-[10px] text-gray-500">47 total employees · 3 departments · ₱2,145,000/mo total payroll</span>
        <div className="flex items-center gap-2">
          <span onClick={onDemoClick} className="text-[10px] text-violet-500 cursor-pointer hover:underline">+ Add new</span>
          <span className="text-[10px] text-gray-500">1-7 of 47 ‹ ›</span>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
