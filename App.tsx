import React, { useState, useEffect, useMemo } from 'react';
import InputCard from './components/InputCard';
import Metrics from './components/Metrics';
import GrowthChart from './components/GrowthChart';
import { InputParams, CalculationResult } from './types';
import { calculateCompoundInterest } from './services/calculatorService';
import { TrendingUp } from 'lucide-react';

const App: React.FC = () => {
  // Default values
  const [inputs, setInputs] = useState<InputParams>({
    initialPrincipal: 5000,
    monthlyContribution: 500,
    interestRate: 10, // 10% annual
    rateFrequency: 'yearly',
    timePeriod: 20,
    periodUnit: 'years'
  });

  // Calculate whenever inputs change
  const results: CalculationResult = useMemo(() => {
    return calculateCompoundInterest(inputs);
  }, [inputs]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <TrendingUp className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Juros<span className="text-emerald-600">Pro</span></h1>
          </div>
          <div className="text-xs text-slate-400 font-medium">
             v1.0.0
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-4 space-y-6">
            <InputCard inputs={inputs} setInputs={setInputs} />
            
            {/* Disclaimer */}
            <div className="text-xs text-slate-400 px-2 leading-relaxed">
              * Nota: Os cálculos são projeções baseadas em taxas constantes. Rentabilidade passada não garante retorno futuro. Valores não consideram inflação ou impostos.
            </div>
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-8">
            
            <Metrics result={results} />
            
            <GrowthChart data={results.breakdown} />


          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
