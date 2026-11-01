import { useEffect, useState } from 'react';
import { usePortfolioMode } from '@/context/PortfolioModeContext';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LearningJourney from '@/components/LearningJourney';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Reveal from '@/components/Reveal';
import RecruiterQuickView from '@/components/recruiter/RecruiterQuickView';
import Skills from '@/components/Skills';
import TeamContributionExplorer from '@/components/contributions/TeamContributionExplorer';
import TeamMembers from '@/components/TeamMembers';
import { individualPortfolio } from '@/data/individualPortfolio';
import { teamPortfolio } from '@/data/teamPortfolio';

export default function PortfolioPage() {
  const { mode } = usePortfolioMode();
  const content = mode === 'team' ? teamPortfolio : individualPortfolio;
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar name={content.name} download={content.download} isTeamMode={content.mode === 'team'} />
      <main>
        <div key={mode} className="motion-safe:animate-fade-in">
          <Hero hero={content.hero} download={content.download} onOpenRecruiter={() => setIsRecruiterOpen(true)} />
          <Reveal>
            <About about={content.about} />
          </Reveal>
          <Reveal>
            <Skills skills={content.skills} />
          </Reveal>
          <Reveal>
            <Projects projects={content.projects} />
          </Reveal>
          {content.mode === 'team' && (
            <Reveal>
              <TeamContributionExplorer projects={content.projects.items} members={content.team.members} />
            </Reveal>
          )}
          <Reveal>
            {content.mode === 'team' ? (
              <TeamMembers team={content.team} />
            ) : (
              <LearningJourney journey={content.journey} />
            )}
          </Reveal>
          <Reveal>
            <Achievements achievements={content.achievements} />
          </Reveal>
        </div>
        <Contact contact={content.contact} />
      </main>
      <RecruiterQuickView open={isRecruiterOpen} scope={{ kind: mode }} onClose={() => setIsRecruiterOpen(false)} />
      <Footer name={content.name} />
    </div>
  );
}
