// components/CookieConsent.tsx
'use client';

import { useEffect, useState } from 'react';
import {
  defaultConsent,
  setConsent,
  shouldShowBanner,
} from '@/lib/cookieConsent';

import type { CookieConsent } from '@/lib/cookieConsent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setLocalConsent] =
    useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    if (shouldShowBanner()) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }

    const openSettings = () => {
      setVisible(true);
      setSettingsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('open-cookie-settings', openSettings);
    return () => {
      window.removeEventListener('open-cookie-settings', openSettings);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const close = () => {
    setVisible(false);
    setSettingsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const acceptAll = () => {
    setConsent({
      ...defaultConsent,
      analytics: true,
      functional: true,
      advertising: true,
      timestamp: Date.now(),
    });
    close();
  };

  const rejectAll = () => {
    setConsent({ ...defaultConsent, timestamp: Date.now() });
    close();
  };

  const savePreferences = () => {
    setConsent({ ...consent, timestamp: Date.now() });
    window.dispatchEvent(new Event("cookie-consent-changed"));
    close();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/40">
      <div className="w-full rounded-t-xl bg-white p-6 shadow-xl">
        {!settingsOpen ? (
          <>
            <p className="mb-4 text-sm text-gray-700">
              We use cookies and similar technologies to personalize content,
              analyze traffic, and improve your experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptAll}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Accept all
              </button>

              <button
                onClick={rejectAll}
                className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
              >
                Reject all
              </button>

              <button
                onClick={() => setSettingsOpen(true)}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Cookie settings
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="mb-4 text-lg font-semibold">
              Cookie preferences
            </h3>

            <Toggle
              label="Strictly necessary cookies"
              description="Required for the website to function."
              checked
              disabled
            />

            <Toggle
              label="Analytics cookies"
              description="Help us understand how visitors use the site."
              checked={consent.analytics}
              onChange={(v) =>
                setLocalConsent({ ...consent, analytics: v })
              }
            />

            <Toggle
              label="Functional cookies"
              description="Enable enhanced functionality and personalization."
              checked={consent.functional}
              onChange={(v) =>
                setLocalConsent({ ...consent, functional: v })
              }
            />

            <Toggle
              label="Advertising cookies"
              description="Used to deliver personalized ads."
              checked={consent.advertising}
              onChange={(v) =>
                setLocalConsent({ ...consent, advertising: v })
              }
            />

            <div className="mt-6 flex gap-3">
              <button
                onClick={savePreferences}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Save preferences
              </button>

              <button
                onClick={close}
                className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-5 w-5 accent-blue-600 disabled:opacity-50"
      />
    </div>
  );
}

/* "use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import {
  COOKIE_NAME,
  defaultConsent,
  getConsent,
  setConsent,
  CookieConsentState,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [consent, setLocalConsent] =
    useState<CookieConsentState>(defaultConsent);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const fullConsent = {
      ...defaultConsent,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: Date.now(),
    };
    setConsent(fullConsent);
    setVisible(false);
  };

  const rejectAll = () => {
    setConsent({ ...defaultConsent, timestamp: Date.now() });
    setVisible(false);
  };

  const saveCustom = () => {
    setConsent({ ...consent, timestamp: Date.now() });
    setVisible(false);
  };

  //   useEffect(() => {
  //     const consent = Cookies.get(COOKIE_NAME);
  //     if (!consent) {
  //       setVisible(true);
  //     }
  //   }, []);

  //   const acceptCookies = () => {
  //     Cookies.set(COOKIE_NAME, "accepted", { expires: 365 });
  //     setVisible(false);
  //   };

  //   const rejectCookies = () => {
  //     Cookies.set(COOKIE_NAME, "rejected", { expires: 365 });
  //     setVisible(false);
  //   };

  if (!visible) return null;

  const styles = {
    overlay: {
      position: "fixed" as const,
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 1000,
      display: "flex",
      alignItems: "flex-end",
    },
    banner: {
      background: "#111",
      color: "#fff",
      padding: "20px",
      width: "100%",
    },
    text: {
      marginBottom: "12px",
    },
    buttons: {
      display: "flex",
      gap: "10px",
      marginTop: "12px",
      flexWrap: "wrap" as const,
    },
    accept: {
      background: "#4CAF50",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      cursor: "pointer",
    },
    reject: {
      background: "#555",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      cursor: "pointer",
    },
    customize: {
      background: "#222",
      color: "#fff",
      border: "1px solid #777",
      padding: "8px 14px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.overlay} role="dialog" aria-live="polite">
      <div style={styles.banner}>
        {!customizing ? (
          <>
            <p style={styles.text}>
              We use cookies to improve your experience. Manage your preferences
              or accept all cookies.
            </p>

            <div style={styles.buttons}>
              <button onClick={acceptAll} style={styles.accept}>
                Accept all
              </button>
              <button onClick={rejectAll} style={styles.reject}>
                Reject all
              </button>
              <button
                onClick={() => setCustomizing(true)}
                style={styles.customize}
              >
                Customize
              </button>
            </div>
          </>
        ) : (
          <>
          <div className=" flex flex-col gap-2">
            <h4>Cookie preferences</h4>

            <label>
              <input type="checkbox" checked disabled />&nbsp; Necessary (required)
            </label>

            <label>
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) =>
                  setLocalConsent({
                    ...consent,
                    analytics: e.target.checked,
                  })
                }
              />&nbsp;
              Analytics
            </label>

            <label>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) =>
                  setLocalConsent({
                    ...consent,
                    marketing: e.target.checked,
                  })
                }
              />&nbsp;
              Marketing
            </label>

            <label>
              <input
                type="checkbox"
                checked={consent.preferences}
                onChange={(e) =>
                  setLocalConsent({
                    ...consent,
                    preferences: e.target.checked,
                  })
                }
              />&nbsp;
              Preferences
            </label>
            </div>

            <div style={styles.buttons}>
              <button onClick={saveCustom} style={styles.accept}>
                Save preferences
              </button>
              <button
                onClick={() => setCustomizing(false)}
                style={styles.reject}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

//   return (
//     <div style={styles.banner}>
//       <p style={styles.text}>
//         We use cookies to improve your experience. By clicking “Accept”, you
//         agree to the use of cookies.
//       </p>
//       <div style={styles.buttons}>
//         <button onClick={acceptCookies} style={styles.accept}>
//           Accept
//         </button>
//         <button onClick={rejectCookies} style={styles.reject}>
//           Reject
//         </button>
//       </div>
//     </div>
//   );
} */

// const styles = {
//   banner: {
//     position: "fixed" as const,
//     bottom: 0,
//     width: "100%",
//     background: "#111",
//     color: "#fff",
//     padding: "16px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   text: {
//     maxWidth: "70%",
//   },
//   buttons: {
//     display: "flex",
//     gap: "10px",
//   },
//   accept: {
//     background: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     padding: "8px 12px",
//     cursor: "pointer",
//   },
//   reject: {
//     background: "#555",
//     color: "#fff",
//     border: "none",
//     padding: "8px 12px",
//     cursor: "pointer",
//   },
// };
