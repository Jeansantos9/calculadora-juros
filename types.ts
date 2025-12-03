export interface InputParams {
  initialPrincipal: number;
  monthlyContribution: number;
  interestRate: number;
  rateFrequency: 'yearly' | 'monthly';
  timePeriod: number;
  periodUnit: 'years' | 'months';
}

export interface MonthlyData {
  month: number;
  year: number;
  invested: number;
  interest: number;
  total: number;
}

export interface CalculationResult {
  totalInvested: number;
  totalInterest: number;
  finalAmount: number;
  breakdown: MonthlyData[];
}

export enum AdvisorStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}