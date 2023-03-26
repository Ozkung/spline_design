export default function Card(props: { title: any }) {
  const { title } = props;
  return (
    <div>
      Test component
      <div> Testio {title}</div>
    </div>
  );
}
