export default function Part({ part }) {
  return (
    <p>
      {part} {part?.exercise}
    </p>
  );
}
