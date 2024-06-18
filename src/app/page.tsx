'use client';
import SidebarWithHeader from '@/components/sidebar'
import SmallWithSocial from '@/components/footer'
import PageContent from './page_content'
export default function Home() {
  return (
    <main>
      <SidebarWithHeader pageContent={PageContent}/>
      <SmallWithSocial />
    </main>
  );
}
