function formatPopulation(population: string) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatPopulation;
