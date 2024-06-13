import React from 'react';

const sharedClasses = {
  zincBgLight: 'bg-zinc-100',
  zincBgDark: 'dark:bg-zinc-900',
  zincTextLight: 'text-zinc-600',
  zincTextDark: 'dark:text-zinc-400',
  zincHoverLight: 'hover:text-zinc-900',
  zincHoverDark: 'dark:hover:text-white',
  zincFocusLight: 'focus:text-zinc-900',
  zincFocusDark: 'dark:focus:text-white',
  zincBorderLight: 'border-zinc-200',
  zincBorderDark: 'dark:border-zinc-700',
};

const NavItem = ({ number, title }) => (
  <a href="#" className={`${sharedClasses.zincTextLight} ${sharedClasses.zincTextDark} ${sharedClasses.zincHoverLight} ${sharedClasses.zincHoverDark} ${sharedClasses.zincFocusLight} ${sharedClasses.zincFocusDark} group flex py-4 px-1 text-sm font-medium leading-5 focus:outline-none transition ease-in-out duration-150`}>
    <span className="flex items-center">
      <span className="h-5 w-5 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center">
        <span className={`${sharedClasses.zincTextLight} ${sharedClasses.zincTextDark}`}>{number}</span>
      </span>
      <span className="ml-2">{title}</span>
    </span>
  </a>
);

const PersonalDetailsForm = () => (
  <form id="signup-form" className={`mt-8 space-y-6 bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md`}>
    <div className="space-y-4">
      <h3 className="text-lg leading-6 font-medium text-zinc-900 dark:text-white">
        <span className="text-red-600">01</span> Personal details
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Tell us a bit about yourself
      </p>
      <div className={`border-t ${sharedClasses.zincBorderLight} ${sharedClasses.zincBorderDark} pt-4`}>
        {/* Form fields go here */}
      </div>
      <button id="continue-btn" type="submit" className={`w-full bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-400 dark:hover:bg-indigo-300 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline`}>
        Continue
      </button>
    </div>
  </form>
);

const FinancialJourneyComponent = () => (
  <div className={`min-h-screen ${sharedClasses.zincBgLight} ${sharedClasses.zincBgDark} flex flex-col`}>
    <div className={`bg-white ${sharedClasses.zincBgDark}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`border-b ${sharedClasses.zincBorderLight} ${sharedClasses.zincBorderDark}`}>
          <nav className="-mb-px flex" aria-label="Progress">
            <NavItem number="01" title="Personal details" />
            <NavItem number="02" title="Account details" />
            <NavItem number="03" title="Final details" />
          </nav>
        </div>
      </div>
    </div>
    <div className="flex-grow bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-zinc-900 dark:text-white">
            Start Your Financial Journey Today
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Set up your <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Easy access account</a>
          </p>
        </div>
        <PersonalDetailsForm />
      </div>
    </div>
  </div>
);

export default FinancialJourneyComponent;
