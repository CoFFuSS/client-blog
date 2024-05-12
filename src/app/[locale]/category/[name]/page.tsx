interface CategoryProps {
  params: { name: string };
}

export default function Category({ params: { name } }: CategoryProps) {
  return (
    <main>
      <h4>Category{name}</h4>
    </main>
  );
}
