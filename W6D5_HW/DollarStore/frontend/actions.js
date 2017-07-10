// define and export a selectCurrency function that takes as args a baseCurrency string and a rates object.
// Should return an action (i.e. a POJO) with keys and values.

export const SWITCH_CURRENCY = "SWITCH_CURRENCY";

export const selectCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency,
  rates
});

// window.selectCurrency = selectCurrency;
