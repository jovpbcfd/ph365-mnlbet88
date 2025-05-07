export default function Dot({ classname }: { classname: string | undefined }) {
  return (
    <div
      className={`h-2 w-2  rounded-full bg-white dark:bg-black flex items-center justify-center ${classname}`}
    >
      <div className="h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
    </div>
  );
}
