interface Category {
  name: string;
  icon: React.ElementType;
  count: number;
}

const GalleryCategories: React.FC = () => {
  const { t } = useLanguage();

  const categoriesData = t?.galleryPage?.categories ?? [];
  const icons = [Building2, Home, Building, Factory, Hotel];

  const categories: Category[] = categoriesData.map((cat: any, index: number) => ({
    name: cat.name,
    icon: icons[index],
    count: cat.count,
  }));

  return (
    <section>
      {categories.map((category, index) => (
        <motion.button key={index}>
          <category.icon />
          <span>{category.name}</span>
          <span>{category.count}</span>
        </motion.button>
      ))}
    </section>
  );
};
