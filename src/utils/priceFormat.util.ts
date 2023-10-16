const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
  minimumFractionDigits: 0,
});

export const priceFormat = (price: number | string) => {
  return formatter.format(+price);
};
