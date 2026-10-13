import { useState } from 'react'
export function MortgageCalculator() {
  const [price, setPrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(20)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)

  // Calculations
  const principal = price * (1 - downPayment / 100)
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  const totalPayment = monthlyPayment * numberOfPayments
  const totalInterest = totalPayment - principal

  return (
    <div className="space-y-8">
      {/* Calculator Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Inputs */}
        <div className="space-y-6">
          {/* Purchase Price */}
          <div>
            <label className="font-sans block text-sm font-semibold text-teal-700 mb-3">
              Precio de Compra: ${price.toLocaleString()}
            </label>
            <input
              type="range"
              min="100000"
              max="5000000"
              step="50000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="font-sans flex justify-between text-xs text-neutral-600 mt-2">
              <span>$100K</span>
              <span>$5M</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="font-sans block text-sm font-semibold text-teal-700 mb-3">
              Pago Inicial: {downPayment}% (${((price * downPayment) / 100).toLocaleString()})
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="font-sans flex justify-between text-xs text-neutral-600 mt-2">
              <span>0%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-semibold text-navy-600 mb-3">
              Tasa de Interés: {interestRate.toFixed(2)}%
            </label>
            <input
              type="range"
              min="2"
              max="12"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-xs text-neutral-600 mt-2">
              <span>2%</span>
              <span>12%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-semibold text-navy-600 mb-3">
              Plazo del Crédito: {loanTerm} años
            </label>
            <div className="flex gap-3">
              {[15, 20, 30].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 px-4 py-2 rounded-lg font-bold transition-all ${
                    loanTerm === term
                      ? 'bg-amber-600 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  {term}y
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-8 rounded-xl">
          <h3 className="text-h5 font-bold mb-6">Resumen de Financiamiento</h3>

          <div className="space-y-6 text-sm">
            {/* Monthly Payment */}
            <div className="border-b border-white/20 pb-4">
              <p className="text-neutral-300 mb-1">Pago Mensual</p>
              <p className="text-5xl font-bold text-amber-400">
                ${monthlyPayment.toLocaleString('es-US', { maximumFractionDigits: 0 })}
              </p>
            </div>

            {/* Principal */}
            <div className="flex justify-between pb-2 border-b border-white/20">
              <span className="text-neutral-300">Monto a Financiar:</span>
              <span className="font-semibold">${principal.toLocaleString('es-US', { maximumFractionDigits: 0 })}</span>
            </div>

            {/* Total Interest */}
            <div className="flex justify-between pb-2 border-b border-white/20">
              <span className="text-neutral-300">Interés Total:</span>
              <span className="font-semibold text-orange-400">
                ${totalInterest.toLocaleString('es-US', { maximumFractionDigits: 0 })}
              </span>
            </div>

            {/* Total Payment */}
            <div className="flex justify-between">
              <span className="text-neutral-300">Total a Pagar:</span>
              <span className="font-semibold text-lg">
                ${totalPayment.toLocaleString('es-US', { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-8 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Obtener Precalificación
          </button>
        </div>
      </div>
    </div>
  )
}
