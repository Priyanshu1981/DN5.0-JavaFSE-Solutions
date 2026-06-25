public class FinancialForecasting {

    public static double predictFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        double valueNextYear = presentValue + (presentValue * growthRate);

        return predictFutureValue(valueNextYear, growthRate, years - 1);
    }
}