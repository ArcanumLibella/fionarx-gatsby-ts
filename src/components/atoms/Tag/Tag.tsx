type TagProps = {
  label: string;
};

export const Tag = ({ label }: TagProps) => {
  return (
    <span className="flex items-center justify-center px-3 py-1.5 rounded-md uppercase border border-tomato font-brother font-extrabold bg-clip-text text-transparent bg-twilight text-xs 2xl:text-xxs">
      {label}
    </span>
  );
};
