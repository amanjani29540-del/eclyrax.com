'use client';

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import AccessInfrastructureModal from '../components/AccessInfrastructureModal';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NavBar onOpenModal={() => setIsModalOpen(true)} />
      {children}
      <AccessInfrastructureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
