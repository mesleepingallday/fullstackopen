import Part from "./Part";

export default function Content({
  part1,
  excercises1,
  part2,
  excercises2,
  part3,
  excercises3,
}) {
  return (
    <>
      <Part part={part1} excercises={excercises1} />
      <Part part={part2} excercises={excercises2} />
      <Part part={part3} excercises={excercises3} />
    </>
  );
}
