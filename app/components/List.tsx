interface Props {
  text: string;
  selected: string;
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default function List({ text, selected, handleClick }: Props) {
  return (
    <li
      className={`${
        selected === text
          ? "text-yellow-500 duration-200 transition-colors cursor-pointer"
          : ""
      } li_style`}
      data-textValue={text}
      onClick={handleClick}
    >
      {text}
    </li>
  );
}
