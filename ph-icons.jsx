// ============ ICONS ============
// All stroke icons match the Palm Hills app line style (2px, round)

const S = ({ children, size = 24, stroke = "currentColor", sw = 2, fill = "none", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {children}
  </svg>
);

const IconHome = (p) => (
  <S {...p}><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v9.5h13V10" /></S>
);

// "My Space" — open double-door / cabinet icon
const IconSpace = (p) => (
  <S {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="9.4" y1="11" x2="9.4" y2="13" />
    <line x1="14.6" y1="11" x2="14.6" y2="13" />
  </S>
);

const IconCommunity = (p) => (
  <S {...p}>
    <circle cx="8.5" cy="8" r="2.4" />
    <circle cx="16" cy="9.2" r="2" />
    <path d="M3.8 18.5c0-2.7 2.1-4.6 4.7-4.6s4.7 1.9 4.7 4.6" />
    <path d="M14.4 14.2c2.2-.5 4.6 1 4.6 4.3" />
  </S>
);

// "More" — four squares grid
const IconMore = (p) => (
  <S {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
  </S>
);

const IconBell = (p) => (
  <S {...p}>
    <path d="M18 8.5a6 6 0 1 0-12 0c0 6-2.2 7.5-2.2 7.5h16.4S18 14.5 18 8.5Z" />
    <path d="M10.3 20a2 2 0 0 0 3.4 0" />
  </S>
);

const IconChevL = (p) => (<S {...p} sw={2.6}><path d="M15 5 8 12l7 7" /></S>);
const IconChevR = (p) => (<S {...p}><path d="M9 5l7 7-7 7" /></S>);
const IconChevDown = (p) => (<S {...p} sw={2.4}><path d="M6 9l6 6 6-6" /></S>);

const IconHouseSmall = (p) => (
  <S {...p}><path d="M3.5 11 12 4.5l8.5 6.5" /><path d="M5.5 9.7V20h13V9.7" /></S>
);

const IconBulb = (p) => (
  <S {...p}>
    <path d="M9 18h6" /><path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2h5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  </S>
);

const IconGate = (p) => (
  <S {...p} sw={1.8}>
    <line x1="4" y1="5" x2="20" y2="5" />
    <line x1="6.5" y1="5" x2="6.5" y2="20" />
    <line x1="17.5" y1="5" x2="17.5" y2="20" />
    <line x1="6.5" y1="9" x2="17.5" y2="9" />
  </S>
);

const IconPlusCircle = (p) => (
  <S {...p}><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></S>
);

const IconArrowR = (p) => (
  <S {...p}><line x1="3" y1="12" x2="19" y2="12" /><path d="M13 6l6 6-6 6" /></S>
);
const IconArrowR2 = (p) => ( // double arrow
  <S {...p}><path d="M3 12h13" /><path d="M11 7l5 5-5 5" /><path d="M16 7l5 5-5 5" /></S>
);

const IconPeoplePair = (p) => (
  <S {...p}>
    <circle cx="9" cy="8" r="2.6" /><circle cx="16.5" cy="8.5" r="2.1" />
    <path d="M4 18c0-2.8 2.2-4.8 5-4.8s5 2 5 4.8" />
    <path d="M14.5 13.4c2.2-.4 4.5 1.2 4.5 4.6" />
  </S>
);

const IconCar = (p) => (
  <S {...p} sw={1.9}>
    <path d="M5 14l1.4-4.2A2 2 0 0 1 8.3 8.4h7.4a2 2 0 0 1 1.9 1.4L19 14" />
    <path d="M4 14h16v3.5a.8.8 0 0 1-.8.8H17a.8.8 0 0 1-.8-.8V17H7.8v.5a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V14Z" />
    <circle cx="7.5" cy="14.5" r=".4" /><circle cx="16.5" cy="14.5" r=".4" />
  </S>
);

const IconCheckSquare = (p) => (
  <S {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8.5 12l2.3 2.3 4.7-4.8" /></S>
);

const IconGear = (p) => (
  <S {...p} sw={1.8}>
    <path d="M12 4l1.4 0 .7 2.2 2 .8 2-1 1 1-1 2 .8 2 2.2.7 0 1.4-2.2.7-.8 2 1 2-1 1-2-1-2 .8-.7 2.2-1.4 0-.7-2.2-2-.8-2 1-1-1 1-2-.8-2-2.2-.7 0-1.4 2.2-.7.8-2-1-2 1-1 2 1 2-.8.7-2.2Z" />
    <circle cx="12" cy="12" r="2.4" />
  </S>
);

const IconChat = (p) => (
  <S {...p} sw={1.8}>
    <path d="M4 5h16v11H9l-4 3.5V16H4Z" />
    <path d="M10.2 9.2a1.8 1.8 0 1 1 2.4 1.7c-.5.3-.9.7-.9 1.4" />
    <circle cx="11.8" cy="14" r=".3" />
  </S>
);

const IconQR = ({ size = 24, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M3 3h7v7H3V3zm2 2v3h3V5H5z" />
    <path d="M14 3h7v7h-7V3zm2 2v3h3V5h-3z" />
    <path d="M3 14h7v7H3v-7zm2 2v3h3v-3H5z" />
    <rect x="14" y="14" width="2.4" height="2.4" />
    <rect x="18.6" y="14" width="2.4" height="2.4" />
    <rect x="16.3" y="16.3" width="2.4" height="2.4" />
    <rect x="14" y="18.6" width="2.4" height="2.4" />
    <rect x="18.6" y="18.6" width="2.4" height="2.4" />
  </svg>
);

Object.assign(window, {
  IconHome, IconSpace, IconCommunity, IconMore, IconBell, IconChevL, IconChevR,
  IconChevDown, IconHouseSmall, IconBulb, IconGate, IconPlusCircle, IconArrowR,
  IconArrowR2, IconPeoplePair, IconCar, IconCheckSquare, IconGear, IconChat, IconQR,
});
