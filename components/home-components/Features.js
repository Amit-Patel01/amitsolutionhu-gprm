import {
  DesktopComputerIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EmojiHappyIcon,
  FireIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Lightning Fast Creation",
    description:
      "Create your Profile ReadMe in just a few clicks. It takes less than one minute to build a perfect profile.",
    icon: LightningBoltIcon,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    name: "Show Your Tech Stack",
    description:
      "Select from 300+ tech options and showcase your skills to the world. Let them know what makes you awesome.",
    icon: DesktopComputerIcon,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "Visitor Counter",
    description:
      "Track how many people viewed your profile with the visitor counter. See your GitHub popularity in real-time.",
    icon: UserGroupIcon,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    name: "Fun Components",
    description:
      "Add Random Quotes to your profile. Keep things interesting and fun for visitors.",
    icon: EmojiHappyIcon,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    name: "GitHub Trophies",
    description:
      "Showcase your achievements with virtual trophies. Display them proudly on your profile.",
    icon: FireIcon,
    gradient: "from-rose-500/20 to-pink-500/20",
    iconBg: "bg-rose-500/20",
    iconColor: "text-rose-400",
  },
];

export default function Features() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-purple-400/80 font-medium tracking-[0.2em] uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Everything you need
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-400 text-base md:text-lg">
            Create your perfect GitHub Profile ReadMe with powerful tools, all for free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-glass-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon
                  className={`h-5 w-5 ${feature.iconColor}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
