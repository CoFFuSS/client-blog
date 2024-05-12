interface AuthorProps {
  params: { id: string };
}

export default function Authors({ params: { id } }: AuthorProps) {
  return (
    <div>
      <h4>Author{id}</h4>
    </div>
  );
}
