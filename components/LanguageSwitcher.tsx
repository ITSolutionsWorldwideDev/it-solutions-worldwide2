'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import i18nConfig from '@/i18n/i18nConfig';
// import nlFlag from '@/assets/images/united-kingdom-flag-icon.png';
// import enFlag from '@/assets/images/netherlands-flag-icon.png'; // Update flag paths accordingly
import Image from 'next/image';

// import ukFlag from '../assets/images/united-kingdom-flag-icon.png';
// import nlFlag from '../assets/images/netherlands-flag-icon.png';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale = i18nConfig.locales.find(locale =>
    pathname?.startsWith(`/${locale}`)
  ) || i18nConfig.defaultLocale;

  const toggleLocale = () => {
    const newLocale = currentLocale === 'en' ? 'nl' : 'en';
    const pathWithoutLocale = pathname?.replace(`/${currentLocale}`, '') || '';
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  const flag = currentLocale === 'en' ? '/assets/images/flags/nl.png' : '/assets/images/flags/uk.png';
  const label = currentLocale === 'en' ? 'Dutch' : 'English';

  return (
    <button
      className="z-50 fixed right-0 top-1/2 transform -translate-y-1/2 -rotate-90 flex items-center text-black bg-white rounded-sm border-2 border-gray-300 px-3 py-2 hover:bg-gray-100 -mr-10 shadow-md"
      onClick={toggleLocale}
      disabled={isPending}
    >
      <Image src={flag} alt="flag" width={20} height={20} className="mr-2" />
      {label}
    </button>
  );
}
