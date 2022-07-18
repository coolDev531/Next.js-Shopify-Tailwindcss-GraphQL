import { ShopifySelect } from "../../.shopify-cms/types/shopify";

export type IconName =
  | "AcademicCapIcon"
  | "AdjustmentsIcon"
  | "AnnotationIcon"
  | "ArchiveIcon"
  | "ArrowCircleDownIcon"
  | "ArrowCircleLeftIcon"
  | "ArrowCircleRightIcon"
  | "ArrowCircleUpIcon"
  | "ArrowDownIcon"
  | "ArrowLeftIcon"
  | "ArrowNarrowDownIcon"
  | "ArrowNarrowLeftIcon"
  | "ArrowNarrowRightIcon"
  | "ArrowNarrowUpIcon"
  | "ArrowRightIcon"
  | "ArrowSmDownIcon"
  | "ArrowSmLeftIcon"
  | "ArrowSmRightIcon"
  | "ArrowSmUpIcon"
  | "ArrowUpIcon"
  | "ArrowsExpandIcon"
  | "AtSymbolIcon"
  | "BackspaceIcon"
  | "BadgeCheckIcon"
  | "BanIcon"
  | "BeakerIcon"
  | "BellIcon"
  | "BookOpenIcon"
  | "BookmarkAltIcon"
  | "BookmarkIcon"
  | "BriefcaseIcon"
  | "CakeIcon"
  | "CalculatorIcon"
  | "CalendarIcon"
  | "CameraIcon"
  | "CashIcon"
  | "ChartBarIcon"
  | "ChartPieIcon"
  | "ChartSquareBarIcon"
  | "ChatAlt2Icon"
  | "ChatAltIcon"
  | "ChatIcon"
  | "CheckCircleIcon"
  | "CheckIcon"
  | "ChevronDoubleDownIcon"
  | "ChevronDoubleLeftIcon"
  | "ChevronDoubleRightIcon"
  | "ChevronDoubleUpIcon"
  | "ChevronDownIcon"
  | "ChevronLeftIcon"
  | "ChevronRightIcon"
  | "ChevronUpIcon"
  | "ChipIcon"
  | "ClipboardCheckIcon"
  | "ClipboardCopyIcon"
  | "ClipboardListIcon"
  | "ClipboardIcon"
  | "ClockIcon"
  | "CloudDownloadIcon"
  | "CloudUploadIcon"
  | "CloudIcon"
  | "CodeIcon"
  | "CogIcon"
  | "CollectionIcon"
  | "ColorSwatchIcon"
  | "CreditCardIcon"
  | "CubeTransparentIcon"
  | "CubeIcon"
  | "CurrencyBangladeshiIcon"
  | "CurrencyDollarIcon"
  | "CurrencyEuroIcon"
  | "CurrencyPoundIcon"
  | "CurrencyRupeeIcon"
  | "CurrencyYenIcon"
  | "CursorClickIcon"
  | "DatabaseIcon"
  | "DesktopComputerIcon"
  | "DeviceMobileIcon"
  | "DeviceTabletIcon"
  | "DocumentAddIcon"
  | "DocumentDownloadIcon"
  | "DocumentDuplicateIcon"
  | "DocumentRemoveIcon"
  | "DocumentReportIcon"
  | "DocumentSearchIcon"
  | "DocumentTextIcon"
  | "DocumentIcon"
  | "DotsCircleHorizontalIcon"
  | "DotsHorizontalIcon"
  | "DotsVerticalIcon"
  | "DownloadIcon"
  | "DuplicateIcon"
  | "EmojiHappyIcon"
  | "EmojiSadIcon"
  | "ExclamationCircleIcon"
  | "ExclamationIcon"
  | "ExternalLinkIcon"
  | "EyeOffIcon"
  | "EyeIcon"
  | "FastForwardIcon"
  | "FilmIcon"
  | "FilterIcon"
  | "FingerPrintIcon"
  | "FireIcon"
  | "FlagIcon"
  | "FolderAddIcon"
  | "FolderDownloadIcon"
  | "FolderOpenIcon"
  | "FolderRemoveIcon"
  | "FolderIcon"
  | "GiftIcon"
  | "GlobeAltIcon"
  | "GlobeIcon"
  | "HandIcon"
  | "HashtagIcon"
  | "HeartIcon"
  | "HomeIcon"
  | "IdentificationIcon"
  | "InboxInIcon"
  | "InboxIcon"
  | "InformationCircleIcon"
  | "KeyIcon"
  | "LibraryIcon"
  | "LightBulbIcon"
  | "LightningBoltIcon"
  | "LinkIcon"
  | "LocationMarkerIcon"
  | "LockClosedIcon"
  | "LockOpenIcon"
  | "LoginIcon"
  | "LogoutIcon"
  | "MailOpenIcon"
  | "MailIcon"
  | "MapIcon"
  | "MenuAlt1Icon"
  | "MenuAlt2Icon"
  | "MenuAlt3Icon"
  | "MenuAlt4Icon"
  | "MenuIcon"
  | "MicrophoneIcon"
  | "MinusCircleIcon"
  | "MinusSmIcon"
  | "MinusIcon"
  | "MoonIcon"
  | "MusicNoteIcon"
  | "NewspaperIcon"
  | "OfficeBuildingIcon"
  | "PaperAirplaneIcon"
  | "PaperClipIcon"
  | "PauseIcon"
  | "PencilAltIcon"
  | "PencilIcon"
  | "PhoneIncomingIcon"
  | "PhoneMissedCallIcon"
  | "PhoneOutgoingIcon"
  | "PhoneIcon"
  | "PhotographIcon"
  | "PlayIcon"
  | "PlusCircleIcon"
  | "PlusSmIcon"
  | "PlusIcon"
  | "PresentationChartBarIcon"
  | "PresentationChartLineIcon"
  | "PrinterIcon"
  | "PuzzleIcon"
  | "QrcodeIcon"
  | "QuestionMarkCircleIcon"
  | "ReceiptRefundIcon"
  | "ReceiptTaxIcon"
  | "RefreshIcon"
  | "ReplyIcon"
  | "RewindIcon"
  | "RssIcon"
  | "SaveAsIcon"
  | "SaveIcon"
  | "ScaleIcon"
  | "ScissorsIcon"
  | "SearchCircleIcon"
  | "SearchIcon"
  | "SelectorIcon"
  | "ServerIcon"
  | "ShareIcon"
  | "ShieldCheckIcon"
  | "ShieldExclamationIcon"
  | "ShoppingBagIcon"
  | "ShoppingCartIcon"
  | "SortAscendingIcon"
  | "SortDescendingIcon"
  | "SparklesIcon"
  | "SpeakerphoneIcon"
  | "StarIcon"
  | "StatusOfflineIcon"
  | "StatusOnlineIcon"
  | "StopIcon"
  | "SunIcon"
  | "SupportIcon"
  | "SwitchHorizontalIcon"
  | "SwitchVerticalIcon"
  | "TableIcon"
  | "TagIcon"
  | "TemplateIcon"
  | "TerminalIcon"
  | "ThumbDownIcon"
  | "ThumbUpIcon"
  | "TicketIcon"
  | "TranslateIcon"
  | "TrashIcon"
  | "TrendingDownIcon"
  | "TrendingUpIcon"
  | "TruckIcon"
  | "UploadIcon"
  | "UserAddIcon"
  | "UserCircleIcon"
  | "UserGroupIcon"
  | "UserRemoveIcon"
  | "UserIcon"
  | "UsersIcon"
  | "VariableIcon"
  | "VideoCameraIcon"
  | "ViewBoardsIcon"
  | "ViewGridAddIcon"
  | "ViewGridIcon"
  | "ViewListIcon"
  | "VolumeOffIcon"
  | "VolumeUpIcon"
  | "WifiIcon"
  | "XCircleIcon"
  | "XIcon"
  | "ZoomInIcon"
  | "ZoomOutIcon";

