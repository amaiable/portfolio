interface DividerWithLeftTitleProps {
  title: string;
}

export function DividerWithLeftTitle({ title }: DividerWithLeftTitleProps) {
  return (
    <div className="flex items-center">
      <span className="mx-4 shrink text-gray-600">{title}</span>
      <div className="grow border-t border-gray-300" />
    </div>
  );
}
