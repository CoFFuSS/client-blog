interface PostProps {
  params: { id: string };
}

export default function Post({ params: { id } }: PostProps) {
  return (
    <div>
      <h4>Post{id}</h4>
    </div>
  );
}
