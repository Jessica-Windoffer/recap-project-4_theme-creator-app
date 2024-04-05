import "./ThemeForm.css";

const initalTheme = {
  name: "",
  colors: [
    { role: "primary", value: "#000000" },
    { role: "secondary", value: "#000000" },
    { role: "surface", value: "#000000" },
    { role: "surface-on", value: "#000000" },
  ],
};

export default function ThemeForm({ onSubmit }) {
  const initialData = initalTheme;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(handleSubmit, event);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newTheme = {
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onSubmit(newTheme);
  }

  return (
    <form onSubmit={handleSubmit} className="theme-form">
      <h2>Add a new Theme</h2>
      <input
        type="text"
        placeholder="Name of Theme"
        defaultValue={initialData.name}
        name="name"
        required
      ></input>
      <section className="color-inputs ">
        {initialData.colors.map((color) => (
          <input
            key={color.role}
            type="color"
            name={color.role}
            defaultValue={color.value}
          />
        ))}
      </section>
      <button type="submit" className="button-add-theme">
        Add Theme
      </button>
    </form>
  );
}
