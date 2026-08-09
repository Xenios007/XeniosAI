export class LocalizationService {
  formatDate(value, { locale = 'en-US', timeZone = 'UTC' } = {}) {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeZone
    }).format(new Date(value));
  }

  formatCurrency(amount, { locale = 'en-US', currency = 'USD' } = {}) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(amount);
  }
}
