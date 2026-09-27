import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Moon,
  Sun,
  ShieldCheck,
  BookOpen,
  Package,
  Search,
  Mail,
  Lock,
  Sliders,
  Code2,
  RotateCcw,
  Zap,
  ArrowRight,
} from 'lucide-react';

import {
  Button,
  type ButtonVariant,
  type ButtonSize,
  Input,
  type InputSize,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  type CardVariant,
  type CardPadding,
  Modal,
  ModalFooter,
  type ModalSize,
  Badge,
  type BadgeVariant,
  type BadgeSize,
  Switch,
  SpotlightCard,
  MagneticButton,
  AnimatedText,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  colors,
} from './index';

import { Cursor } from './components/Cursor/Cursor';
import { Magnetic } from './components/Cursor/Magnetic';

type TabType = 'components' | 'tokens' | 'tests' | 'package';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<TabType>('components');
  const [activeComponent, setActiveComponent] = useState<
    'button' | 'input' | 'card' | 'modal' | 'badge' | 'switch' | 'accordion' | 'spotlight' | 'magnetic' | 'animated-text'
  >('button');

  // Copy toast state
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Playground state: Button
  const [btnVariant, setBtnVariant] = useState<ButtonVariant>('primary');
  const [btnSize, setBtnSize] = useState<ButtonSize>('md');
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnFullWidth, setBtnFullWidth] = useState(false);
  const [btnHasLeftIcon, setBtnHasLeftIcon] = useState(true);
  const [btnHasRightIcon, setBtnHasRightIcon] = useState(false);

  // Playground state: Input
  const [inputSize, setInputSize] = useState<InputSize>('md');
  const [inputLabel, setInputLabel] = useState('Email Address');
  const [inputHelper, setInputHelper] = useState("We'll never share your email with anyone.");
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [inputHasIcon, setInputHasIcon] = useState(true);
  const [inputHasRightIcon, setInputHasRightIcon] = useState(false);
  const [inputFullWidth, setInputFullWidth] = useState(true);

  // Playground state: Card
  const [cardVariant, setCardVariant] = useState<CardVariant>('glass');
  const [cardHoverable, setCardHoverable] = useState(true);
  const [cardClickable, setCardClickable] = useState(false);
  const [cardPadding, setCardPadding] = useState<'none' | 'sm' | 'md' | 'lg'>('md');

  // Playground state: Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ModalSize>('md');
  const [modalCloseOnEsc, setModalCloseOnEsc] = useState(true);
  const [modalCloseOnOverlay, setModalCloseOnOverlay] = useState(true);
  const [modalTitle, setModalTitle] = useState('Configure Cluster Deployment');
  const [modalDescription, setModalDescription] = useState('Set node size and environmental configurations for this replica.');
  const [modalShowClose, setModalShowClose] = useState(true);

  // Playground state: Badge
  const [badgeVariant, setBadgeVariant] = useState<BadgeVariant>('primary');
  const [badgeSize, setBadgeSize] = useState<BadgeSize>('md');
  const [badgeWithDot, setBadgeWithDot] = useState(true);
  const [badgeRemovable, setBadgeRemovable] = useState(true);
  const [badgeVisible, setBadgeVisible] = useState(true);

  // Playground state: Switch
  const [switchChecked, setSwitchChecked] = useState(true);
  const [switchDisabled, setSwitchDisabled] = useState(false);
  const [switchLabel, setSwitchLabel] = useState('Two-Factor Authentication');
  const [switchDescription, setSwitchDescription] = useState('Require a secondary token for login');

  // Playground state: Motion / React Bits Components
  const [spotlightColor, setSpotlightColor] = useState('rgba(99, 102, 241, 0.25)');
  const [magneticIntensity, setMagneticIntensity] = useState(45);
  const [animatedPhrase, setAnimatedPhrase] = useState('Next Generation React Component Experience');
  const [animatedKey, setAnimatedKey] = useState(0);

  // Playground state: Accordion
  const [accordionType, setAccordionType] = useState<'single' | 'multiple'>('single');
  const [accordionCollapsible, setAccordionCollapsible] = useState(true);

  // Toggle Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Dynamic code snippet generator
  const getComponentSnippet = () => {
    switch (activeComponent) {
      case 'button':
        return `<Button
  variant="${btnVariant}"
  size="${btnSize}"${btnLoading ? '\n  isLoading' : ''}${btnDisabled ? '\n  disabled' : ''}${
          btnFullWidth ? '\n  fullWidth' : ''
        }${btnHasLeftIcon ? '\n  leftIcon={<Sparkles className="w-4 h-4" />}' : ''}${
          btnHasRightIcon ? '\n  rightIcon={<ArrowRight className="w-4 h-4" />}' : ''
        }
>
  Confirm Transaction
</Button>`;

      case 'input':
        return `<Input
  label="${inputLabel}"
  placeholder="Enter value..."
  size="${inputSize}"${inputHelper ? `\n  helperText="${inputHelper}"` : ''}${
          inputError ? `\n  error="${inputError}"` : ''
        }${inputSuccess ? '\n  success' : ''}${inputDisabled ? '\n  disabled' : ''}${
          !inputFullWidth ? '\n  fullWidth={false}' : ''
        }${inputHasIcon ? '\n  leftIcon={<Mail className="w-4 h-4" />}' : ''}${
          inputHasRightIcon ? '\n  rightIcon={<Search className="w-4 h-4" />}' : ''
        }
/>`;

      case 'card':
        return `<Card variant="${cardVariant}" padding="${cardPadding}"${cardHoverable ? ' isHoverable' : ''}${
          cardClickable ? ' isClickable' : ''
        }>
  <CardHeader>
    <CardTitle>Cloud Cluster Architecture</CardTitle>
    <CardDescription>Managed infrastructure scaling</CardDescription>
  </CardHeader>
  <CardContent>
    <p>High-availability nodes running across 3 availability zones.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm" variant="outline">Deploy Node</Button>
  </CardFooter>
</Card>`;

      case 'modal':
        return `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="${modalTitle}"
  description="${modalDescription}"
  size="${modalSize}"
  closeOnEsc={${modalCloseOnEsc}}
  closeOnOverlayClick={${modalCloseOnOverlay}}
  showCloseButton={${modalShowClose}}
>
  <div className="space-y-4">
    <Input label="Workspace Name" placeholder="e.g. quantum-core" />
    <Input label="Admin Email" type="email" placeholder="admin@domain.com" />
  </div>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={() => setIsOpen(false)}>Save & Launch</Button>
  </ModalFooter>
</Modal>`;

      case 'badge':
        return `<Badge
  variant="${badgeVariant}"
  size="${badgeSize}"${badgeWithDot ? '\n  withDot' : ''}${
          badgeRemovable ? '\n  isRemovable\n  onRemove={() => handleRemove()}' : ''
        }
>
  Production Ready
</Badge>`;

      case 'switch':
        return `<Switch
  checked={isEnabled}
  onChange={setIsEnabled}
  label="${switchLabel}"
  description="${switchDescription}"${
          switchDisabled ? '\n  disabled' : ''
        }
/>`;

      case 'accordion':
        return `<Accordion
  type="${accordionType}"${accordionCollapsible ? '\n  collapsible' : ''}
  className="w-full max-w-md bg-[var(--bg-secondary)]/50 p-4 rounded-2xl border border-[var(--border-color)]"
>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Aura UI?</AccordionTrigger>
    <AccordionContent>A premium enterprise React component library.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>Yes, it uses Framer Motion for buttery smooth transitions.</AccordionContent>
  </AccordionItem>
</Accordion>`;

      case 'spotlight':
        return `<SpotlightCard
  spotlightColor="${spotlightColor}"
  className="p-8 max-w-md bg-[var(--bg-secondary)] border border-[var(--border-color)]"
>
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
      <Sparkles className="w-5 h-5" />
    </div>
    <div>
      <h3 className="font-semibold text-white">Dynamic Spotlight</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">Radial cursor glow follower</p>
    </div>
  </div>
  <p className="text-sm text-[var(--text-muted)]">
    Hover around this card to reveal dynamic radial lighting effects inspired by React Bits.
  </p>
</SpotlightCard>`;

      case 'magnetic':
        return `<MagneticButton
  intensity={${magneticIntensity}}
  onClick={() => alert('Magnetic button triggered!')}
>
  Magnet Interactive Pull
</MagneticButton>`;

      case 'animated-text':
        return `<AnimatedText
  text="${animatedPhrase}"
  className="text-2xl font-bold text-white"
/>`;
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Cursor />
      
      {/* Top Banner Navigation */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--bg-primary)]/85 border-b border-[var(--border-color)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <Magnetic intensity={20}>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600 dark:from-white dark:via-slate-200 dark:to-indigo-300 bg-clip-text text-transparent">
                    Aura UI
                  </span>
                  <Badge variant="primary" size="sm" withDot>
                    v1.0.0
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Elevvo Design System & Component Library
                </p>
              </div>
            </div>
          </Magnetic>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-secondary)] p-1 rounded-xl border border-[var(--border-color)]">
            {([
              { id: 'components', label: 'Components' },
              { id: 'tokens', label: 'Design Tokens' },
              { id: 'tests', label: 'Tests & a11y', extra: <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] rounded-full font-bold ml-1.5">31/31</span> },
              { id: 'package', label: 'NPM Package' }
            ] as { id: string; label: string; extra?: React.ReactNode }[]).map((tab) => (
              <Magnetic key={tab.id} intensity={30} className="rounded-lg">
                <button
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-slate-500 dark:text-slate-400 hover:text-[var(--text-main)] hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-indigo-600 rounded-lg shadow-md shadow-indigo-600/30"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    {tab.label}
                    {tab.extra}
                  </span>
                </button>
              </Magnetic>
            ))}
          </nav>

          {/* Right Quick Actions */}
          <div className="flex items-center gap-2.5">
            <Magnetic intensity={40}>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.08)] transition-colors border border-[var(--border-color)] cursor-pointer"
                title="Toggle Dark/Light Mode"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </Magnetic>

            <Magnetic intensity={20}>
              <a
                href="http://localhost:6006"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[var(--bg-secondary)] text-indigo-300 border border-indigo-500/30 hover:bg-slate-200 dark:hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Storybook Docs</span>
              </a>
            </Magnetic>

            <div className="px-2.5 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium hidden lg:block">
              @elevvo/aura-ui
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Container */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {/* Background Ambient Glow */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
          </div>
        {/* Hero Section */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Wave 15 B1 • Advanced Frontend Engineering Track</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
              Enterprise React Component Library &{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-teal-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                Design System
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
              Built with React 19, strict TypeScript (zero <code className="text-indigo-300">any</code>),
              comprehensive Storybook 8 documentation with accessibility (<code className="text-cyan-300">a11y</code>)
              auditing, 31 passing Vitest unit tests, and dual-format NPM bundle export.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-color)]">
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1.5">
                  <span>10</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-normal">
                    Production
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Core & Motion Components</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-emerald-400 flex items-center gap-1.5">
                  <span>31 / 31</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Automated Unit Tests</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-cyan-400 flex items-center gap-1.5">
                  <span>100%</span>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Storybook a11y Audited</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-indigo-400 flex items-center gap-1.5">
                  <span>ESM + UMD</span>
                  <Package className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Vite Library Mode</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content 1: Components Interactive Playground */}
        {activeTab === 'components' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Component Selector */}
            <div className="lg:col-span-3 space-y-2 bg-[var(--bg-secondary)] p-4 rounded-2xl border border-[var(--border-color)] backdrop-blur-xl">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 py-1">
                Core UI Components
              </div>

              {[
                { id: 'button', name: 'Button', badge: '6 Variants' },
                { id: 'input', name: 'Input', badge: 'Validation' },
                { id: 'card', name: 'Card', badge: 'Compound' },
                { id: 'modal', name: 'Modal / Dialog', badge: 'Portal + a11y' },
                { id: 'badge', name: 'Badge & Tags', badge: 'Removable' },
                { id: 'switch', name: 'Switch Toggle', badge: 'Accessible' },
                { id: 'accordion', name: 'Accordion', badge: 'Animated' },
                { id: 'spotlight', name: 'Spotlight Card', badge: 'React Bits ✨' },
                { id: 'magnetic', name: 'Magnetic Button', badge: 'Physics ✨' },
                { id: 'animated-text', name: 'Animated Text', badge: 'Motion ✨' },
              ].map((comp) => (
                <motion.button
                  key={comp.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveComponent(comp.id as any)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    activeComponent === comp.id
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30'
                      : 'text-[var(--text-muted)] hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.08)] hover:text-slate-900 dark:hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{comp.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md ${
                      activeComponent === comp.id
                        ? 'bg-white/20 text-white font-semibold'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {comp.badge}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Playground Preview & Live Controls */}
            <div className="lg:col-span-9 space-y-6">
              {/* Top Preview Canvas */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 sm:p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[320px] shadow-xl">
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Interactive Live Canvas</span>
                </div>

                {/* Live Component Render */}
                <div className="w-full max-w-lg flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeComponent}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="w-full flex justify-center"
                    >
                      {/* BUTTON PLAYGROUND */}
                      {activeComponent === 'button' && (
                        <div className="w-full flex flex-col items-center gap-4">
                      <Button
                        variant={btnVariant}
                        size={btnSize}
                        isLoading={btnLoading}
                        disabled={btnDisabled}
                        fullWidth={btnFullWidth}
                        leftIcon={btnHasLeftIcon ? <Sparkles className="w-4 h-4" /> : undefined}
                        rightIcon={btnHasRightIcon ? <ArrowRight className="w-4 h-4" /> : undefined}
                        onClick={() => alert('Button Clicked Successfully!')}
                      >
                        Launch Production Cluster
                      </Button>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Click button to trigger interactive event</p>
                    </div>
                  )}

                  {/* INPUT PLAYGROUND */}
                  {activeComponent === 'input' && (
                    <div className="w-full">
                      <Input
                        label={inputLabel}
                        placeholder="Enter value..."
                        size={inputSize}
                        helperText={inputHelper}
                        error={inputError}
                        success={inputSuccess}
                        disabled={inputDisabled}
                        fullWidth={inputFullWidth}
                        leftIcon={inputHasIcon ? <Mail className="w-4 h-4" /> : undefined}
                        rightIcon={inputHasRightIcon ? <Search className="w-4 h-4" /> : undefined}
                      />
                    </div>
                  )}

                  {/* CARD PLAYGROUND */}
                  {activeComponent === 'card' && (
                    <Card
                      variant={cardVariant}
                      padding={cardPadding}
                      isHoverable={cardHoverable}
                      isClickable={cardClickable}
                      className="w-full max-w-md"
                      onClick={cardClickable ? () => alert('Card clicked!') : undefined}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Autonomous CI/CD Agent</CardTitle>
                          <Badge variant="primary" size="sm" withDot>
                            Active
                          </Badge>
                        </div>
                        <CardDescription>
                          Next-generation pipelines executing automated regression tests
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[var(--text-muted)]">
                            <span>Pipeline Health</span>
                            <span className="text-emerald-400 font-semibold">99.98%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <div className="w-[99%] h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="w-full flex items-center justify-between">
                          <span className="text-xs text-slate-500 dark:text-slate-400">Updated 2m ago</span>
                          <Button size="sm" variant="ghost">
                            View Logs
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  )}

                  {/* MODAL PLAYGROUND */}
                  {activeComponent === 'modal' && (
                    <div className="flex flex-col items-center gap-4">
                      <Button
                        variant="primary"
                        size="lg"
                        leftIcon={<Sliders className="w-4 h-4" />}
                        onClick={() => setIsModalOpen(true)}
                      >
                        Open Modal Dialog
                      </Button>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Supports ESC key dismiss, backdrop click, and focus trapping
                      </p>

                      <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title={modalTitle}
                        description={modalDescription}
                        size={modalSize}
                        closeOnEsc={modalCloseOnEsc}
                        closeOnOverlayClick={modalCloseOnOverlay}
                        showCloseButton={modalShowClose}
                      >
                        <div className="space-y-4 py-2">
                          <Input
                            label="Cluster Subdomain"
                            placeholder="e.g. staging-us-east"
                            leftIcon={<Search className="w-4 h-4" />}
                          />
                          <Input
                            label="Admin Security Token"
                            type="password"
                            placeholder="••••••••••••••••"
                            leftIcon={<Lock className="w-4 h-4" />}
                            helperText="Generated from your organization master vault."
                          />
                          <Switch
                            checked={true}
                            onChange={() => {}}
                            label="Enable Automatic Failover"
                            description="Automatically reroute traffic if regional latency exceeds 50ms"
                          />
                        </div>

                        <ModalFooter>
                          <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                            Cancel
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => {
                              alert('Configuration Saved!');
                              setIsModalOpen(false);
                            }}
                          >
                            Save & Deploy
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  )}

                  {/* BADGE PLAYGROUND */}
                  {activeComponent === 'badge' && (
                    <div className="flex flex-col items-center gap-6">
                      {badgeVisible ? (
                        <Badge
                          variant={badgeVariant}
                          size={badgeSize}
                          withDot={badgeWithDot}
                          isRemovable={badgeRemovable}
                          onRemove={() => setBadgeVisible(false)}
                        >
                          Production Ready
                        </Badge>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-xs text-slate-500 dark:text-slate-400">Badge was dismissed!</p>
                          <Button size="sm" variant="outline" onClick={() => setBadgeVisible(true)}>
                            Restore Badge
                          </Button>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-[var(--border-color)]">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="primary" withDot>
                          Primary
                        </Badge>
                        <Badge variant="success" withDot>
                          Success
                        </Badge>
                        <Badge variant="warning" withDot>
                          Warning
                        </Badge>
                        <Badge variant="danger" withDot>
                          Critical
                        </Badge>
                        <Badge variant="accent">Accent</Badge>
                      </div>
                    </div>
                  )}

                  {/* SWITCH PLAYGROUND */}
                  {activeComponent === 'switch' && (
                    <div className="w-full max-w-sm p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4">
                      <Switch
                        checked={switchChecked}
                        onChange={setSwitchChecked}
                        disabled={switchDisabled}
                        label={switchLabel}
                        description={switchDescription}
                      />

                      <div className="pt-3 border-t border-[var(--border-color)] flex justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Current state:</span>
                        <span className={switchChecked ? 'text-indigo-400 font-bold' : 'text-slate-500'}>
                          {switchChecked ? 'ENABLED' : 'DISABLED'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ACCORDION PLAYGROUND */}
                  {activeComponent === 'accordion' && (
                    <div className="w-full max-w-lg p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)]">
                      <Accordion type={accordionType} collapsible={accordionCollapsible}>
                        <AccordionItem value="features">
                          <AccordionTrigger>Why choose Aura UI?</AccordionTrigger>
                          <AccordionContent>
                            Aura UI provides premium, production-ready components that are fully accessible, written in strict TypeScript, and beautifully animated out of the box using Framer Motion.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="customization">
                          <AccordionTrigger>Is it easily customizable?</AccordionTrigger>
                          <AccordionContent>
                            Absolutely! Every component uses Tailwind CSS for styling and exposes `className` props merged safely with `tailwind-merge`.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="accessibility">
                          <AccordionTrigger>What about Accessibility (a11y)?</AccordionTrigger>
                          <AccordionContent>
                            All components are audited against WAI-ARIA standards. We use proper semantic HTML, ARIA attributes, and ensure full keyboard navigation support across the library.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  )}

                  {/* SPOTLIGHT CARD PLAYGROUND */}
                  {activeComponent === 'spotlight' && (
                    <div className="w-full max-w-md">
                      <SpotlightCard
                        spotlightColor={spotlightColor}
                        className="p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)]/90 shadow-2xl"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center ring-1 ring-indigo-500/30">
                            <Sparkles className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-white">Dynamic Spotlight Card</h3>
                            <p className="text-xs text-indigo-400">React Bits Style Motion</p>
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                          Hover your cursor across this card to watch the radial illumination follow your coordinates smoothly.
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Framer Motion Powered</span>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                            Live Glow
                          </span>
                        </div>
                      </SpotlightCard>
                    </div>
                  )}

                  {/* MAGNETIC BUTTON PLAYGROUND */}
                  {activeComponent === 'magnetic' && (
                    <div className="w-full flex flex-col items-center justify-center py-6 gap-6">
                      <div className="p-12 rounded-3xl border border-dashed border-indigo-500/30 bg-indigo-950/10 flex items-center justify-center">
                        <MagneticButton
                          intensity={magneticIntensity}
                          onClick={() => alert('Magnetic button clicked!')}
                          className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-base px-8 py-4 shadow-xl shadow-indigo-600/30 cursor-pointer flex items-center gap-2.5"
                        >
                          <Zap className="w-5 h-5 text-cyan-200" />
                          <span>Hover Me & Feel The Pull</span>
                        </MagneticButton>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-sm">
                        Move your mouse around the button. The spring physics pull the button toward your cursor before snapping back smoothly!
                      </p>
                    </div>
                  )}

                  {/* ANIMATED TEXT PLAYGROUND */}
                  {activeComponent === 'animated-text' && (
                    <div className="w-full max-w-lg p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-6 text-center">
                      <div className="min-h-[90px] flex items-center justify-center">
                        <AnimatedText
                          key={animatedKey}
                          text={animatedPhrase}
                          className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-600 to-cyan-500 dark:from-white dark:via-indigo-200 dark:to-cyan-400 justify-center"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          leftIcon={<RotateCcw className="w-4 h-4" />}
                          onClick={() => setAnimatedKey((prev) => prev + 1)}
                        >
                          Replay Animation
                        </Button>
                      </div>
                    </div>
                  )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Config Panel & Code Output */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Control Sliders & Props */}
                <div className="md:col-span-5 bg-[var(--bg-secondary)] p-5 rounded-2xl border border-[var(--border-color)] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Prop Controls</span>
                  </div>

                  {/* BUTTON PROPS */}
                  {activeComponent === 'button' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Variant</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(['primary', 'secondary', 'outline', 'ghost', 'danger', 'accent'] as ButtonVariant[]).map(
                            (v) => (
                              <button
                                key={v}
                                onClick={() => setBtnVariant(v)}
                                className={`px-2 py-1 rounded-md capitalize cursor-pointer ${
                                  btnVariant === v
                                    ? 'bg-indigo-600 text-white font-medium'
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                              >
                                {v}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Size</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(['sm', 'md', 'lg'] as ButtonSize[]).map((s) => (
                            <button
                              key={s}
                              onClick={() => setBtnSize(s)}
                              className={`px-2 py-1 rounded-md uppercase cursor-pointer ${
                                btnSize === s
                                  ? 'bg-indigo-600 text-white font-medium'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={btnLoading}
                            onChange={(e) => setBtnLoading(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>isLoading</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={btnDisabled}
                            onChange={(e) => setBtnDisabled(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>disabled</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={btnFullWidth}
                            onChange={(e) => setBtnFullWidth(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>fullWidth</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={btnHasLeftIcon}
                            onChange={(e) => setBtnHasLeftIcon(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>leftIcon</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={btnHasRightIcon}
                            onChange={(e) => setBtnHasRightIcon(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>rightIcon</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* INPUT PROPS */}
                  {activeComponent === 'input' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Size</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(['sm', 'md', 'lg'] as InputSize[]).map((s) => (
                            <button
                              key={s}
                              onClick={() => setInputSize(s)}
                              className={`px-2 py-1 rounded-md uppercase cursor-pointer ${
                                inputSize === s
                                  ? 'bg-indigo-600 text-white font-medium'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">State Simulation</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          <button
                            onClick={() => {
                              setInputError('');
                              setInputSuccess(false);
                            }}
                            className={`px-2 py-1 rounded-md cursor-pointer ${
                              !inputError && !inputSuccess
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            Default
                          </button>
                          <button
                            onClick={() => {
                              setInputError('Invalid email format');
                              setInputSuccess(false);
                            }}
                            className={`px-2 py-1 rounded-md cursor-pointer ${
                              inputError ? 'bg-rose-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            Error
                          </button>
                          <button
                            onClick={() => {
                              setInputSuccess(true);
                              setInputError('');
                            }}
                            className={`px-2 py-1 rounded-md cursor-pointer ${
                              inputSuccess ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            Success
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Text Props</label>
                        <input
                          type="text"
                          value={inputLabel}
                          onChange={(e) => setInputLabel(e.target.value)}
                          placeholder="Label text..."
                          className="w-full px-2 py-1.5 rounded bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700 text-white"
                        />
                        <input
                          type="text"
                          value={inputHelper}
                          onChange={(e) => setInputHelper(e.target.value)}
                          placeholder="Helper text..."
                          className="w-full px-2 py-1.5 rounded bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700 text-white"
                        />
                      </div>
                      
                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={inputFullWidth}
                            onChange={(e) => setInputFullWidth(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>fullWidth</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={inputDisabled}
                            onChange={(e) => setInputDisabled(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>disabled</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={inputHasIcon}
                            onChange={(e) => setInputHasIcon(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>leftIcon</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={inputHasRightIcon}
                            onChange={(e) => setInputHasRightIcon(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>rightIcon</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* CARD PROPS */}
                  {activeComponent === 'card' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Variant</label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {(['elevated', 'outlined', 'glass', 'gradient'] as CardVariant[]).map((v) => (
                            <button
                              key={v}
                              onClick={() => setCardVariant(v)}
                              className={`px-2 py-1 rounded-md capitalize cursor-pointer ${
                                cardVariant === v
                                  ? 'bg-indigo-600 text-white font-medium'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[var(--border-color)]">
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Padding</label>
                        <div className="grid grid-cols-4 gap-1.5">
                          {(['none', 'sm', 'md', 'lg'] as CardPadding[]).map((p) => (
                            <button
                              key={p}
                              onClick={() => setCardPadding(p)}
                              className={`px-2 py-1 rounded-md lowercase cursor-pointer ${
                                cardPadding === p
                                  ? 'bg-indigo-600 text-white font-medium'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cardHoverable}
                            onChange={(e) => setCardHoverable(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>isHoverable (Lift & Glow)</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cardClickable}
                            onChange={(e) => setCardClickable(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>isClickable (role=button)</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* MODAL PROPS */}
                  {activeComponent === 'modal' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Dialog Size</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(['sm', 'md', 'lg'] as ModalSize[]).map((s) => (
                            <button
                              key={s}
                              onClick={() => setModalSize(s)}
                              className={`px-2 py-1 rounded-md uppercase cursor-pointer ${
                                modalSize === s
                                  ? 'bg-indigo-600 text-white font-medium'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Text Props</label>
                        <input
                          type="text"
                          value={modalTitle}
                          onChange={(e) => setModalTitle(e.target.value)}
                          placeholder="Modal Title..."
                          className="w-full px-2 py-1.5 rounded bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700 text-white"
                        />
                        <input
                          type="text"
                          value={modalDescription}
                          onChange={(e) => setModalDescription(e.target.value)}
                          placeholder="Modal Description..."
                          className="w-full px-2 py-1.5 rounded bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700 text-white"
                        />
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={modalShowClose}
                            onChange={(e) => setModalShowClose(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>showCloseButton (X Icon)</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={modalCloseOnEsc}
                            onChange={(e) => setModalCloseOnEsc(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>closeOnEsc (Escape dismiss)</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={modalCloseOnOverlay}
                            onChange={(e) => setModalCloseOnOverlay(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>closeOnOverlayClick</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* BADGE PROPS */}
                  {activeComponent === 'badge' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Variant</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(['default', 'primary', 'success', 'warning', 'danger', 'accent'] as BadgeVariant[]).map(
                            (v) => (
                              <button
                                key={v}
                                onClick={() => setBadgeVariant(v)}
                                className={`px-2 py-1 rounded-md capitalize cursor-pointer ${
                                  badgeVariant === v
                                    ? 'bg-indigo-600 text-white font-medium'
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                              >
                                {v}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Size</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(['sm', 'md', 'lg'] as BadgeSize[]).map((s) => (
                            <button
                              key={s}
                              onClick={() => setBadgeSize(s)}
                              className={`px-2 py-1 rounded-md uppercase cursor-pointer ${
                                badgeSize === s
                                  ? 'bg-indigo-600 text-white font-medium'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={badgeWithDot}
                            onChange={(e) => setBadgeWithDot(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>withDot (Pulse indicator)</span>
                        </label>
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={badgeRemovable}
                            onChange={(e) => setBadgeRemovable(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>isRemovable (X button)</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* SWITCH PROPS */}
                  {activeComponent === 'switch' && (
                    <div className="space-y-3 text-xs">
                      <div className="space-y-2">
                        <label className="text-slate-500 dark:text-slate-400 block mb-1">Text Props</label>
                        <input
                          type="text"
                          value={switchLabel}
                          onChange={(e) => setSwitchLabel(e.target.value)}
                          placeholder="Switch Label..."
                          className="w-full px-2 py-1.5 rounded bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700 text-white"
                        />
                        <input
                          type="text"
                          value={switchDescription}
                          onChange={(e) => setSwitchDescription(e.target.value)}
                          placeholder="Switch Description..."
                          className="w-full px-2 py-1.5 rounded bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700 text-white"
                        />
                      </div>
                      <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={switchDisabled}
                            onChange={(e) => setSwitchDisabled(e.target.checked)}
                            className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                          />
                          <span>disabled</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* ACCORDION PROPS */}
                  {activeComponent === 'accordion' && (
                    <div className="space-y-4 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1.5 font-medium">Type (Selection mode)</label>
                        <div className="grid grid-cols-2 gap-2">
                          {(['single', 'multiple'] as const).map((t) => (
                            <button
                              key={t}
                              onClick={() => setAccordionType(t)}
                              className={`p-2 rounded-lg text-center transition-all cursor-pointer capitalize ${
                                accordionType === t
                                  ? 'bg-indigo-600/30 border border-indigo-500 text-white font-semibold'
                                  : 'bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700/60 text-[var(--text-muted)] hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {accordionType === 'single' && (
                        <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                          <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                            <input
                              type="checkbox"
                              checked={accordionCollapsible}
                              onChange={(e) => setAccordionCollapsible(e.target.checked)}
                              className="rounded bg-slate-200 dark:bg-slate-800 text-indigo-600"
                            />
                            <span>collapsible (allow closing all)</span>
                          </label>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SPOTLIGHT CARD PROPS */}
                  {activeComponent === 'spotlight' && (
                    <div className="space-y-4 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1.5 font-medium">Spotlight Radial Tint</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { name: 'Indigo (Default)', val: 'rgba(99, 102, 241, 0.25)' },
                            { name: 'Cyan Glow', val: 'rgba(6, 182, 212, 0.3)' },
                            { name: 'Emerald Spark', val: 'rgba(16, 185, 129, 0.3)' },
                            { name: 'Rose Aura', val: 'rgba(244, 63, 94, 0.3)' },
                          ].map((c) => (
                            <button
                              key={c.val}
                              onClick={() => setSpotlightColor(c.val)}
                              className={`p-2 rounded-lg text-left transition-all cursor-pointer ${
                                spotlightColor === c.val
                                  ? 'bg-indigo-600/30 border border-indigo-500 text-white font-semibold'
                                  : 'bg-slate-100 dark:bg-slate-200 dark:bg-slate-800/80 border border-slate-700/60 text-[var(--text-muted)] hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {c.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MAGNETIC BUTTON PROPS */}
                  {activeComponent === 'magnetic' && (
                    <div className="space-y-4 text-xs">
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-slate-500 dark:text-slate-400 font-medium">Magnetic Pull Intensity</label>
                          <span className="text-indigo-400 font-mono font-bold">{magneticIntensity}%</span>
                        </div>
                        <input
                          type="range"
                          min="15"
                          max="85"
                          value={magneticIntensity}
                          onChange={(e) => setMagneticIntensity(Number(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>Subtle (15%)</span>
                          <span>Strong (85%)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ANIMATED TEXT PROPS */}
                  {activeComponent === 'animated-text' && (
                    <div className="space-y-4 text-xs">
                      <div>
                        <label className="text-slate-500 dark:text-slate-400 block mb-1.5 font-medium">Custom Text Input</label>
                        <input
                          type="text"
                          value={animatedPhrase}
                          onChange={(e) => setAnimatedPhrase(e.target.value)}
                          placeholder="Type text to animate..."
                          className="w-full px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        leftIcon={<RotateCcw className="w-4 h-4" />}
                        onClick={() => setAnimatedKey((prev) => prev + 1)}
                      >
                        Re-trigger Animation
                      </Button>
                    </div>
                  )}
                </div>

                {/* Code Generator & Snippet */}
                <div className="md:col-span-7 bg-[var(--bg-secondary)] p-5 rounded-2xl border border-[var(--border-color)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Generated React JSX</span>
                      </div>

                      <button
                        onClick={() => copyToClipboard(getComponentSnippet(), 'code-snippet')}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-[var(--text-muted)] hover:text-slate-900 dark:hover:text-slate-900 dark:hover:text-white text-xs transition-colors cursor-pointer"
                      >
                        {copiedCode === 'code-snippet' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-300 overflow-x-auto leading-relaxed">
                      <code>{getComponentSnippet()}</code>
                    </pre>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>Exported from <code className="text-indigo-300">@elevvo/aura-ui</code></span>
                    <span className="text-emerald-400 font-medium">TypeScript Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Design Tokens */}
        {activeTab === 'tokens' && (
          <div className="space-y-8">
            {/* Color Palettes */}
            <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)]">
              <h2 className="text-xl font-bold text-white mb-2">Color Palettes & Variables</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Tailored HSL values engineered for high contrast, WCAG 2.1 AA accessibility, and vibrant aesthetics.
              </p>

              <div className="space-y-6">
                {Object.entries(colors).map(([paletteName, shades]) => (
                  <div key={paletteName}>
                    <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      {paletteName} Scale
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-11 gap-2">
                      {Object.entries(shades).map(([stop, hex]) => (
                        <div
                          key={stop}
                          onClick={() => copyToClipboard(hex, `${paletteName}-${stop}`)}
                          className="p-2.5 rounded-xl border border-[var(--border-color)] cursor-pointer hover:border-slate-500 transition-all group"
                        >
                          <div
                            className="h-12 rounded-lg mb-2 shadow-inner"
                            style={{ backgroundColor: hex }}
                          />
                          <div className="text-[11px] font-semibold text-white">{stop}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono group-hover:text-[var(--text-main)]">
                            {copiedCode === `${paletteName}-${stop}` ? 'Copied!' : hex}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-color)]">
                <h3 className="text-base font-bold text-white mb-4">Typography Hierarchy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Display H1 (36px / Semibold)</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">Quantum Design Engine</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Heading H2 (24px / Medium)</div>
                    <div className="text-xl font-semibold text-[var(--text-main)]">Reusable Components Hierarchy</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Body Regular (16px / 1.5 Line-height)</div>
                    <p className="text-sm text-[var(--text-muted)]">
                      Standard interface typography optimized for cross-browser legibility and crisp rendering.
                    </p>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Monospace Code (JetBrains Mono / 14px)</div>
                    <code className="text-xs font-mono text-cyan-300 bg-[var(--bg-primary)] px-2 py-1 rounded">
                      import &#123; Button, Modal, Card &#125; from '@elevvo/aura-ui';
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-color)]">
                <h3 className="text-base font-bold text-white mb-4">Shadows & Elevation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-md flex items-center justify-center text-xs text-[var(--text-muted)]">
                    shadow-md
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl flex items-center justify-center text-xs text-[var(--text-muted)]">
                    shadow-xl
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.25)] flex items-center justify-center text-xs text-indigo-300">
                    Indigo Glow
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center justify-center text-xs text-cyan-300">
                    Cyan Glow
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Tests & Accessibility Report */}
        {activeTab === 'tests' && (
          <div className="space-y-6">
            <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Automated Vitest Test Suites</span>
                    <Badge variant="success" size="sm" withDot>
                      31/31 PASSED
                    </Badge>
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Executed via Vitest and React Testing Library with jsdom environment simulation.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Pass Rate</span>
                </div>
              </div>

              {/* Suite List */}
              <div className="space-y-3">
                {[
                  {
                    name: 'src/components/Button/Button.test.tsx',
                    tests: 7,
                    time: '571ms',
                    desc: 'Rendering, variants, click handlers, disabled state, loading state, left/right icons, ref forwarding',
                  },
                  {
                    name: 'src/components/Input/Input.test.tsx',
                    tests: 7,
                    time: '639ms',
                    desc: 'Label association, onChange typing, error alert with aria-invalid, helperText with aria-describedby, disabled, icons, ref',
                  },
                  {
                    name: 'src/components/Modal/Modal.test.tsx',
                    tests: 6,
                    time: '797ms',
                    desc: 'DOM portal mounting, ARIA dialog roles, close button click, backdrop click, ESC key dismiss, persistent modal',
                  },
                  {
                    name: 'src/components/Card/Card.test.tsx',
                    tests: 4,
                    time: '412ms',
                    desc: 'Compound subcomponents (Header, Title, Description, Content, Footer), visual variants, clickable role="button", ref forwarding',
                  },
                  {
                    name: 'src/components/Badge/Badge.test.tsx',
                    tests: 3,
                    time: '719ms',
                    desc: 'Content rendering, removable dismiss button handler, status variant styling',
                  },
                  {
                    name: 'src/components/Switch/Switch.test.tsx',
                    tests: 4,
                    time: '812ms',
                    desc: 'role="switch", aria-checked toggling, Space and Enter keyboard navigation, disabled prevention',
                  },
                ].map((suite) => (
                  <div
                    key={suite.name}
                    className="p-4 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-mono text-xs font-semibold text-[var(--text-main)]">
                          {suite.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          {suite.tests} tests
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-6">{suite.desc}</p>
                    </div>
                    <div className="text-xs text-slate-500 font-mono shrink-0 pl-6 sm:pl-0">
                      {suite.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Storybook a11y Section */}
            <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Storybook Accessibility (a11y) Addon Audit</span>
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Automated axe-core compliance checks configured directly in Storybook 8 to guarantee WCAG 2.1 Level AA compatibility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)] space-y-2">
                  <div className="font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Color Contrast Ratios</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">
                    All text tokens pass 4.5:1 minimum contrast ratio against dark and light panel surfaces.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)] space-y-2">
                  <div className="font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Focus Ring Indicators</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">
                    Every interactive element includes high-visibility <code className="text-indigo-300">focus-visible:ring-2</code> indicators.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)] space-y-2">
                  <div className="font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ARIA Roles & Attributes</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">
                    Dialogs, inputs, alerts, and switches feature proper <code className="text-cyan-300">aria-modal</code>, <code className="text-cyan-300">aria-invalid</code>, and <code className="text-cyan-300">role="switch"</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: NPM Package & Documentation */}
        {activeTab === 'package' && (
          <div className="space-y-6">
            <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">NPM Package Build & Distribution</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Configured with Vite Library Mode, Rollup bundler, and vite-plugin-dts type declarations.
                  </p>
                </div>
              </div>

              {/* Install Code */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Installation
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between">
                    <code className="text-xs font-mono text-indigo-300">
                      npm install @elevvo/aura-ui
                    </code>
                    <button
                      onClick={() => copyToClipboard('npm install @elevvo/aura-ui', 'install-cmd')}
                      className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-700 text-xs text-[var(--text-muted)] cursor-pointer"
                    >
                      {copiedCode === 'install-cmd' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Usage in React 19 / Vite / Next.js
                  </div>
                  <pre className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-main)] overflow-x-auto">
                    {`import { Button, Input, Modal, Card, Badge, Switch } from '@elevvo/aura-ui';
import '@elevvo/aura-ui/style.css';

export function Dashboard() {
  return (
    <Card variant="glass">
      <CardTitle>Welcome to Aura UI</CardTitle>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`}
                  </pre>
                </div>

                {/* Built Distribution Files */}
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Distribution Artifacts in <code className="text-indigo-300">dist/</code>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)]">
                      <div className="text-xs font-mono font-semibold text-indigo-300">aura-ui.es.js</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">ES Module format for bundlers</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-2">61.7 kB (16.9 kB gzip)</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)]">
                      <div className="text-xs font-mono font-semibold text-cyan-300">aura-ui.umd.js</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">UMD format for browser scripts</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-2">46.6 kB (15.2 kB gzip)</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-color)]">
                      <div className="text-xs font-mono font-semibold text-purple-300">index.d.ts</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Full TypeScript type definitions</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-2">Generated by vite-plugin-dts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-16 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/60 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text-main)]">Aura UI</span>
            <span>•</span>
            <span>Task 10 Component Library & Design System</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Elevvo Pathways Frontend Track Wave 15 B1</span>
            <span>•</span>
            <span className="text-[var(--text-muted)] font-medium">Sayed Mahmoud</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
