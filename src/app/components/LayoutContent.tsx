"use client";

import React from "react";
import NavBar from "@/app/components/NavBar";
import AccessInfrastructureModal from "@/app/components/AccessInfrastructureModal";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <NavBar onOpenModal={() => setIsModalOpen(true)} />
      {children}
      <AccessInfrastructureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}