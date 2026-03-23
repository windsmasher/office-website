export interface PriceConfig {
  Individual: number;
  Family: number;
}

export interface AppConfig {
  FullName: string;
  NIP: string;
  REGON: string;
  KRS: string;
  CompanyAddress: string;
  BankAccount: string;
  PhoneNumber: string;
  Email: string;
  Price: PriceConfig;
  CertificatNumber: string;
}

export const Config: AppConfig = {
  FullName: 'Michał Paczka',
  NIP: '631-154-68-04',
  REGON: '241042730',
  KRS: 'I/645/2008',
  CompanyAddress: 'Gliwice, ul. Zwycięstwa 14/56 (II piętro)',
  BankAccount: '17 1050 1298 1000 0092 5145 4857',
  PhoneNumber: '+48 602 610 023',
  Email: 'mpaczka@gmail.com',
  Price: { Individual: 150, Family: 200 },
  CertificatNumber: 'SP/0092/2006',
};
