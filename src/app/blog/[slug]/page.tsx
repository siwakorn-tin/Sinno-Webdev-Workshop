interface paramsInt {
  slug: string;
}
export default function Page({ params }: { params: paramsInt }) {
  return <div>My Post: {params.slug}</div>;
}
