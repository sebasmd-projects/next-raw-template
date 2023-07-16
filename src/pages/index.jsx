import { useRouter } from 'next/router';
import EnHomePage from '@/pages/en';
import EsHomePage from '@/pages/es';

export default function HomePage() {

  const router = useRouter();
  const { locale } = router;

  return (
    <>
      {locale === 'en' && <EnHomePage />}
      {locale === 'es' && <EsHomePage />}
    </>
  )
}