export const heroIconItems: IconName[] = [
  "BadgeCheckIcon",
  "CameraIcon",
  "ChatAlt2Icon",
  "ColorSwatchIcon",
  "CloudIcon",
  "DesktopComputerIcon",
  "CubeTransparentIcon",
  "DeviceMobileIcon",
  "DeviceTabletIcon",
  "CursorClickIcon",
  "HeartIcon",
  "KeyIcon",
  "LightningBoltIcon",
  "LinkIcon",
  "LightBulbIcon",
  "LockClosedIcon",
  "LockOpenIcon",
  "PaperAirplaneIcon",
  "ShoppingBagIcon",
  "ShoppingCartIcon",
  "SparklesIcon",
  "TagIcon",
  "TruckIcon",
  "UserGroupIcon",
  "AnnotationIcon",
  "MailIcon",
  "MailOpenIcon",
];

const createHeroIcons = (icons: IconName[]) => {
  return icons.map((icon) => ({ value: icon, label: icon, group: "Hero Icons" }));
};

export const heroIcons = createHeroIcons(heroIconItems);

export const twIcons = [
  {
    value: "brutalist",
    label: "Brutalist",
    group: "TW Icons",
  },
  {
    value: "colors",
    label: "Colors",
    group: "TW Icons",
  },
  {
    value: "elegant",
    label: "Elegant",
    group: "TW Icons",
  },
  {
    value: "filters",
    label: "Filters",
    group: "TW Icons",
  },
  {
    value: "grid",
    label: "Grid",
    group: "TW Icons",
  },
  {
    value: "playful",
    label: "Playful",
    group: "TW Icons",
  },
  {
    value: "shadows",
    label: "Shadows",
    group: "TW Icons",
  },
  {
    value: "simple",
    label: "Simple",
    group: "TW Icons",
  },
  {
    value: "sizing",
    label: "Sizing",
    group: "TW Icons",
  },
  {
    value: "transforms",
    label: "Transforms",
    group: "TW Icons",
  },
  {
    value: "typography",
    label: "Typography",
    group: "TW Icons",
  },
  {
    value: "ui-avatar",
    label: "Ui-avatar.svg",
    group: "TW Icons",
  },
  {
    value: "ui-code",
    label: "Ui-code.svg",
    group: "TW Icons",
  },
  {
    value: "ui-cursor",
    label: "Ui-cursor.svg",
    group: "TW Icons",
  },
  {
    value: "ui-mobile",
    label: "Ui-mobile.svg",
    group: "TW Icons",
  },
  {
    value: "ui-responsive",
    label: "Ui-responsive.svg",
    group: "TW Icons",
  },
  {
    value: "ui-stack",
    label: "Ui-stack.svg",
    group: "TW Icons",
  },
  {
    value: "ui-1",
    label: "Ui-1.svg",
    group: "TW Icons",
  },
  {
    value: "ui-2",
    label: "Ui-2.svg",
    group: "TW Icons",
  },
  {
    value: "ui-3",
    label: "Ui-3.svg",
    group: "TW Icons",
  },
  {
    value: "ui-4",
    label: "Ui-4.svg",
    group: "TW Icons",
  },
] as const;

