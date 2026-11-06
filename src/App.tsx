import { useCallback, useState } from 'react';
import { CallToAction } from '@/components/CallToAction';
import { DonationForm } from '@/components/DonationForm';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Impact } from '@/components/Impact';
import { InterestForm } from '@/components/InterestForm';
import { Modal } from '@/components/Modal';
import { Navbar } from '@/components/Navbar';
import { Features } from '@/components/Features';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { Stories } from '@/components/Stories';
import { MODAL_COPY } from '@/data/siteContent';
import type { ModalKind } from '@/types';

function App() {
  const [modal, setModal] = useState<ModalKind | null>(null);
  const closeModal = useCallback(() => setModal(null), []);
  const openModal = useCallback((kind: ModalKind) => setModal(kind), []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onOpen={openModal} />
      <main>
        <Hero onOpen={openModal} />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Impact />
        <Stories />
        <CallToAction onOpen={openModal} />
      </main>
      <Footer onOpen={openModal} />

      <Modal
        open={modal !== null}
        onClose={closeModal}
        eyebrow={modal ? MODAL_COPY[modal].eyebrow : ''}
        title={modal ? MODAL_COPY[modal].title : ''}
      >
        {modal === 'donate' && <DonationForm />}
        {modal === 'volunteer' && <InterestForm mode="volunteer" />}
        {modal === 'partner' && <InterestForm mode="partner" />}
      </Modal>
    </div>
  );
}

export default App;
