export default function Section({ title, children, ...styleProps}) {
  return (
    <section {...styleProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
