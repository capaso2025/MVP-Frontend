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
      className={`text-primary ${className}`}
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
