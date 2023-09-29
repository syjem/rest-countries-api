function formatCountryName(name: string | undefined) {
  const countriesWithHyphens = ["guinea-bissau", "timor-leste"];

  if (name) {
    if (countriesWithHyphens.includes(name)) {
      return name.replace(/ /g, "-");
    }

    return name.replace(/-/g, " ");
  }
}

export default formatCountryName;
