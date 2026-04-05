interface DividerWithLeftTitleProps {
  title: string;
}

export function DividerWithLeftTitle({ title }: DividerWithLeftTitleProps) {
  return (
    <div className="flex items-center w-full my-4 md:my-8 text-center justify-center">
      <span className="mx-4 shrink text-gray-600 sm:mx-8">{title}</span>
      <div className="grow border-t border-gray-300" />
    </div>
  );
}
