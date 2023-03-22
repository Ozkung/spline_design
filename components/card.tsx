export default function Card(props: { title: any }) {
  const { title } = props;
  return (
    <div>
      Test comp
      <div> Testio {title}</div>
    </div>
  );
}
