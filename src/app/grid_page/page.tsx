'use client'
import React from 'react';
import SidebarWithHeader from '@/components/sidebar'
import SmallWithSocial from '@/components/footer'
import PageContent from './page_content';


export default function gridPage() {
  return (
    <main>
      <SidebarWithHeader pageContent={PageContent}/>
      <SmallWithSocial />
    </main>
  );
}