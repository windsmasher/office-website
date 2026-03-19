import { Config } from '../../config/config';

export interface CompanyInfoItem {
  label: string;
  value: string;
  subValue?: string;
}

/**
 * Company info fields derived from Config. Add new Config keys here to display them.
 */
export const companyInfoItems: CompanyInfoItem[] = [
  {
    label: 'NAZWA FIRMY',
    value: Config.FullName,
    subValue: 'Gabinet Psychoterapii i Leczenia Uzależnień',
  },
  { label: 'ADRES GABINETU', value: Config.CompanyAddress },
  { label: 'NR KONTA - dane do przelewu', value: Config.BankAccount },
  { label: 'NIP', value: Config.NIP },
  { label: 'REGON', value: Config.REGON },
  { label: 'KRS', value: Config.KRS },
];
