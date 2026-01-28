// lib/cookieConsent.ts
import Cookies from 'js-cookie';

export const COOKIE_NAME = 'cookie_consent';
export const CONSENT_VERSION = '1.0';

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  advertising: boolean;
  version: string;
  timestamp: number;
};

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  functional: false,
  advertising: false,
  version: CONSENT_VERSION,
  timestamp: Date.now(),
};

export function getConsent(): CookieConsent | null {
  const value = Cookies.get(COOKIE_NAME);
  return value ? JSON.parse(value) : null;
}

export function setConsent(consent: CookieConsent) {
  Cookies.set(COOKIE_NAME, JSON.stringify(consent), {
    expires: 365,
    sameSite: 'lax',
  });
}

export function shouldShowBanner(): boolean {
  const consent = getConsent();
  return !consent || consent.version !== CONSENT_VERSION;
}


/* import Cookies from 'js-cookie';

export const COOKIE_NAME = 'cookie_consent';

export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: number;
};

export const defaultConsent: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: Date.now(),
};

export function getConsent(): CookieConsentState | null {
  const value = Cookies.get(COOKIE_NAME);
  return value ? JSON.parse(value) : null;
}

export function setConsent(consent: CookieConsentState) {
  Cookies.set(COOKIE_NAME, JSON.stringify(consent), {
    expires: 365,
    sameSite: 'lax',
  });
} */
