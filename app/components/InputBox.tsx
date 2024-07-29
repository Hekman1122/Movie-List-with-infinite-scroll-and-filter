export default function InputBox() {
  return (
    <>
      <input
        type="text"
        placeholder="Category"
        list="category"
        className="border-2 border-x-neutral-100 px-4 py-1 text-sm font-semibold rounded-lg text-neutral-900"
      />
      <datalist id="category">
        <option value="popular"> Popular</option>
        <option value="release_date">release_date</option>
      </datalist>
    </>
  );
}
