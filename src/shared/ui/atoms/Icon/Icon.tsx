import {
  ArrowLeft,
  Blinds,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Eye,
  EyeOff,
  Home,
  Info,
  Loader,
  MoveRight,
  PersonStanding,
  Plus,
  RefreshCcw,
  Search,
  Settings,
  SlidersHorizontal,
  X,
  Users,
  User,
  LucideProps,
  Mail,
  Pencil,
  Save,
  ArrowRight,
  Clock,
  ChartColumnIncreasing,
  Trophy,
  Medal,
  Calendar,
  Maximize,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Book,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

const IconBase = (
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >,
) => {
  const IconComponent = ({
    className = '',
    size = 24,
  }: {
    className?: string;
    size?: number;
  }) => (
    <Icon
      size={size}
      color="currentColor"
      className={`${className}`}
    />
  );
  return IconComponent;
};
export const ChevronLeftIcon = IconBase(ChevronLeft);
export const ChevronRightIcon = IconBase(ChevronRight);
export const ChevronDownIcon = IconBase(ChevronDown);
export const ChevronUpIcon = IconBase(ChevronUp);
export const XIcon = IconBase(X);
export const HomeIcon = IconBase(Home);
export const SettingsIcon = IconBase(Settings);
export const ArrowLeftIcon = IconBase(ArrowLeft);
export const ArrowRightIcon = IconBase(ArrowRight);
export const SearchIcon = IconBase(Search);
export const InfoIcon = IconBase(Info);
export const LoaderIcon = IconBase(Loader);
export const EyeIcon = IconBase(Eye);
export const EyeOffIcon = IconBase(EyeOff);
export const BlindsIcon = IconBase(Blinds);
export const SlidersHorizontalIcon = IconBase(SlidersHorizontal);
export const PlusIcon = IconBase(Plus);
export const MoveRightIcon = IconBase(MoveRight);
export const RefreshCcwIcon = IconBase(RefreshCcw);
export const CheckIcon = IconBase(Check);
export const PersonStandingIcon = IconBase(PersonStanding);
export const UsersIcon = IconBase(Users);
export const UserIcon = IconBase(User);
export const MailIcon = IconBase(Mail)
export const PencilIcon = IconBase(Pencil);
export const SaveIcon = IconBase(Save);
export const ClockIcon = IconBase(Clock)
export const ChartColumnIncreasingIcon = IconBase(ChartColumnIncreasing);
export const TrophyIcon = IconBase(Trophy);
export const MedalIcon = IconBase(Medal);
export const CalendarIcon = IconBase(Calendar);
export const MaximizeIcon = IconBase(Maximize);
export const PlayIcon = IconBase(Play);
export const PauseIcon = IconBase(Pause);
export const RotateCcwIcon = IconBase(RotateCcw);
export const SkipForwardIcon = IconBase(SkipForward);
export const BookIcon = IconBase(Book)