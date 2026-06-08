// types/override.d.ts
declare module 'app/[locale]/layout' {
  import { ReactNode } from 'react';

  const Layout: (props: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
  }) => ReactNode;

  export default Layout;
}
