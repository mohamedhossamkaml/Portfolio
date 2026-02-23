import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import StatsGrid from '../StatsGrid';

//
interface StatItem {
  number?: string;
  value?: string;
  suffix?: string;
  label?: string;
  name?: string;
}

const GalleryStats: React.FC = () => {
  const { t } = useLanguage();

  //
  const statsObj = t?.galleryPage?.stats ?? {};
  const stats: StatItem[] = Object.values(statsObj);

  //
  const gridStats = stats.map((s) => ({
    value: String(s.number ?? s.value ?? ''),
    suffix: s.suffix ?? '',
    label: s.label ?? s.name ?? '',
  }));

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* */}
        <StatsGrid stats={gridStats} />
      </div>
    </section>
  );
};

export default GalleryStats;