export const twUiIcons = [
  {
    value: "CalendarLight",
    label: "CalendarLight",
    group: "TW UI Icons",
  },
  {
    value: "ChatLight",
    label: "ChatLight",
    group: "TW UI Icons",
  },
  {
    value: "Code",
    label: "Code",
    group: "TW UI Icons",
  },
  {
    value: "DeliveryLight",
    label: "DeliveryLight",
    group: "TW UI Icons",
  },
  {
    value: "ExchangeSimple",
    label: "ExchangeSimple",
    group: "TW UI Icons",
  },
  {
    value: "FastCheckoutLight",
    label: "FastCheckoutLight",
    group: "TW UI Icons",
  },
  {
    value: "GiftCardLight",
    label: "GiftCardLight",
    group: "TW UI Icons",
  },
  {
    value: "PlanetLight",
    label: "PlanetLight",
    group: "TW UI Icons",
  },
  {
    value: "Resize",
    label: "Resize",
    group: "TW UI Icons",
  },
  {
    value: "ReturnsLight",
    label: "ReturnsLight",
    group: "TW UI Icons",
  },
  {
    value: "ShippingSimple",
    label: "ShippingSimple",
    group: "TW UI Icons",
  },
  {
    value: "Stack",
    label: "Stack",
    group: "TW UI Icons",
  },
  {
    value: "WarrantyLight",
    label: "WarrantyLight",
    group: "TW UI Icons",
  },
  {
    value: "WarrantySimple",
    label: "WarrantySimple",
    group: "TW UI Icons",
  },
] as const;

export const lineIcons = [
  {
    value: "server-2",
    label: "Server 2",
    group: "Line Icons",
  },
  {
    value: "server-8",
    label: "Server 8",
    group: "Line Icons",
  },
  {
    value: "up-align-1-light",
    label: "Up Align 1 Light",
    group: "Line Icons",
  },
  {
    value: "columns-1-light",
    label: "columns-1-light",
    group: "Line Icons",
  },
  {
    value: "laptop-star-light",
    label: "laptop-star-light",
    group: "Line Icons",
  },
  {
    value: "squares-1-light",
    label: "squares-1-light",
    group: "Line Icons",
  },
  {
    value: "cubes-light",
    label: "cubes-light",
    group: "Line Icons",
  },
] as const;

export const icons = [
  ...(heroIcons as unknown as ShopifySelect["options"]),
  ...(twIcons as unknown as ShopifySelect["options"]),
  ...(twUiIcons as unknown as ShopifySelect["options"]),
  ...(lineIcons as unknown as ShopifySelect["options"]),
];
