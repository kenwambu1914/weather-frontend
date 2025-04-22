// components/SearchBar.tsx

type Props = {
    onSearch: (city: string) => void;
  };
  
  export default function SearchBar({ onSearch }: Props) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const input = form.city as HTMLInputElement;
      const city = input.value.trim();
  
      if (city) {
        onSearch(city);
      }
  
      input.blur();
      form.reset();
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 mb-4 items-center justify-center"
      >
        <input
          name="city"
          type="text"
          placeholder="Enter city"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    );
  }
  